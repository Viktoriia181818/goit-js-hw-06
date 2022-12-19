
const txtEl = document.querySelector('#text');
const sizeControl = document.querySelector('#font-size-control');

sizeControl.addEventListener("input", event => {
  const size = sizeControl.value;
  // console.log(size);

  txtEl.style.fontSize = size + "px";
});



