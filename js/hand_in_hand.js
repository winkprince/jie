
var images = [
  'https://krseoul.imgtbl.com/i/2024/04/26/662b0aa633e07.jpg',
  'https://krseoul.imgtbl.com/i/2024/04/26/662b0abb1c6c4.jpg',
  'https://krseoul.imgtbl.com/i/2024/04/26/662b0abc760f1.jpg',
  'https://krseoul.imgtbl.com/i/2024/04/26/662b0ac662ac6.jpg',
  'https://krseoul.imgtbl.com/i/2024/04/26/662b0ad26171d.jpg',
  'https://krseoul.imgtbl.com/i/2024/04/26/662b0ae32879f.jpg',
  'https://krseoul.imgtbl.com/i/2024/04/26/662b0ae3401bb.jpg',
  'https://krseoul.imgtbl.com/i/2024/04/26/662b0ae421c94.jpg',
  'https://krseoul.imgtbl.com/i/2024/04/26/662b0ae78fae6.jpg',
  'https://krseoul.imgtbl.com/i/2024/04/26/662b0ae7a619c.jpg',
  'https://krseoul.imgtbl.com/i/2024/04/26/662b0aec69e44.jpg',
  'https://krseoul.imgtbl.com/i/2024/04/26/662b0aee62d37.jpg',
  'https://krseoul.imgtbl.com/i/2024/04/26/662b0aee0c556.jpg'
];

var imgIndex = 0;
var container = document.getElementById('image-container');
var interval = 1500;

function changeImage() {

  var img = new Image();

  // 设置图片加载完成后的回调
  img.onload = function () {
    // 图片加载完成后，更新容器的内容
    container.innerHTML = '';
    container.appendChild(img); // 添加图片到容器中
    // 继续下一个图片更改的计时
    setTimeout(accelerateImageChange, interval);
  };

  imgIndex++;
  if (imgIndex >= images.length) {
    executeAnotherAnimation(); // 到达最后一张图片时执行另一个动画
    return; // 退出函数，避免死循环
  }

  img.src = images[imgIndex];
  img.alt = 'Image';
  img.id = 'image';
}

function accelerateImageChange() {
  changeImage();
  if (interval > 500) {
    interval *= 0.7;
  }
}

function executeAnotherAnimation() {
  setTimeout(x, 2000);
}

var x = function () {
  var a = document.createElement('a');
  a.href="index2.html"
  a.click();
}

window.onload = function () {
  setTimeout(accelerateImageChange, interval);
};
