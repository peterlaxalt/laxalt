// Core
import React from "react";
import { Theme } from "../../../constants/Theme";
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

  offsetCount: number;
};

type LXLT_DharmaChar = {
  letter: string;
  count: number;
  idx: number;
  copies: boolean;
};

type LXLT_DharmaCounterDisplay = LXLT_DharmaCounterState & {
  updateLetterCount: (id: number) => void;

  outlined?: boolean;
  offset?: number;
  addClass?: string;
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

      offsetCount: 3,

      characterVerticalTranslation: 0,
      characterHorizontalScale: 0,
      characterVerticalScale: 0,

      isInitialized: false,
    };

    this.incrementLetterCount = this.incrementLetterCount.bind(this);
    this.decrementLetterCount = this.decrementLetterCount.bind(this);
    this.resetLetterCount = this.resetLetterCount.bind(this);
    this.updateLetterCount = this.updateLetterCount.bind(this);

    this.letterCountTimer = this.letterCountTimer.bind(this);

    this.offsetCountTimer = this.offsetCountTimer.bind(this);
    this.incrementOffsetCount = this.incrementOffsetCount.bind(this);
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
            copies: Math.random() <= 0.5,
          };
        }
      );

      // ____________________________________________
      // USE THESE TO TWEAK YOUR CHARACTERS TO FIT
      let viewBoxHeight = 100;
      let viewBoxWidth = 100;

      let characterCount = splitCharacterArray.length;
      let characterWidth = viewBoxWidth / characterCount;

      // let characterVerticalTranslation = 0.963; // Multiplied by the viewBoxHeight
      let characterVerticalTranslation = 0.993; // Multiplied by the viewBoxHeight
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
      this.offsetCountTimer();
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
            copies: Math.random() <= 0.5,
          };
        }
      ),
    });

    return;
  }

  decrementLetterCount(id: number) {
    this.setState({
      characters: this.state.characters.map(
        (character: LXLT_DharmaChar, idx: number) => {
          return {
            letter: character.letter,
            count: id == character.idx ? character.count - 1 : character.count,
            idx: idx,
            copies: Math.random() <= 0.5,
          };
        }
      ),
    });

    return;
  }

  resetLetterCount(id: number) {
    this.setState({
      characters: this.state.characters.map(
        (character: LXLT_DharmaChar, idx: number) => {
          return {
            letter: character.letter,
            count: id == character.idx ? 1 : character.count,
            idx: idx,
            copies: Math.random() <= 0.5,
          };
        }
      ),
    });

    return;
  }

  updateLetterCount(id: number) {
    if (this.state.characters && this.state.characters.length > 0) {
      let matchedCharacter: LXLT_DharmaChar = this.state.characters.filter(
        (character: LXLT_DharmaChar) => character.idx == id
      )[0];

      let maxCount = 4;

      if (matchedCharacter) {
        if (matchedCharacter.count === maxCount) {
          this.resetLetterCount(id);
        } else {
          this.incrementLetterCount(id);
        }
      } else {
        return;
      }
    } else {
      return;
    }

    return;
  }

  letterCountTimer() {
    function generateRandomInteger(min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    }

    window.setInterval(
      () =>
        this.updateLetterCount(
          generateRandomInteger(0, this.state.characters.length)
        ),
      3000
    );
  }

  incrementOffsetCount() {
    this.setState({
      offsetCount: this.state.offsetCount < 15 ? this.state.offsetCount + 1 : 2,
    });

    return;
  }

  offsetCountTimer() {
    window.setInterval(() => this.incrementOffsetCount(), 5000);
  }

  render() {
    let offsetCount = this.state.offsetCount;
    var offsetArr = Array.from(Array(offsetCount).keys());

    return (
      <>
        <DharmaCounterDisplay
          updateLetterCount={this.updateLetterCount}
          {...this.state}
        />

        {offsetArr.map((n: number, idx: number) => {
          return (
            <DharmaCounterDisplay
              outlined={true}
              offset={n}
              key={idx}
              updateLetterCount={this.updateLetterCount}
              {...this.state}
            />
          );
        })}
      </>
    );
  }
}

const DharmaCounterDisplay: React.FunctionComponent<LXLT_DharmaCounterDisplay> = (
  props
) => {
  let {
    viewBoxHeight,
    viewBoxWidth,
    characters,
    characterWidth,

    characterHorizontalScale,
    characterVerticalScale,
    characterVerticalTranslation,

    updateLetterCount,

    offset,
    outlined,

    addClass,
  } = props;

  return (
    <DharmaTypeStyle
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio="none"
      className={`${DharmaTypeClassName} ${DharmaTypeClassName}--counter ${
        offset ? `${DharmaTypeClassName}--offset` : ""
      } ${addClass}`}
      style={{
        [`--${DharmaTypeClassName}-font-size` as any]: `${viewBoxHeight}px`,
        [`--${DharmaTypeClassName}-offset` as any]: `${offset ? offset : 0}`,
      }}
    >
      <g>
        {characters.map((char: LXLT_DharmaChar, idx: number) => {
          let countArray = Array.from(Array(char.count).keys());

          return countArray.map((duplicate: number, idxx: number) => {
            let adjustedDuplicate = char.count > 1 ? char.count : duplicate + 1;

            let canCopy = Math.random() <= 0.5;

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
                onClick={() => updateLetterCount(idx)}
                style={{
                  display: outlined && char.copies && canCopy ? "none" : "inherit",
                }}
              >
                <filter
                  id={`displacementFilter__${idx}__${idxx}${
                    outlined ? "__outlined" : ""
                  }`}
                >
                  {!outlined && (
                    <>
                      <feTurbulence
                        type="turbulence"
                        // baseFrequency={0.6 * (idxx * 0.05)}
                        // numOctaves={1 * (idxx + 20)}
                        baseFrequency={0}
                        numOctaves={0}
                        result="turbulence"
                      />
                      <feDisplacementMap
                        in2="turbulence"
                        in="SourceGraphic"
                        // scale={3 - idxx * 0.5}
                        scale={0}
                        xChannelSelector="R"
                        yChannelSelector="G"
                      />
                    </>
                  )}

                  {/* Outline  */}
                  {outlined && (
                    <>
                      <feFlood
                        flood-color={Theme.Color.varBackground}
                        flood-opacity="1"
                        result="PINK"
                      />
                      <feMorphology
                        in="SourceAlpha"
                        result="DILATED"
                        operator="dilate"
                        radius=".1"
                      />
                      <feComposite
                        in="PINK"
                        in2="DILATED"
                        operator="in"
                        result="OUTLINE"
                      />

                      <feMerge>
                        <feMergeNode in="OUTLINE" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </>
                  )}
                </filter>

                <text
                  className={`${DharmaTypeClassName}__character`}
                  transform={`translate(${
                    characterWidth * idx
                  } ${adjustedVerticalTranslation}) scale(${characterHorizontalScale}, ${adjustedVerticalScale})`}
                  style={{
                    [`--${DharmaTypeClassName}-key` as any]: idx,
                    filter: `url(#displacementFilter__${idx}__${idxx}${
                      outlined ? "__outlined" : ""
                    })`,
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
};
