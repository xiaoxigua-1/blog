---
title: 個人網站
date: 2021-09-05
categories:
 - frontEnd
tags:
 - website
 - react
 - fullpage.js
 - typescript
---
# 這個網站出現的理由
---
當發現我的個人網站用Blog有點不妥所以自己刻了一個。\
[網址在這](https://xiaoxigua-1.github.io/)

# 整體架構
---
用React寫然後我絕對不會說TypeScript竟然還用any，因為FullPage.js我真的不知道要怎麼搞她的類型。

# CSS在不同瀏覽器上呈現的畫面不同
---
我目前主要使用Edge所以開發自然也用Edge，但是當我寫好正以為所有東西都弄好時我朋友丟了一張圖\
::: details
![](https://cdn.discordapp.com/attachments/808251620730339388/883741740652191744/unknown.png)\
之後陸續出現以下圖片
![](https://cdn.discordapp.com/attachments/755725610868932678/883742491151581254/image0.png)
:::
我當時表情是 ![](https://cdn.discordapp.com/emojis/782478544524935228.png?v=2)\
然後我是用flex去切版所以我去問了那些顯示出問題的瀏覽器是甚麼，然後跑去google結論找不到解決方法，最後我改了寫法不用flex去切版然後一切又恢復原狀
::: details
![](https://cdn.discordapp.com/attachments/842705456413409321/883793304444104805/unknown.png)
![](https://cdn.discordapp.com/attachments/808251620730339388/883767135678103603/image0.png)
:::
詳細情況可看commit(X\
經過此情況該買台Mac了Windows不能裝Safair QAQ


# 使用GitHub API
這個網站我用了GitHub的API去取得我自己的repos資訊然後呈現在第三頁的Projects\
:thinking:應該也沒啥問題就用axios去get這個API **https://api.github.com/users/{user name}/repos**

::: right
[GitHub](https://github.com/xiaoxigua-1/xiaoxigua-1.github.io)