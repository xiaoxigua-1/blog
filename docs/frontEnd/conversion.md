---
title: 三維座標投射到平面
date: 2021-05-14
categories:
 - Graphic science
tags:
 - 3D
---

# 初體驗圖學
- 把三維座標投射到平面上用p5.js實現
- 繪製出一個長方體外匡

## 心得 ?
```
做完後不錯玩讓我想繼續學下去
```

## p5.js code

```js
let camera = [700, 1000, 0];

let box = [
  [20, 20, 20], 
  [400, 20, 20], 
  [20, 20, 100], 
  [400, 20, 100], 
  [20, 400, 20], 
  [400, 400, 20], 
  [20, 400, 100], 
  [400, 400, 100]
];
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let box1 = threeDimensionsToTwoDimensions(...box[0]);
  let box2 = threeDimensionsToTwoDimensions(...box[1]);
  let box3 = threeDimensionsToTwoDimensions(...box[2]);
  let box4 = threeDimensionsToTwoDimensions(...box[3]);
  let box5 = threeDimensionsToTwoDimensions(...box[4]);
  let box6 = threeDimensionsToTwoDimensions(...box[5]);
  let box7 = threeDimensionsToTwoDimensions(...box[6]);
  let box8 = threeDimensionsToTwoDimensions(...box[7]);
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


function threeDimensionsToTwoDimensions(x, y, z) {

    let xIndex = abs(x - camera[0]);
    let yIndex = abs(y - camera[1]);
    let zIndex = abs(z - camera[2]) + 10;
    let rx = (xIndex / zIndex) * 10;
    let ry = (yIndex / zIndex) * 10;
    // console.log(rx ,ry);
    return [rx, ry];
    
}
```