---
title: 檢視Parser後的AST
date: '2022-03-18 20:32:00'
categories:
 - ZX
tags:
 - ZX
 - rust
 - compiler
 - programming language
---
### code
```
fn main(args: Str): Str? {
    fn a() {

    }
    {
        fn a() {
            var a = true
            abc.to_int()
            if a {

            } else if a {

            } else {
                
            }
        }
    }
    while a {
        
    }

    for i in a {
        
    }
}
```

### 解析完後的AST
![ast image](/image/ZX_ast.png)