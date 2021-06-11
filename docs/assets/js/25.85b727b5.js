(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{391:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git一次push到多个远端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git一次push到多个远端"}},[t._v("#")]),t._v(" Git一次Push到多个远端")]),t._v(" "),a("p",[t._v("本地Git一次Push到多个远端")]),t._v(" "),a("h2",{attrs:{id:"命令添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令添加"}},[t._v("#")]),t._v(" 命令添加")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加一个名为origin的Github远端")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@github.com:user/project.git\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为origin添加码云(Gitee)的远端")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url --add origin git@gitee.com:user/project.git\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为origin添加Coding的远端")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url --add origin git@git.coding.net:user/project.git\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送本地到origin下所有的远端")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin\n")])])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191106005.png",alt:"图片"}})]),t._v(" "),a("h2",{attrs:{id:"配置修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置修改"}},[t._v("#")]),t._v(" 配置修改")]),t._v(" "),a("p",[t._v("也可以直接修改配置文件，编辑本地仓库目录下面的.git目录下的config文件")]),t._v(" "),a("p",[t._v("添加"),a("strong",[t._v("url = git@coding:wang64/Note.git")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"origin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\turl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" git@wliduo:wliduo/Note.git\n\tfetch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" +refs/heads/*:refs/remotes/origin/*\n\turl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" git@coding:wang64/Note.git\n")])])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191106006.png",alt:"图片"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);