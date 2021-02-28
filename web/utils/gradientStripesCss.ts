/**
 *
 * @name slugify.tsx
 * @author Peter Laxalt
 * @description Turn strings into slugs.
 * @example slugify("String Name Here") outputs "string-name-here"
 *
 */

import { css } from "styled-components";

type gradientStripes = {
  size: number,
  color: string,
  color_name?: string
}

export function gradientStripesCss(gradientAngle: number = 45, gradientStripes: gradientStripes[] = [
  {
    size: 30,
    color: '#e34',
    color_name: '',
  },
  {
    size: 30,
    color: '#4a4',
    color_name: '',
  },
], gradientRatio: boolean = true) {
  if (gradientAngle > 180) {
    gradientAngle = gradientAngle - 180;
  }

  var stripes_size_sum = 0;
  for (var i = 0; i < gradientStripes.length; i++) {
    stripes_size_sum += gradientStripes[i].size;
  }

  //////////////////// GET BACKGROUND SIZE ///////////////////////////////
  var bg_size_x: number;
  var bg_size_y: number;

  bg_size_x = stripes_size_sum * 2;

  if (gradientAngle > 0 && gradientAngle <= 45) {
    bg_size_x /= 2;
  }
  else if (gradientAngle > 45 && gradientAngle < 90) {
    bg_size_x *= Math.tan(gradientAngle * Math.PI / 180) / 2;
  }
  else if (gradientAngle > 90 && gradientAngle <= 135) {
    bg_size_x *= Math.tan((180 - gradientAngle) * Math.PI / 180) / 2;
  }
  else if (gradientAngle > 135 && gradientAngle < 180) {
    bg_size_x /= 2;
  }

  if (gradientRatio && !(gradientAngle == 0 || gradientAngle == 90 || gradientAngle == 180)) {
    bg_size_x = bg_size_x / Math.sin(gradientAngle * Math.PI / 180);
  }


  bg_size_y = bg_size_x;
  if (gradientAngle > 90 && gradientAngle < 180) {
    bg_size_y = bg_size_x * Math.tan((180 - gradientAngle) * Math.PI / 180);
  }
  else if (gradientAngle != 90 && gradientAngle != 0 && gradientAngle != 180) {
    bg_size_y = bg_size_x * Math.tan(gradientAngle * Math.PI / 180);
  }


  if (bg_size_y > bg_size_x) {
    var temp = bg_size_x;
    bg_size_x = bg_size_x * bg_size_x / bg_size_y;
    bg_size_x = parseFloat(bg_size_x.toFixed(2));
    bg_size_y = temp;
  }

  var bg_size_x_float = bg_size_x.toString();
  var bg_size_y_float = bg_size_y.toString();

  bg_size_x = parseFloat(parseFloat(bg_size_x_float).toFixed(2));
  bg_size_y = parseFloat(parseFloat(bg_size_y_float).toFixed(2));


  //////////////////// GET PERCENT CODE ///////////////////////////////

  var percents = [];
  for (var i = 0; i < gradientStripes.length; i++) {
    percents[i] = (gradientStripes[i].size * 100 / stripes_size_sum) / 2;
  }

  var percents_code = '';
  var percents_code_text = '';
  for (var i = 0; i < gradientStripes.length * 2; i++) {
    var percents_sum = 0;
    for (var j = 0; j <= i; j++) {
      var k = j;
      if (j >= gradientStripes.length) {
        k = j - gradientStripes.length;
      }
      percents_sum += percents[k];
    }
    
    var percents_sum_float = percents_sum.toString();

    percents_sum = parseFloat(parseFloat(percents_sum_float).toFixed(2).replace(/\.0+$/, ''));

    var j = i;
    if (j >= gradientStripes.length) {
      j = j - gradientStripes.length;
    }

    var k = j + 1;
    if (k >= gradientStripes.length) {
      k = k - gradientStripes.length;
    }

    var color_name = gradientStripes[j].color;
    if (gradientStripes[j].color_name) {
      color_name = gradientStripes[j].color_name;
    }

    var color_name2 = gradientStripes[k].color;
    if (gradientStripes[k].color_name) {
      color_name2 = gradientStripes[k].color_name;
    }

    if (i == gradientStripes.length * 2 - 1) {
      percents_code += gradientStripes[j].color + ' ' + percents_sum + '%';
      percents_code_text += color_name + ' ' + percents_sum + '%';
    }
    else {
      percents_code += gradientStripes[j].color + ' ' + percents_sum + '%, ' + gradientStripes[k].color + ' ' + percents_sum + '%, ';
      percents_code_text += color_name + ' ' + percents_sum + '%, ' + color_name2 + ' ' + percents_sum + '%, ';
    }
  }

  return css`
    background-image: linear-gradient(${gradientAngle}deg, ${percents_code}); 
    background-size: ${bg_size_x}px  ${bg_size_y}px;
  `;
};
