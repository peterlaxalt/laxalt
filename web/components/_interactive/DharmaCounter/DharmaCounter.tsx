// Core
import React from "react";
import {
  DharmaTypeClassName,
  DharmaTypeStyle,
} from "../../_svg/DharmaType/styles.scss";

// Begin Types
// __________________________________________________________________________________________

type LXLT_DharmaCounter = {
  text: string;
};

type LXLT_DharmaCounterState = {
  text: string;
  characters: LXLT_DharmaChar[];

  viewBoxHeight: number;
  viewBoxWidth: number;

  characterVerticalTranslation: number;
  characterHorizontalScale: number;
  characterVerticalScale: number;

  characterWidth: number;

  isInitialized: boolean;
};

type LXLT_DharmaChar = {
  letter: string;
  count: number;
  idx: number;
};

// Begin Component
// __________________________________________________________________________________________

/**
 * @name DharmaCounter
 * @author Peter Laxalt
 *
 */
export class DharmaCounter extends React.PureComponent<
  LXLT_DharmaCounter,
  LXLT_DharmaCounterState
> {
  constructor(props: LXLT_DharmaCounter) {
    super(props);

    this.state = {
      text: "",
      characters: [],

      viewBoxHeight: 0,
      viewBoxWidth: 0,
      characterWidth: 0,

      characterVerticalTranslation: 0,
      characterHorizontalScale: 0,
      characterVerticalScale: 0,

      isInitialized: false,
    };

    this.incrementLetterCount = this.incrementLetterCount.bind(this);
    this.letterCountTimer = this.letterCountTimer.bind(this);
  }

  componentDidMount() {
    if (this.props.text) {
      // ____________________________________________
      // Get text / create array
      let { text } = this.props;

      let splitCharacterArray = text.split("");
      let characterArray: LXLT_DharmaChar[] = splitCharacterArray.map(
        (character: string, idx: number) => {
          return {
            letter: character,
            count: 1,
            idx: idx,
          };
        }
      );

      // ____________________________________________
      // USE THESE TO TWEAK YOUR CHARACTERS TO FIT
      let viewBoxHeight = 100;
      let viewBoxWidth = 100;

      let characterCount = splitCharacterArray.length;
      let characterWidth = viewBoxWidth / characterCount;

      let characterVerticalTranslation = 0.983; // Multiplied by the viewBoxHeight
      let characterHorizontalScale = 0.75; // Multiplied by the characterWidth
      let characterVerticalScale = 1.38; // Multiplied by the characterWidth

      this.setState({
        text: text,
        characters: characterArray,

        viewBoxHeight: viewBoxHeight,
        viewBoxWidth: viewBoxWidth,

        characterWidth: characterWidth,

        characterHorizontalScale: characterHorizontalScale,
        characterVerticalScale: characterVerticalScale,
        characterVerticalTranslation: characterVerticalTranslation,

        isInitialized: true,
      });

      this.letterCountTimer();
    }
  }

  incrementLetterCount(id: number) {
    this.setState({
      characters: this.state.characters.map(
        (character: LXLT_DharmaChar, idx: number) => {
          return {
            letter: character.letter,
            count: id == character.idx ? character.count + 1 : character.count,
            idx: idx,
          };
        }
      ),
    });

    return;
  }

  letterCountTimer() {
    function generateRandomInteger(min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    }

    window.setInterval(
      () =>
        this.incrementLetterCount(
          generateRandomInteger(0, this.state.characters.length)
        ),
      3000
    );
  }

  render() {
    let {
      viewBoxHeight,
      viewBoxWidth,
      characters,
      characterWidth,

      characterHorizontalScale,
      characterVerticalScale,
      characterVerticalTranslation,
    } = this.state;

    console.log("DharmaCounter state:", this.state);

    return (
      <DharmaTypeStyle
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="none"
        className={`${DharmaTypeClassName} ${DharmaTypeClassName}--couter`}
        style={{
          [`--${DharmaTypeClassName}-font-size` as any]: `${viewBoxHeight}px`,
        }}
      >
        <filter id="displacementFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="1.2"
            numOctaves="2"
            result="turbulence"
          />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="3"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        <g>
          {characters.map((char: LXLT_DharmaChar, idx: number) => {
            let countArray = Array.from(Array(char.count).keys());

            return countArray.map((duplicate: number, idxx: number) => {
              let adjustedDuplicate =
                char.count > 1 ? char.count : duplicate + 1;

              let adjustedVerticalTranslation =
                (viewBoxHeight / adjustedDuplicate) *
                (idxx + 1) *
                characterVerticalTranslation;

              let adjustedVerticalScale =
                characterVerticalScale / adjustedDuplicate;

              return (
                <g
                  className={`${DharmaTypeClassName}__character-wrapper`}
                  data-char-id={idx}
                  data-char-count={duplicate}
                  key={idxx}
                  onClick={() => this.incrementLetterCount(idx)}
                >
                  <text
                    className={`${DharmaTypeClassName}__character`}
                    transform={`translate(${
                      characterWidth * idx
                    } ${adjustedVerticalTranslation}) scale(${characterHorizontalScale}, ${adjustedVerticalScale})`}
                    style={{
                      [`--${DharmaTypeClassName}-key` as any]: idx,
                    }}
                  >
                    <tspan className={`${DharmaTypeClassName}__letter`}>
                      {char.letter}
                    </tspan>
                  </text>
                </g>
              );
            });
          })}
        </g>
      </DharmaTypeStyle>
    );
  }
}
