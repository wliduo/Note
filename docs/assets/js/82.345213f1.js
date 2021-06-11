(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{456:function(t,a,e){"use strict";e.r(a);var r=e(9),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"docker下rabbitmq的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker下rabbitmq的使用"}},[t._v("#")]),t._v(" Docker下RabbitMQ的使用")]),t._v(" "),e("p",[t._v("Docker下RabbitMQ的使用及集群搭建")]),t._v(" "),e("h2",{attrs:{id:"_1-镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-镜像"}},[t._v("#")]),t._v(" 1. 镜像")]),t._v(" "),e("p",[t._v("我们可以去 "),e("a",{attrs:{href:"https://registry.hub.docker.com/_/rabbitmq/?tab=tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Hub"),e("OutboundLink")],1),t._v(" 查询版本号，然后直接启动 Docker，执行命令 "),e("code",[t._v("docker pull rabbitmq:3-management")]),t._v(" 下载镜像，使用命令 "),e("code",[t._v("docker images")]),t._v(" 查看下载的镜像")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("PS D:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docker pull rabbitmq:3-management\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("-management: Pulling from library/rabbitmq\n5c939e3a4d10: Pull complete\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n651c9d2d6c4f: Pull complete\nDigest: sha256:3f846dc1fa7d7e8dc40a2d0e5d89aef473e1ab3f9c7b6e2200de2fba31653675\nStatus: Downloaded newer image "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" rabbitmq:3-management\ndocker.io/library/rabbitmq:3-management\nPS D:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docker images\nREPOSITORY                TAG                               IMAGE ID            CREATED             SIZE\nrabbitmq                  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("-management                      62c36a64dcb2        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),t._v(" hours ago        181MB\nzookeeper                 latest                            611ffeaf5959        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" weeks ago         224MB\ntomcat                    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.5")]),t._v(".43-jdk8-adoptopenjdk-openj9   689bdcef64fe        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" months ago        339MB\nelasticsearch             "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.3")]),t._v(".0                             bdaab402b220        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" months ago        806MB\nelasticsearch             "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.2")]),t._v(".1                             1e8add8d7b66        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" months ago        862MB\napache/dubbo-admin        latest                            af2357c7df7e        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" months ago        489MB\nchenchuxin/dubbo-admin    latest                            df6b79f2b754        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" months ago       159MB\nmobz/elasticsearch-head   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("                                 b19a5c98e43b        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" years ago         824MB\nPS D:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n")])])]),e("h2",{attrs:{id:"_2-启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动"}},[t._v("#")]),t._v(" 2. 启动")]),t._v(" "),e("p",[t._v("查看官网: "),e("a",{attrs:{href:"https://www.rabbitmq.com/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.rabbitmq.com/download.html"),e("OutboundLink")],1),t._v("，直接有启动的命令")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/01/20200117005.png",alt:"图片"}})]),t._v(" "),e("p",[t._v("执行命令 "),e("code",[t._v("docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management")]),t._v(" 启动")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/01/20200117006.png",alt:"图片"}})]),t._v(" "),e("p",[t._v("启动成功，然后访问: "),e("a",{attrs:{href:"http://localhost:15672",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:15672"),e("OutboundLink")],1),t._v("，用guest/guest登录就可以打开管理的 Web 界面")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/01/20200117003.png",alt:"图片"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/01/20200117007.png",alt:"图片"}})]),t._v(" "),e("h2",{attrs:{id:"_3-集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-集群"}},[t._v("#")]),t._v(" 3. 集群")]),t._v(" "),e("p",[t._v("待补充")]),t._v(" "),e("p",[e("strong",[t._v("参考")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/vipstone/p/9362388.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RabbitMQ系列（五）使用Docker部署RabbitMQ集群"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/vipstone/p/9368106.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RabbitMQ系列（六）你不知道的RabbitMQ集群架构全解"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/belonghuang157405/article/details/83540148",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker简易搭建RabbitMQ集群"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);