const getRandomArbitrary = (min, max) => parseInt(Math.random() * (max - min) + min, 10)
const generateRandomRGBColor = () =>
  `rgb(${getRandomArbitrary(0, 255)}, ${getRandomArbitrary(0, 255)}, ${getRandomArbitrary(0, 255)}, 0.1)`;

export async function makeItSlow() {
  // load big lib
  const useless = await import('./bigbigcode2.js');
  console.log(useless);

  `rgba(${getRandomArbitrary(0, 255)}, ${getRandomArbitrary(0, 255)}, ${getRandomArbitrary(0, 255)}, 0.002)`;
  for (let i = 0; i < 10000; i++) {
    let random = 0;
    random = Math.floor(Math.random() * 100);
    const el = document.getElementById('invisible');

    if (el) {
      el.innerText = `${random} ${random} ${random} ${random}`;
      el.style.color = `${generateRandomRGBColor()}`;
      el.style.backgroundColor = `${generateRandomRGBColor()}`;
    }
  };
}