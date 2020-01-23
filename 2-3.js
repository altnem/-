function ChangeImageAndBack(){imgback();
ThreeSecChange2();
}
function ThreeSecChange2(){
  setTimeout("imgchange3()",1500);
}
function imgchange3() {
  document.getElementById('img').src = './image/benibanazome.jpg';
}
function imgback() {
  document.getElementById('img').src = './image/benibana.jpg';
}