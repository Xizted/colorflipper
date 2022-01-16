import colors from './constant/colors';
import changeColor from './helper/changeColor';
import generateColorHEX from './helper/generateColorHEX';
import getRandomNumber from './helper/getRandomNumber';
import './style.css';

const init = (): void => {
  const btnPrimary = document.querySelector<HTMLButtonElement>('#btn-primary')!;
  const btnSecondary =
    document.querySelector<HTMLButtonElement>('#btn-secondary')!;
  const btnTertiary =
    document.querySelector<HTMLButtonElement>('#btn-tertiary')!;
  const btnTypeColor =
    document.querySelector<HTMLButtonElement>('#btn-type-color')!;
  const main = document.querySelector<HTMLElement>('main')!;
  const span = document.querySelector<HTMLSpanElement>('span')!;

  btnPrimary.addEventListener('click', () => {
    const randomNumber = getRandomNumber(0, colors['primary'].length);
    span.textContent = changeColor(main, colors['primary'][randomNumber]);
  });

  btnSecondary.addEventListener('click', () => {
    const randomNumber = getRandomNumber(0, colors['secondary'].length);
    span.textContent = changeColor(main, colors['secondary'][randomNumber]);
  });

  btnTertiary.addEventListener('click', () => {
    const randomNumber = getRandomNumber(0, colors['tertiary'].length);
    span.textContent = changeColor(main, colors['tertiary'][randomNumber]);
  });

  btnTypeColor.addEventListener('click', () => {
    const randomColor = generateColorHEX();
    span.textContent = changeColor(main, randomColor);
  });
};

window.addEventListener('DOMContentLoaded', () => {
  init();
});