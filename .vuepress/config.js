module.exports = {
  "plugins": [
    "@vuepress-reco/vuepress-plugin-rss",
    "cursor-effects",
    [
      "dynamic-title", {
        "showIcon": '/favicon.ico',
        "showText": '鬼吧都這樣不看我',
        "hideIcon": '/failure.ico',
        "hideText": 'yaaaa又繼續看我ㄌ',
        "recoverTime": 2000,
      },
    ],
    "go-top"
  ],
  "title": "Xigua Blog",
  "description": "xiao xigua Blog",
  "dest": "build",
  "base": "/blog/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://cdn.discordapp.com/avatars/458988300418416640/05549a0ef3b6c2d804214f8c8e2c40bd.webp?size=4096"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    [
      "meta",
      {
        "property": "og:title",
        "content": "xigua Blog"
      }
    ],
    [
      "meta",
      {
        "property": "og:url",
        "content": "https://xiaoxigua-1.github.io/public"
      }
    ],
    [
      "meta",
      {
        "property": "og:image",
        "content": "https://cdn.discordapp.com/avatars/458988300418416640/05549a0ef3b6c2d804214f8c8e2c40bd.webp?size=4096"
      }
    ],
    [
      "meta",
      {
        "property": "og:description",
        "content": "xiao xigua Blog"
      }
    ],
    [
      "meta",
      {
        "property": "og:site_name",
        "content": "xigua Blog"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "noFoundPageByTencent": false,
    "vssueConfig": {
      "platform": "github",
      "owner": "xiaoxigua-1",
      "repo": "blog",
      "clientId": "3ac082a858602f7869b1",
      "clientSecret": "40d372ce649c2dab25e290413c07efd7d7b69652",
    },
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "RSS",
        "link": "https://xiaoxigua-1.github.io/blog/rss.xml",
        "icon": "fa-rss-square"
      },
      {
        "text": "GitHub",
        "icon": "reco-github",
        "link": "https://github.com/xiaoxigua-1/xiaoxigua-1.github.io"
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "GitHub",
        "desc": "My GitHub URL",
        "email": "aijdfajodwsdf@gmail.com",
        "link": "https://github.com/xiaoxigua-1"
      },
      {
        "title": "Xiao xigua web",
        "desc": "My web GitHub repo URL",
        "avatar": "https://cdn.discordapp.com/avatars/458988300418416640/05549a0ef3b6c2d804214f8c8e2c40bd.webp?size=4096",
        "link": "https://xiaoxigua-1.github.io"
      }
    ],
    "logo": "https://cdn.discordapp.com/avatars/458988300418416640/05549a0ef3b6c2d804214f8c8e2c40bd.webp?size=4096",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "xiao xigua",
    "authorAvatar": "https://cdn.discordapp.com/avatars/458988300418416640/05549a0ef3b6c2d804214f8c8e2c40bd.webp?size=4096",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  }
}