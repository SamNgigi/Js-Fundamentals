const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlay_image = document.querySelector("img");
const overlay_close = document.querySelector(".close");

function generateHtml([column_span, row_span]) {
  for (let index = 0; index < 12; index++) {
    // const element = array[index];
    return `
    <div id=image${index} class="col-${column_span} v${row_span}">
      <img src="https://source.unsplash.com/1000x300">
      <div class ="item-overlay">
        <button>View</button>
      </div>
    </div>
  `
  }
}

function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

function randomSize(min, max) {
  let size = Math.floor(Math.random() * (max - min)) + min;
  return Math.ceil(size / 100) * 100;
}

const digits = Array.from({
  length: 50
}, () => [randomNumber(4), randomNumber(4)])
// console.log(digits);

const image_size = Array.from({
  length: 50
}, () => [randomSize(600, 1200), randomSize(500, 1000)])
console.log(image_size);