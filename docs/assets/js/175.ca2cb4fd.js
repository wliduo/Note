(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{547:function(t,e,r){"use strict";r.r(e);var n=r(9),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"jvm调优之内存大小设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm调优之内存大小设置"}},[t._v("#")]),t._v(" JVM调优之内存大小设置")]),t._v(" "),r("blockquote",[r("p",[t._v("内存大小确定")])]),t._v(" "),r("h2",{attrs:{id:"_1-堆内存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-堆内存"}},[t._v("#")]),t._v(" 1. 堆内存")]),t._v(" "),r("p",[t._v("JVM 初始分配的内存由 -Xms 指定，默认是物理内存的 1/64；JVM 最大分配的内存由 -Xmx 指定，默认是物理内存的 1/4。默认空余堆内存小于 40% 时，JVM就会增大堆直到 -Xmx 的最大限制；空余堆内存大于 70% 时，JVM 会减少堆直到 -Xms 的最小限制。"),r("strong",[t._v("因此服务器一般设置-Xms、-Xmx 相等以避免在每次 GC 后调整堆的大小")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/zhangfengshi/p/11343102.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JVM内存设置多大合适？Xmx和Xmn如何设置？"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("参考")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/guanghe/p/13558412.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JVM默认内存大小"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.imooc.com/wenda/detail/569714",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何确定默认的Java堆大小？"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);