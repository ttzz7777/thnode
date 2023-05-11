.
├── app.js（这是项目入口文件，很重要）
├── bin
│ └── www（这是服务端配置文件也就是项目启动浇崩文件，管理的是使用 url 访问项目的端口号，以及 url 访问出错情况下的一些处理）
├── package.json
├── public（这是放置静态文件的地方）（如果不使用后端传输图片或文件就不用管）
│ ├── images
│ ├── javascripts
│ └── stylesheets
│ └── style.css
├── routes（路由文件）
│ ├── index.js
│ └── users.js
└── views（页面文件）
├── error.pug
├── index.pug
└── layout.pug
