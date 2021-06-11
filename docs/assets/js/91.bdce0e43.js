(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{462:function(t,s,a){"use strict";a.r(s);var e=a(9),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"安装本地elasticsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装本地elasticsearch"}},[t._v("#")]),t._v(" 安装本地Elasticsearch")]),t._v(" "),a("p",[t._v("安装本地Elasticsearch，安装本地Elasticsearch-Head，本地Elasticsearch集群搭建")]),t._v(" "),a("h2",{attrs:{id:"本地elasticsearch单机搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地elasticsearch单机搭建"}},[t._v("#")]),t._v(" 本地Elasticsearch单机搭建")]),t._v(" "),a("p",[t._v("当然首先要安装"),a("strong",[t._v("JDK1.8")]),t._v("的环境及以上版本都行，不能低于"),a("strong",[t._v("1.8")]),t._v("，安装"),a("strong",[t._v("Windows")]),t._v("本地版，去"),a("strong",[t._v("Elasticsearch")]),t._v("官网下载即可，不过找了很久都没有找到旧版本，最后下了最新版7.2，安装很简单，将下载的"),a("strong",[t._v("zip")]),t._v("文件解压")]),t._v(" "),a("h4",{attrs:{id:"目录说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录说明"}},[t._v("#")]),t._v(" 目录说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("目录名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("config")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("配置文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("modules")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("模块存放目录")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bin")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("脚本")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lib")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("第三方库")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("plugins")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("第三方插件")])])])]),t._v(" "),a("p",[t._v("直接运行"),a("strong",[t._v("bin")]),t._v("下的"),a("strong",[t._v("elasticsearch.bat")]),t._v("这个文件即可启动，关闭窗口就是关闭服务，然后访问本机的"),a("strong",[t._v("127.0.0.1:9200")]),t._v("即可，网页返回如下"),a("strong",[t._v("JSON")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WANG926454"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cluster_name"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"elasticsearch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cluster_uuid"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ht8iAPewRDidZk-qbZ2Eig"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"number"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7.2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build_flavor"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build_type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zip"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build_hash"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"508c38a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build_date"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-06-20T15:54:18.811730Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build_snapshot"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lucene_version"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"minimum_wire_compatibility_version"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6.8.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"minimum_index_compatibility_version"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6.0.0-beta1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tagline"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You Know, for Search"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"安装本地elasticsearch-head"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装本地elasticsearch-head"}},[t._v("#")]),t._v(" 安装本地Elasticsearch-Head")]),t._v(" "),a("p",[t._v("一般情况下，我们都会通过一个可视化的工具来查看"),a("strong",[t._v("ES")]),t._v("的运行状态和数据。这个工具我们一般选择"),a("a",{attrs:{href:"https://github.com/mobz/elasticsearch-head",target:"_blank",rel:"noopener noreferrer"}},[t._v("Head"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"head插件的优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#head插件的优点"}},[t._v("#")]),t._v(" Head插件的优点")]),t._v(" "),a("ul",[a("li",[t._v("提供了友好的"),a("strong",[t._v("Web")]),t._v("界面，解决数据在界面显示问题")]),t._v(" "),a("li",[t._v("实现基本信息的查看和"),a("strong",[t._v("Restful")]),t._v("请求的模拟以及数据的基本检索")])]),t._v(" "),a("p",[a("strong",[t._v("Elasticsearch-Head")]),t._v("依赖于"),a("strong",[t._v("Node.js")]),t._v("，需要安装"),a("strong",[t._v("Node.js")]),t._v("，查看"),a("strong",[t._v("Github")]),t._v("介绍，该工具能直接对"),a("strong",[t._v("Elasticsearch")]),t._v("的数据进行增删改查，因此存在安全性的问题，建议生产环境下不要使用该插件，"),a("strong",[t._v("Node.js")]),t._v("版本必须"),a("strong",[t._v("requires node >= 6.0")]),t._v("，简单的菜鸟教程安装就行:"),a("a",{attrs:{href:"https://www.runoob.com/nodejs/nodejs-install-setup.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.runoob.com/nodejs/nodejs-install-setup.html"),a("OutboundLink")],1),t._v("，我Node.js环境的很早就已经安装了，执行下面命令先安装"),a("strong",[t._v("grunt")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g grunt-cli \n")])])]),a("p",[t._v("安装完成查看版本")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("grunt -version\n")])])]),a("p",[t._v("显示版本号OK")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("grunt-cli v1.3.2\n")])])]),a("p",[t._v("去"),a("a",{attrs:{href:"https://github.com/mobz/elasticsearch-head",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1),t._v("下载"),a("strong",[t._v("Elasticsearch-Head")]),t._v("工具，解压到你的"),a("strong",[t._v("Elasticsearch")]),t._v("根路径下"),a("strong",[t._v("D:\\Tools\\elasticsearch-7.2.0\\elasticsearch-head-master")]),t._v("，修改"),a("strong",[t._v("Gruntfile.js")]),t._v("配置文件，如下添加"),a("strong",[t._v("hostname: '*'")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("connect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tserver"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\toptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\thostname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '*'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tport"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tbase"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '.'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tkeepalive"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然后在"),a("strong",[t._v("D:\\Tools\\elasticsearch-7.2.0\\elasticsearch-head-master")]),t._v("目录先安装下启动运行"),a("strong",[t._v("Head")]),t._v("插件")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\ngrunt server or "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run start\n")])])]),a("p",[t._v("进"),a("strong",[t._v("http://localhost:9100")]),t._v("发现连接不上，还需要配置下"),a("strong",[t._v("Elasticsearch")]),t._v("，修改"),a("strong",[t._v("Elasticsearch")]),t._v("安装目录下的"),a("strong",[t._v("config/elasticsearch.yml")]),t._v("配置文件，在最下面添加下面两句配置，开启跨域")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果启用了HTTP端口，那么此属性会指定是否允许跨源REST请求，默认true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http.cors.enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果http.cors.enabled的值为true，那么该属性会指定允许REST请求来自何处，默认localhost")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http.cors.allow-origin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),t._v("\n")])])]),a("p",[t._v("重新打开"),a("strong",[t._v("elasticsearch.bat")]),t._v("，启动完成进去"),a("strong",[t._v("http://localhost:9100")]),t._v("连接，OK")]),t._v(" "),a("h4",{attrs:{id:"集群健康值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群健康值"}},[t._v("#")]),t._v(" 集群健康值")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("red")]),t._v("(差): 集群健康状况很差，虽然可以查询，但是已经出现了丢失数据的现象")]),t._v(" "),a("li",[a("strong",[t._v("yellow")]),t._v("(中): 集群健康状况不是很好，但是集群可以正常使用")]),t._v(" "),a("li",[a("strong",[t._v("green")]),t._v("(优): 集群健康状况良好，集群正常使用")])]),t._v(" "),a("h2",{attrs:{id:"安装本地elasticsearch集群-分布式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装本地elasticsearch集群-分布式"}},[t._v("#")]),t._v(" 安装本地Elasticsearch集群(分布式)")]),t._v(" "),a("ul",[a("li",[t._v("安装说明，安装三个节点，一个"),a("strong",[t._v("Master")]),t._v("，两个"),a("strong",[t._v("Slave")]),t._v("，名称要相同，"),a("strong",[t._v("9500")]),t._v("端口为"),a("strong",[t._v("Master")]),t._v("节点，其余两个为"),a("strong",[t._v("Slave")]),t._v("节点")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("集群名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("IP-端口")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("myEsCluster")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("127.0.0.1:9500")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("myEsCluster")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("127.0.0.1:9600")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("myEsCluster")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("127.0.0.1:9700")])])])]),t._v(" "),a("ul",[a("li",[t._v("ES安装包解压出三份ES，修改每个"),a("strong",[t._v("Elasticsearch")]),t._v("安装目录下的"),a("strong",[t._v("config/elasticsearch.yml")]),t._v("配置文件")])]),t._v(" "),a("h4",{attrs:{id:"master配置说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master配置说明"}},[t._v("#")]),t._v(" Master配置说明")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置支持Elasticsearch-Head")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http.cors.enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http.cors.allow-origin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置集群Master配置信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster.name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myEsCluster\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 节点的名字，一般为Master或者Slave")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node.name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 节点是否为Master，设置为true的话，说明此节点为Master节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node.master")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置网络，如果是本机的话就是127.0.0.1，其他服务器配置对应的IP地址即可(0.0.0.0支持外网访问)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network.host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置对外服务的Http端口，默认为 9200，可以修改默认设置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http.port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9500")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置节点间交互的TCP端口，默认是9300")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("transport.tcp.port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9300")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 手动指定可以成为Master的所有节点的Name或者IP，这些配置将会在第一次选举中进行计算")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster.initial_master_nodes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h4",{attrs:{id:"slave配置说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slave配置说明"}},[t._v("#")]),t._v(" Slave配置说明")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置集群Slave配置信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster.name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myEsCluster\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 节点的名字，一般为Master或者Slave")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node.name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" slave1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 节点是否为Master，设置为true的话，说明此节点为master节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node.master")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置对外服务的Http端口，默认为 9200，可以修改默认设置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http.port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9600")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置网络，如果是本机的话就是127.0.0.1，其他服务器配置对应的IP地址即可(0.0.0.0支持外网访问)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network.host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 集群发现")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("discovery.seed_hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:9300"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置集群Slave配置信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster.name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myEsCluster\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 节点的名字，一般为Master或者Slave")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node.name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" slave2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 节点是否为Master，设置为true的话，说明此节点为master节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node.master")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置对外服务的Http端口，默认为 9200，可以修改默认设置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http.port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9700")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置网络，如果是本机的话就是127.0.0.1，其他服务器配置对应的IP地址即可(0.0.0.0支持外网访问)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network.host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 集群发现")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("discovery.seed_hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:9300"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("最后两个"),a("strong",[t._v("Slave")]),t._v("配置只需要改相应的端口号即可，一个"),a("strong",[t._v("slave1")]),t._v("：9600，一个"),a("strong",[t._v("slave2")]),t._v("：9700")])]),t._v(" "),a("li",[a("p",[t._v("配置后完成后，启动一个"),a("strong",[t._v("Master")]),t._v("，两个"),a("strong",[t._v("Slave")]),t._v("，还有"),a("strong",[t._v("Elasticsearch-Head")]),t._v("服务，此时页面可以查看ES集群的状态")])]),t._v(" "),a("li",[a("p",[t._v("访问"),a("a",{attrs:{href:"http://localhost:9500/_cat/nodes?v",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9500/_cat/nodes?v"),a("OutboundLink")],1)])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ip        heap.percent ram.percent cpu load_1m load_5m load_15m node.role master name\n127.0.0.1           18          87   6                          mdi       *      master\n127.0.0.1           16          87   6                          di        -      slave1\n127.0.0.1           16          87   6                          di        -      slave2\n")])])]),a("ul",[a("li",[t._v("访问"),a("a",{attrs:{href:"http://localhost:9100",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9100"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://docs.dolyw.com/Project/Elasticsearch/image/20190802001.png",alt:"图示"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);