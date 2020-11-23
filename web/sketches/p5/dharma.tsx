/**
 *
 * Shader fun
 * @author Peter Laxalt
 *
 */

import p5, { Font } from "p5";
import { Theme } from "../../constants/Theme";

// Begin Component
// __________________________________________________________________________

export type LXLT_DharmaCanvas = {
  W: number;
  H: number;
  ID: number;
  BG: string;
};

export type LXLT_DharmaCanvasDisplay = (
  W: number,
  H: number,
  ID: number,
  BG: string
) => (p: p5) => void;

type LXLT_DharmaCanvasChar = {
  letter: string;
  count: number;
  idx: number;

  copies: number;

  isIncrementing: boolean;
  isDecrementing: boolean;
};

const DharmaCanvasDisplay: LXLT_DharmaCanvasDisplay = (W, H, ID, BG) => (
  p: p5
) => {
  // _________________________________________________
  // Config

  // ____________________________
  // Fonts
  let dharmaFont: Font;

  // ____________________________
  // Typography
  let text = "LAXALT";

  let splitCharacterArray = text.split("");
  let characters: LXLT_DharmaCanvasChar[] = splitCharacterArray.map(
    (character: string, idx: number) => {
      return {
        letter: character,
        count: 1,
        idx: idx,

        copies: 5,

        isIncrementing: true,
        isDecrementing: false,
      };
    }
  );

  let characterCount: number = splitCharacterArray.length;
  let characterWidth: number = W / characterCount;
  let characterSize: number = H * 1.25;

  console.log(characterSize, "characterSize");

  // ____________________________
  // Counts
  // let renderCount: number = 0;
  let previousTime: number = 0;

  // ____________________________
  // Strokes
  let strokeWidth: number = 4;
  let strokeOffset: number = strokeWidth * 1.5;

  // ____________________________
  // Incrementing
  let maxCount = 6;
  let minCount = 1;

  // ____________________________
  // Translation
  // let previousVerticalTranslation: number = H / 2.25;

  let verticalTranslationWhitespaceCompensation: number = 2.25;
  const previousHorizontalTranslation = (idx: number) =>
    -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset);

  // const previousHorizontalTranslation = (idx: number) =>
  //   characterWidth * idx + characterWidth / 2 + strokeOffset * renderCount;

  // let characterVerticalTranslation = 0.963; // Multiplied by the viewBoxHeight
  // let characterVerticalTranslation: number = 0.993; // Multiplied by the viewBoxHeight
  // let characterHorizontalScale: number = 0.75; // Multiplied by the characterWidth
  // let characterVerticalScale: number = 1.38; // Multiplied by the characterWidth

  // _________________________________________________
  // Preload
  p.preload = () => {
    dharmaFont = p.loadFont(`/fonts/dharma/dharma_regular.ttf`);
  };

  // _________________________________________________
  // Setup
  p.setup = () => {
    // Our Canvas
    p.createCanvas(W, H);
  };

  // _________________________________________________
  // Update Character
  const updateCharacter = (char: LXLT_DharmaCanvasChar, idx: number) => {
    if (char.count < maxCount && char.isIncrementing) {
      characters[idx] = {
        ...char,
        count: char.count + 1,
      };

      previousTime = p.millis();
    } else if (char.count === maxCount) {
      characters[idx] = {
        ...char,
        count: char.count - 1,
        isIncrementing: false,
        isDecrementing: true,
      };

      previousTime = p.millis();
    } else if (char.count > minCount && char.isDecrementing) {
      characters[idx] = {
        ...char,
        count: char.count - 1,
        isDecrementing: true,
      };

      previousTime = p.millis();
    } else if (char.count === minCount && char.isDecrementing) {
      characters[idx] = {
        ...char,
        count: char.count + 1,
        isIncrementing: true,
        isDecrementing: false,
      };

      previousTime = p.millis();
    }
  };

  // _________________________________________________
  // Draw
  p.draw = () => {
    p.background(BG);

    p.textFont(dharmaFont);

    p.textSize(characterSize);

    p.textAlign(p.CENTER, p.CENTER);

    p.fill(`${Theme.Color.Galaxy}`);
    p.strokeWeight(strokeWidth);
    p.stroke(BG);

    if (H && W) {
      // _________________________________________
      // Loop through our copies
      characters.map((char: LXLT_DharmaCanvasChar, idx: number) => {
        p.scale(1, 1);

        let randomCharPick = Math.random() <= 0.5;

        if (randomCharPick && p.millis() - previousTime > 3000) {
          updateCharacter(char, idx);
        }

        let countArray: number[] = Array.from(Array(char.count).keys());

        countArray = countArray.map((countNumber: number) => {
          return countNumber + 1;
        });

        // _________________________________________
        // Duplicate positions
        countArray.map((countNumber: number, idxx: number) => {
          let verticalScale = 1 / (char.count * 0.95);

          let verticalSkewDivisible: number = 2.75;
          let characterSkewDivisible: number = 1.36;

          let duplicateVerticalPosition: number =
            char.count == 1
              ? H / verticalTranslationWhitespaceCompensation
              : characterSize / verticalSkewDivisible +
                (characterSize / characterSkewDivisible) * idxx;

          // _________________________________________
          // Make copies
          let copiesArray: number[] = Array.from(Array(char.copies).keys());
          // let randomCopyPick = Math.random() <= 0.5;

          copiesArray = copiesArray.map((copyNumber: number) => {
            return copyNumber + 1;
          });

          copiesArray.map((copyNumber: number, idxxx: number) => {
            p.push();
            p.scale(1, verticalScale);
            p.text(
              char.letter,
              previousHorizontalTranslation(idx) + strokeOffset * copyNumber,
              duplicateVerticalPosition - strokeOffset * copyNumber
            );
            p.pop();
          });
        });
      });
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(W, H);
  };
};

export default DharmaCanvasDisplay;
