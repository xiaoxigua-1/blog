---
title: xiaoLanguage operators
date: '2021-05-31 19:00:00'
categories:
 - Language
tags:
 - xiaoLanguage
---


## Code
```
/****************
w
w
w
w
xiao語言啦哈哈
w
w
w
w
w
****************/
import math
var c = plus(100, 200);
print(c);
c = plus(300, 200, c);
print(c);
//print(pow(2, 3)*5);
print(3+-2);
print();
var a = pow(-2, 4);
print(a);
print((1 - 3 * 2 * 5)/ 10);
print((a*5+20)/10);
```

## Output
```
300.0
800.0
1.0

16.0
-2.9
10.0
```
![就是圖片別懷疑](/image/code-22.png)

## 心得
由於分析運算子之間ㄉ關係搞了很久最後終於搞出了基本的+, -, *, /那由於技術問題目前function回傳值無法直接進行運算如下 <br>

- 合法寫法

```{1}
var a = pow(-2, 4);
print((a*5+20)/10);
```

- 不合法寫法

```{1}
print((pow(-2, 4)*5+20)/10);
```
在之後想到怎麼處理這問題後再慢慢解決先去準備處裡function while for if等等的區塊分析