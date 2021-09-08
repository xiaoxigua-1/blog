module.exports = {
  "plugins": [
    "@vuepress-reco/vuepress-plugin-rss"
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
    "sitemap": {
      "hostname": "https://billyyyyy3320.com/"
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
        "text": "GitHub",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/xiaoxigua-1/xiaoxigua-1.github.io",
            "icon": "reco-github"
          }
        ]
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