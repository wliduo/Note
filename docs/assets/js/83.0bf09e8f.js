(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{453:function(t,a,s){"use strict";s.r(a);var n=s(9),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"docker下minio的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker下minio的使用"}},[t._v("#")]),t._v(" Docker下MinIO的使用")]),t._v(" "),s("p",[t._v("Docker下MinIO的使用")]),t._v(" "),s("h2",{attrs:{id:"_1-镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-镜像"}},[t._v("#")]),t._v(" 1. 镜像")]),t._v(" "),s("p",[t._v("我们可以去 "),s("a",{attrs:{href:"https://registry.hub.docker.com/r/minio/minio/tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Hub"),s("OutboundLink")],1),t._v(" 查询版本号，官网: "),s("a",{attrs:{href:"https://docs.min.io/cn/minio-quickstart-guide.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.min.io/cn/minio-quickstart-guide.html"),s("OutboundLink")],1),t._v("，文档也很全，可以看到 Docker 的命令，这里我们下稳定版")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/01/20200121009.png",alt:"图片"}})]),t._v(" "),s("p",[t._v("然后直接启动 Docker，执行命令 "),s("code",[t._v("docker pull minio/minio")]),t._v(" 下载稳定版本镜像，使用命令 "),s("code",[t._v("docker images")]),t._v(" 查看下载的镜像")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("PS C:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WINDOWS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("system3"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v(" D:\nPS D:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docker pull minio/minio\nUsing default tag: latest\nlatest: Pulling from minio/minio\n89d9c30c1d48: Pull complete\nDigest: sha256:53c65fca691336b77b74180937d8d6f7845ef1afea0e0ae9780598835d7a5979\nStatus: Downloaded newer image "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" minio/minio:latest\ndocker.io/minio/minio:latest\nPS D:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docker images\nREPOSITORY                TAG                               IMAGE ID            CREATED             SIZE\nminio/minio               latest                            38a2af737873        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" days ago          "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(".5MB\nrabbitmq                  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("-management                      62c36a64dcb2        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" days ago          181MB\nzookeeper                 latest                            611ffeaf5959        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" weeks ago         224MB\ntomcat                    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.5")]),t._v(".43-jdk8-adoptopenjdk-openj9   689bdcef64fe        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" months ago        339MB\nelasticsearch             "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.3")]),t._v(".0                             bdaab402b220        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" months ago        806MB\nelasticsearch             "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.2")]),t._v(".1                             1e8add8d7b66        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" months ago        862MB\napache/dubbo-admin        latest                            af2357c7df7e        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" months ago        489MB\nchenchuxin/dubbo-admin    latest                            df6b79f2b754        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" months ago       159MB\nmobz/elasticsearch-head   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("                                 b19a5c98e43b        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" years ago         824MB\nPS D:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"_2-启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动"}},[t._v("#")]),t._v(" 2. 启动")]),t._v(" "),s("p",[t._v("查看官网: "),s("a",{attrs:{href:"https://docs.min.io/cn/minio-docker-quickstart-guide.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.min.io/cn/minio-docker-quickstart-guide.html"),s("OutboundLink")],1),t._v("，直接有启动的命令")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/01/20200121010.png",alt:"图片"}})]),t._v(" "),s("p",[t._v("执行命令启动单点模式")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker run -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v(":9000 --name minio minio/minio server /data\n")])])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/01/20200121011.png",alt:"图片"}})]),t._v(" "),s("p",[t._v("启动成功，可以访问后台界面: "),s("a",{attrs:{href:"http://127.0.0.1:9000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:9000"),s("OutboundLink")],1),t._v("，Access Key 和 Secret Key 在命令行那有显示，都是 minioadmin")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/01/20200121004.png",alt:"图片"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/01/20200121005.png",alt:"图片"}})]),t._v(" "),s("p",[t._v("单点模式的话所有的数据都会在容器退出时丢失，所以可以指定磁盘对应起来，"),s("strong",[t._v("注意文件夹需要自行提前建立好")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker run -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v(":9000 --name minio1 -v D:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Tools"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("minio:/data minio/minio server /data\n")])])]),s("p",[t._v("还可以指定 Access Key 和 Secret Key")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('docker run -p 9000:9000 --name minio2 -e "MINIO_ACCESS_KEY=AKIAIOSFODNN7EXAMPLE" -e "MINIO_SECRET_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" -v D:\\Tools\\docker\\minio:/data minio/minio server /data\n')])])]),s("p",[t._v("只是启动容器命令不一样而且，启动后都是一样的，这里就不示例了")]),t._v(" "),s("h2",{attrs:{id:"_3-集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-集群"}},[t._v("#")]),t._v(" 3. 集群")]),t._v(" "),s("p",[t._v("直接看官网: "),s("a",{attrs:{href:"https://docs.min.io/cn/deploy-minio-on-docker-compose.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("在Docker Compose上运行分布式MinIO"),s("OutboundLink")],1),t._v("，贴下 "),s("a",{attrs:{href:"https://github.com/minio/minio/blob/master/docs/orchestration/docker-compose/docker-compose.yaml",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("docker-compose.yml")]),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.7'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# starts 4 docker containers running minio server instances. Each")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# minio server's web interface will be accessible on the host at port")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 9001 through 9004.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("minio1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio/minio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("RELEASE.2020"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("16T22"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("40"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("29Z\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio1\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" data1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/data1\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" data1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/data2\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9001:9000"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MINIO_ACCESS_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MINIO_SECRET_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio123\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" server http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//minio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("healthcheck")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CMD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"curl"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-f"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:9000/minio/health/live"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30s\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20s\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("retries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("minio2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio/minio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("RELEASE.2020"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("16T22"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("40"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("29Z\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio2\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" data2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/data1\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" data2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/data2\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9002:9000"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MINIO_ACCESS_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MINIO_SECRET_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio123\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" server http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//minio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("healthcheck")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CMD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"curl"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-f"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:9000/minio/health/live"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30s\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20s\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("retries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("minio3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio/minio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("RELEASE.2020"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("16T22"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("40"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("29Z\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio3\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" data3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/data1\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" data3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/data2\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9003:9000"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MINIO_ACCESS_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MINIO_SECRET_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio123\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" server http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//minio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("healthcheck")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CMD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"curl"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-f"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:9000/minio/health/live"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30s\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20s\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("retries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("minio4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio/minio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("RELEASE.2020"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("16T22"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("40"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("29Z\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio4\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" data4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/data1\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" data4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/data2\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9004:9000"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MINIO_ACCESS_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MINIO_SECRET_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio123\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" server http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//minio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("healthcheck")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CMD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"curl"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-f"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:9000/minio/health/live"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30s\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20s\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("retries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## By default this config uses default local driver,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## For custom volumes replace with volume driver configuration.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data1-1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data1-2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data2-1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data2-2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data3-1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data3-2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data4-1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data4-2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),s("p",[t._v("执行")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("// 下载镜像\ndocker-compose pull\n// 启动\ndocker-compose up\n")])])]),s("p",[t._v("现在每个实例都可以访问，端口从9001到9004，请在浏览器中访问，而且4个端口的服务文件都是共享的，就不贴图了")]),t._v(" "),s("p",[s("strong",[t._v("参考")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.min.io/cn/deploy-minio-on-docker-compose.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MinIO官网"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);