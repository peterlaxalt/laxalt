/**
 *
 * Shader fun
 * @author Peter Laxalt
 *
 */

import p5, { Font } from "p5";
import { Base } from "../../constants/styles/Base";
import { ThreeWaterCanvas } from "../three/three-water-distort.canvas";

// Begin Component
// __________________________________________________________________________

export type LXLT_DharmaCanvas = {
  W: number;
  H: number;
  ID: number;
  // BG: LXLT_ColorTheme;
  parentEl: HTMLDivElement;
};

export type LXLT_DharmaCanvasDisplay = (
  W: number,
  H: number,
  ID: number,
  // BG: LXLT_ColorTheme,
  parentEl: HTMLDivElement
) => (p: p5) => void;

type LXLT_DharmaCanvasChar = {
  letter: string;
  count: number;
  idx: number;

  copies: number;
  copiesLastVisible: number;
  copiesAreVisible: boolean;

  copiesAreIncrementing: boolean;
  copiesAreDecrementing: boolean;

  countIsIncrementing: boolean;
  countIsDecrementing: boolean;
};

const DharmaCanvasDisplay: LXLT_DharmaCanvasDisplay = (
  W,
  H,
  ID,
  // DharmaTheme,
  parentEl
) => (p: p5) => {
  // _________________________________________________
  // Config

  let canvas;

  // ____________________________
  // Fonts
  let dharmaFont: Font;

  // ____________________________
  // Typography
  let text = "LAX";

  let splitCharacterArray = text.split("");
  let characters: LXLT_DharmaCanvasChar[] = splitCharacterArray.map(
    (character: string, idx: number) => {
      return {
        letter: character,
        count: 1,
        idx: idx,

        copies: 5,
        copiesLastVisible: 0,
        copiesAreVisible: false,

        countIsIncrementing: true,
        countIsDecrementing: false,

        copiesAreIncrementing: true,
        copiesAreDecrementing: false,
      };
    }
  );

  let isTablet: boolean = W < Base.Media.Width.Md;

  let characterCount: number = splitCharacterArray.length;
  let characterWidth: number = W / characterCount;
  let characterSize: number = !isTablet ? H * 1.15 : H * 1;

  let verticalSkewDivisible: number = !isTablet ? 2.75 : 2;
  let characterSkewDivisible: number = 1.36;

  console.log(characterSize, "characterSize");

  // ____________________________
  // Counts
  // let renderCount: number = 0;
  let previousCountUpdateTime: number = 0;
  let previousCopyUpdateTime: number = 0;

  // ____________________________
  // Strokes
  let strokeWidth: number = !isTablet ? 4 : 2;
  let strokeOffset: number = !isTablet ? strokeWidth * 1.5 : strokeWidth * 1.25;

  // ____________________________
  // Limits
  let maxCount = 3;
  let minCount = 1;

  let maxCopies = !isTablet ? 12 : 7;
  let minCopies = 1;

  let frameRate = 60;

  // ____________________________
  // Translation
  // let previousVerticalTranslation: number = H / 2.25;

  let verticalTranslationWhitespaceCompensation: number = !isTablet ? 2.25 : 2.75;
  const previousHorizontalTranslation = (idx: number) =>
    -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset);

  // _________________________________________________
  // Preload
  p.preload = () => {
    dharmaFont = p.loadFont(`/fonts/dharma/dharma_regular.ttf`);
  };

  // _________________________________________________
  // Setup
  p.setup = () => {
    // Our Canvas
    canvas = p.createCanvas(W, H);

    // ThreeWaterCanvas(parentEl, canvas.elt);

    p.frameRate(frameRate);

    if (window.devicePixelRatio > 1 && window.devicePixelRatio < 3) {
      p.pixelDensity(1.25);
    }
  };

  // _________________________________________________
  // Update Character
  const updateCharacter = (char: LXLT_DharmaCanvasChar, idx: number) => {
    if (char.count < maxCount && char.countIsIncrementing) {
      characters[idx] = {
        ...char,
        count: char.count + 1,
      };

      previousCountUpdateTime = p.millis();

      return;
    } else if (char.count === maxCount) {
      characters[idx] = {
        ...char,
        count: char.count - 1,
        countIsIncrementing: false,
        countIsDecrementing: true,
      };

      previousCountUpdateTime = p.millis();

      return;
    } else if (char.count > minCount && char.countIsDecrementing) {
      characters[idx] = {
        ...char,
        count: char.count - 1,
        countIsDecrementing: true,
      };

      previousCountUpdateTime = p.millis();

      return;
    } else if (char.count === minCount && char.countIsDecrementing) {
      characters[idx] = {
        ...char,
        count: char.count + 1,
        countIsIncrementing: true,
        countIsDecrementing: false,
      };

      previousCountUpdateTime = p.millis();

      return;
    }

    return;
  };

  // _________________________________________________
  // Update Copies
  const updateCopies = (char: LXLT_DharmaCanvasChar, idx: number) => {
    if (char.copies < maxCopies && char.copiesAreIncrementing) {
      characters[idx] = {
        ...char,
        copies: char.copies + 1,
      };

      previousCopyUpdateTime = p.millis();

      return;
    } else if (char.copies === maxCopies) {
      characters[idx] = {
        ...char,
        copies: char.copies - 1,
        copiesAreIncrementing: false,
        copiesAreDecrementing: true,
      };

      previousCopyUpdateTime = p.millis();

      return;
    } else if (char.copies > minCopies && char.copiesAreDecrementing) {
      characters[idx] = {
        ...char,
        copies: char.copies - 1,
        copiesAreDecrementing: true,
      };

      previousCopyUpdateTime = p.millis();

      return;
    } else if (char.copies === minCopies && char.copiesAreDecrementing) {
      characters[idx] = {
        ...char,
        copies: char.copies + 1,
        copiesAreIncrementing: true,
        copiesAreDecrementing: false,
      };

      previousCopyUpdateTime = p.millis();

      return;
    }

    return;
  };

  // _________________________________________________
  // Draw
  p.draw = () => {
    if (p.frameCount % 10 === 0 && !window.dharmaPaused) {
      p.background(window.laxaltUniversalTheme.background);
      p.textFont(dharmaFont);
      p.textSize(characterSize);
      p.textAlign(p.CENTER, p.CENTER);
      p.fill(`${window.laxaltUniversalTheme.foreground}`);
      p.strokeWeight(strokeWidth);
      p.stroke(window.laxaltUniversalTheme.background);

      if (H && W) {
        // _________________________________________
        // Loop through our copies
        characters.map((char: LXLT_DharmaCanvasChar, idx: number) => {
          p.scale(1, 1);

          let randomCharPick = Math.random() <= 0.5;

          if (randomCharPick) {
            updateCopies(char, idx);
          }

          if (randomCharPick && p.millis() - previousCountUpdateTime > 3000) {
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

            // let randomCopyPick = Math.random() <= 0.5;
            // let copyTimer = p.millis() - previousCopiesVisibleTime > 2000;
            previousCopyUpdateTime;

            // let isFirstCount = true;

            copiesArray.map((copyNumber: number, idxxx: number) => {
              // let centerCoordsX = W / 2;
              // let centerCoordsY = H / 2;

              // let horizontalTranslate =
              //   copyNumber !== 1
              //     ? (previousHorizontalTranslation(idx) +
              //         (strokeOffset / (p.mouseX / 100)) * copyNumber)
              //     : previousHorizontalTranslation(idx) +
              //       strokeOffset * copyNumber;

              // let verticalTranslate =
              //   copyNumber !== 1
              //     ? (duplicateVerticalPosition - (strokeOffset / (p.mouseX / 100)) * copyNumber)
              //     : duplicateVerticalPosition - strokeOffset * copyNumber;

              let horizontalTranslate =
                previousHorizontalTranslation(idx) + strokeOffset * copyNumber;

              let verticalTranslate =
                duplicateVerticalPosition - strokeOffset * copyNumber;

              p.push();
              p.scale(1, verticalScale);
              p.text(char.letter, horizontalTranslate, verticalTranslate);
              p.pop();
            });
          });
        });
      }
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(W, H);
  };
};

export default DharmaCanvasDisplay;
