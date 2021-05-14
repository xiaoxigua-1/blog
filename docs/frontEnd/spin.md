---
title: 旋轉座標
date: 2021-05-14
categories:
 - Graphic science
tags:
 - 3D
---

# 三維座標旋轉
- 用到矩陣

# 心得?
```
因為高一沒學到矩陣所以我特別去學了一點點概念
還不錯玩
```

## p5.js code
```js
let camera = [-200, -200, 0];

let box = [
  [0, 0, 10], 
  [150, 0, 10], 
  [0, 0, 30], 
  [150, 0, 30], 
  [0, 150, 10], 
  [150, 150, 10], 
  [0, 150, 30], 
  [150, 150, 30]
];
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(270);
  let box1 = threeDimensionsToTwoDimensions(...spin(...box[0], {zAngle: 0.5}));
  let box2 = threeDimensionsToTwoDimensions(...spin(...box[1], {zAngle: 0.5}));
  let box3 = threeDimensionsToTwoDimensions(...spin(...box[2], {zAngle: 0.5}));
  let box4 = threeDimensionsToTwoDimensions(...spin(...box[3], {zAngle: 0.5}));
  let box5 = threeDimensionsToTwoDimensions(...spin(...box[4], {zAngle: 0.5}));
  let box6 = threeDimensionsToTwoDimensions(...spin(...box[5], {zAngle: 0.5}));
  let box7 = threeDimensionsToTwoDimensions(...spin(...box[6], {zAngle: 0.5}));
  let box8 = threeDimensionsToTwoDimensions(...spin(...box[7], {zAngle: 0.5}));
  line(box4[0], box4[1], box2[0], box2[1]);
  line(box4[0], box4[1], box8[0], box8[1]);
  line(box3[0], box3[1], box7[0], box7[1]);
  line(box3[0], box3[1], box1[0], box1[1]);
  line(box1[0], box1[1], box2[0], box2[1]);
  line(box5[0], box5[1], box6[0], box6[1]);
  line(box2[0], box2[1], box6[0], box6[1]);
  line(box5[0], box5[1], box1[0], box1[1]);
  line(box6[0], box6[1], box8[0], box8[1]);
  line(box7[0], box7[1], box5[0], box5[1]);
  
  line(box3[0], box3[1], box4[0], box4[1]);
  line(box7[0], box7[1], box8[0], box8[1]);

}

function spin(x, y, z, { xAngle = null, yAngle = null, zAngle = null }) {
  let rx = x, ry = y, rz = z;
  if (xAngle !== null) {
    let xCos = cos(xAngle);
    let xSin = sin(xAngle);
    ry = y * xCos - z * xSin;
    rz = y * xSin + z * xCos;
  }
  if (yAngle !== null) {
    let yCos = cos(yAngle);
    let ySin = sin(yAngle);
    rx = x * yCos + z * ySin;
    rz = z * yCos - x * ySin;
  }
  
  if (zAngle !== null) {
    let zCos = cos(zAngle);
    let zSin = sin(zAngle);
    rx = x * zCos - y * zSin;
    ry = x * zSin + y * zCos;
  }
  return [rx, ry, rz];
}

function threeDimensionsToTwoDimensions(x, y, z) {

    let xIndex = (x - camera[0]);
    let yIndex = (y - camera[1]);
    let zIndex = (z - camera[2]) + 10;
    let rx = (xIndex / zIndex) * 10;
    let ry = (yIndex / zIndex) * 10;
    // console.log(rx ,ry);
    return [rx, ry];
    
}
```