const themeStyle = (colorText, background) => {
  return `color: ${colorText}; font-style: italic; background-color: ${background}; padding: 8px`;
};

const paletteColor = [
  ["#6C4AB6", "#B9E0FF"],
  ["#001253", "#E14D2A"],
  ["#F0FF42", "#379237"],
  ["#FAEA48", "#001253"],
  ["#38E54D", "#2C3639"],
  ["#FDF0E0", "#61764B"],
  ["#FF6D28", "#0008C1"],
];
//? spread ... розпаковуємо масив

const showMessage = (text) => {
  let max = paletteColor.length;
  let randomColor = Math.floor(Math.random() * max);
  //   console.log(randomColor);
  //   console.log(
  //     `%c${text}`,
  //     themeStyle(paletteColor[randomColor][0], paletteColor[randomColor][1])
  //   );
  //   console.log(...paletteColor[randomColor]);
  console.log(`%c${text}`, themeStyle(...paletteColor[randomColor]));
};

export { showMessage };
