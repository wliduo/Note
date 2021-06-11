(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{494:function(t,s,a){"use strict";a.r(s);var n=a(9),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"其他-java源码阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他-java源码阅读"}},[t._v("#")]),t._v(" 其他-Java源码阅读")]),t._v(" "),a("p",[t._v("Java源码怎么阅读")]),t._v(" "),a("h2",{attrs:{id:"_1-准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备"}},[t._v("#")]),t._v(" 1. 准备")]),t._v(" "),a("p",[t._v("找到你安装的 JDK 目录，就有源码了，如下图，我的安装路径是 D:\\Tools，src.zip 就是源代码文件了")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/04/20200408001.png",alt:"图片"}})]),t._v(" "),a("h2",{attrs:{id:"_2-开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-开始"}},[t._v("#")]),t._v(" 2. 开始")]),t._v(" "),a("p",[t._v("创建一个空项目即可，我这里使用的 IDEA，File - New - Project")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/04/20200410002.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("填写 GroupId 和 ArtifactId 为 com.source 和 JavaSource，项目名 JavaSource")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/04/20200410003.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("点击 Finish，完成，打开项目，将 src.zip 都解压到项目里")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/04/20200410005.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("OK，搞定")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/04/20200410006.png",alt:"图片"}})]),t._v(" "),a("h2",{attrs:{id:"_3-测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-测试"}},[t._v("#")]),t._v(" 3. 测试")]),t._v(" "),a("p",[t._v("我们可以在 test - java 处进行代码编写测试，新创建一个包 map，在这个文件下创建一个测试类 HashMapTest，编写代码")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * JavaSource\n *\n * @author wliduo[i@dolyw.com]\n * @date 2020/4/10 15:14\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMapTest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),t._v(" map "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/04/20200410007.png",alt:"图片"}})]),t._v(" "),a("h3",{attrs:{id:"_3-1-编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-编译"}},[t._v("#")]),t._v(" 3.1. 编译")]),t._v(" "),a("p",[t._v("启动 Main，发现编译报错，JDK 设置的问题")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/04/20200410009.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("把项目的设置都设置为 JDK 1.8，File - Project Structure...")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/04/20200410010.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("继续启动Main，发现编译报错，类不存在，见鬼，很多都不存在，不过都是 com.sun 里的，我直接将这个包删除了就好了")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/04/20200410011.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("继续启动 Main，发现编译很久不行，需要配置下编译内存大小，File - Settings...，可以发现默认是 700M，我们改成 1700M，这次就没问题了")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/04/20200410008.png",alt:"图片"}})]),t._v(" "),a("h3",{attrs:{id:"_3-2-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-配置"}},[t._v("#")]),t._v(" 3.2. 配置")]),t._v(" "),a("p",[t._v("不过 Debug 还是进不去 HashMap 的源码，还有一个 Debug 配置，默认配置了不会进去那些包，我们把勾去了就行了，File - Settings...")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/04/20200410012.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("继续启动 Main，在 new HashMap 时按 F7 就可以进去了，但是我们可以看到这个文件不是我们当前 java 里的，而且无法编辑")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/04/20200410013.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("我们可以把源代码路径配置下就行了，File - Project Structure...，删除 zip 这个")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/04/20200410014.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("添加当前路径源代码进去，这样就行了")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/04/20200410015.png",alt:"图片"}})]),t._v(" "),a("h3",{attrs:{id:"_3-3-完成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-完成"}},[t._v("#")]),t._v(" 3.3. 完成")]),t._v(" "),a("p",[t._v("好了，现在启动 Main，Debug 到 new HashMap 源代码，现在就是我们 java 下的代码文件了，而且可以编辑")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/04/20200410016.png",alt:"图片"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/04/20200410017.png",alt:"图片"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);