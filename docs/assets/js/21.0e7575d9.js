(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{396:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git命令记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git命令记录"}},[t._v("#")]),t._v(" Git命令记录")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("命令手册:")]),t._v(" "),a("a",{attrs:{href:"https://www.yiibai.com/git/git_remote.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.yiibai.com/git/git_remote.html"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[t._v("#")]),t._v(" Add")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("// 提交新文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("和被修改"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modified"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("文件，不包括被删除"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deleted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("文件\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n// 提交被修改"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modified"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("和被删除"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deleted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("文件，不包括新文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -u\n// 提交所有变化All\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n")])])]),a("h2",{attrs:{id:"config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[t._v("#")]),t._v(" Config")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("// 查看配置\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config -l\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list\n// 配置全局参数\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"随心"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i@dolyw.com"')]),t._v("\n// 配置局部参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("当前项目"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"随心"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i@dolyw.com"')]),t._v("\n// 设置缓存值大小\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global http.postBuffer "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5242880000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global https.postBuffer "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5242880000")]),t._v("\n")])])]),a("h2",{attrs:{id:"log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[t._v("#")]),t._v(" Log")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("// 查看提交日志\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n// 查看所有操作日志\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n")])])]),a("h2",{attrs:{id:"reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[t._v("#")]),t._v(" Reset")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("// 完成撤销，但是不对代码修改进行撤销，可以直接通过git commit重新提交对本地代码的修改"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("推荐使用"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v("\n// 完成撤销，同时将代码恢复到前一commit_id对应的版本"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("谨慎使用"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v("\n// 回退上一次提交，不会操作文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("推荐使用"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --soft HEAD~\n")])])]),a("h2",{attrs:{id:"remote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remote"}},[t._v("#")]),t._v(" Remote")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("// 查看项目关联的远程仓库\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n// 添加远程仓库\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("远程仓库名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("远程仓库地址"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("ul",[a("li",[t._v("示例")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("// 添加Github\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("远程仓库地址"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n// 添加Gitee\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" gitee "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("远程仓库地址"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n// 推送Github\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n// 推送Gitee\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u gitee master\n")])])]),a("h2",{attrs:{id:"push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[t._v("#")]),t._v(" Push")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("// 推送本地哪个分支到哪个远程仓库哪个分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-u"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("-f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("远程仓库名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("本地分支名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("远程分支名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n// 本地master分支推送到origin远程仓库master分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master:master\n// 本地master分支强制推送到origin远程仓库master分支，把远程的覆盖\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f origin master\n")])])]),a("h2",{attrs:{id:"branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#branch"}},[t._v("#")]),t._v(" Branch")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("// 创建testing分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch testing\n// 查看所有分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -v\n// 切换到testing分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout testing\n// 切换到master分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n// 删除testing分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d testing\n// 删除不了可以强制删除\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D testing\n// 删除远程分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --delete dev\n")])])]),a("h2",{attrs:{id:"delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[t._v("#")]),t._v(" Delete")]),t._v(" "),a("ul",[a("li",[t._v("删除远程文件不删除本地的")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("// --cached不会把本地的.idea删除\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -r --cached .idea\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'delete .idea dir'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n")])])]),a("h2",{attrs:{id:"fetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch"}},[t._v("#")]),t._v(" Fetch")]),t._v(" "),a("h2",{attrs:{id:"pull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull"}},[t._v("#")]),t._v(" Pull")])])}),[],!1,null,null,null);s.default=e.exports}}]);