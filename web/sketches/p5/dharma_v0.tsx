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
        copies: 1,
      };
    }
  );

  let characterCount: number = splitCharacterArray.length;
  let characterWidth: number = W / characterCount;

  // ____________________________
  // Counts
  let renderCount: number = 0;

  // ____________________________
  // Strokes
  let strokeWidth: number = 2;
  let strokeOffset: number = strokeWidth * 3;

  // ____________________________
  // Incrementing
  // let maxCopies = 30;
  // let minCopies = 1;

  let isIncrementing: boolean = true;
  isIncrementing;

  // ____________________________
  // Translation
  let previousVerticalTranslation: number = H / 2.25;
  const previousHorizontalTranslation = (idx: number) =>
    characterWidth * idx + characterWidth / 2 + strokeOffset * renderCount;

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
  // Draw
  p.draw = () => {
    // p.background(BG);

    p.textFont(dharmaFont);

    p.textLeading(0);
    p.textSize(H * 1.25);

    p.textAlign(p.CENTER, p.CENTER);

    p.fill(`${Theme.Color.Galaxy}`);
    p.strokeWeight(strokeWidth);
    p.stroke(BG);

    p.mouseIsPressed
      ? (renderCount = renderCount + 1)
      : (renderCount = renderCount);

    if (H && W) {
      characters.map((char: LXLT_DharmaCanvasChar, idx: number) => {
        let countArray: number[] = Array.from(Array(char.count).keys());

        p.scale(1, .5);

        if (p.mouseIsPressed) {
          return countArray.map((duplicate: number, idxx: number) => {
            previousVerticalTranslation =
              H / 2.25 + strokeOffset * renderCount * -1;

            p.text(
              char.letter,
              previousHorizontalTranslation(idx),
              previousVerticalTranslation
            );
          });
        } else {
          return countArray.map((duplicate: number, idxx: number) => {
            p.text(
              char.letter,
              previousHorizontalTranslation(idx),
              previousVerticalTranslation
            );
          });
        }
      });
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(W, H);
  };
};

export default DharmaCanvasDisplay;
