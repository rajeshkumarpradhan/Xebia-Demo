
let hexCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

export function randomColor() {
  let hexColor = '#', counter = 0;
  for (; counter < 6 ; counter++) {
    hexColor += hexCode[Math.round(Math.random()*15)];
  }

  return hexColor;
}
