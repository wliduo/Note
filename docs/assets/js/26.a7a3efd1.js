(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{394:function(t,r,e){"use strict";e.r(r);var a=e(9),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"jmeter的安装使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jmeter的安装使用"}},[t._v("#")]),t._v(" JMeter的安装使用")]),t._v(" "),e("blockquote",[e("p",[t._v("JMeter的安装使用")])]),t._v(" "),e("h2",{attrs:{id:"下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[t._v("#")]),t._v(" 下载")]),t._v(" "),e("p",[t._v("直接去官网下载即可: "),e("a",{attrs:{href:"http://jmeter.apache.org/download_jmeter.cgi",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://jmeter.apache.org/download_jmeter.cgi"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("点击下图的 Zip 文件即可")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114001.png",alt:"图片"}})]),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("p",[t._v("解压 Zip 文件，直接运行"),e("strong",[t._v("bin")]),t._v("目录下的"),e("strong",[t._v("jmeter.bat")]),t._v("就可以启动了，前提是要安装 Java 环境，这里就不说了")]),t._v(" "),e("p",[t._v("打开可以切换中文，如下图")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114002.png",alt:"图片"}})]),t._v(" "),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),e("h3",{attrs:{id:"_1-创建线程组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建线程组"}},[t._v("#")]),t._v(" 1.创建线程组")]),t._v(" "),e("p",[t._v("选中测试计划，依次点击编辑-添加-线程(用户)-线程组，设置线程数和循环次数，我这里设置线程数为500，循环1次")]),t._v(" "),e("p",[t._v("线程组Ramp-Up时间的作用，多久执行完，一般秒杀的话设置为0秒")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114003.png",alt:"图片"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114004.png",alt:"图片"}})]),t._v(" "),e("h3",{attrs:{id:"_2-配置元件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置元件"}},[t._v("#")]),t._v(" 2.配置元件")]),t._v(" "),e("p",[t._v("在我们刚刚创建的线程组上右键，依次点击添加-配置元件-HTTP请求默认值")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114005.png",alt:"图片"}})]),t._v(" "),e("p",[t._v("配置我们需要进行测试的程序协议，地址和端口")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114006.png",alt:"图片"}})]),t._v(" "),e("p",[t._v("当所有的接口测试的访问域名和端口都一样时，可以使用该元件，一旦服务器地址变更，只需要修改请求默认值即可")]),t._v(" "),e("h3",{attrs:{id:"_3-构造http请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-构造http请求"}},[t._v("#")]),t._v(" 3.构造HTTP请求")]),t._v(" "),e("p",[t._v("在线程组右键，依次点击添加-取样器-HTTP请求，设置我们需要测试的API的请求路径和数据，我这里是用的Get")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114007.png",alt:"图片"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114008.png",alt:"图片"}})]),t._v(" "),e("h3",{attrs:{id:"_4-添加http请求头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-添加http请求头"}},[t._v("#")]),t._v(" 4.添加HTTP请求头")]),t._v(" "),e("p",[t._v("在我们刚刚创建的线程组上右键，依次点击添加-配置元件-HTTP信息头管理器，这里可以配置请求头参数")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114009.png",alt:"图片"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114010.png",alt:"图片"}})]),t._v(" "),e("h3",{attrs:{id:"_5-添加断言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-添加断言"}},[t._v("#")]),t._v(" 5.添加断言")]),t._v(" "),e("p",[t._v("在我们刚刚创建的线程组上右键，依次点击添加-断言-响应断言")]),t._v(" "),e("p",[t._v("根据响应的数据来判断请求是否正常，我在这里只判断的响应代码是否为200，还可以配置错误信息")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114011.png",alt:"图片"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114012.png",alt:"图片"}})]),t._v(" "),e("h3",{attrs:{id:"_6-添加察看结果树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-添加察看结果树"}},[t._v("#")]),t._v(" 6.添加察看结果树")]),t._v(" "),e("p",[t._v("在我们刚刚创建的线程组上右键，依次点击添加-监听器-察看结果树，直接添加，然后点击运行按钮就可以看到结果了")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114013.png",alt:"图片"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114014.png",alt:"图片"}})]),t._v(" "),e("h3",{attrs:{id:"_7-添加汇总报告"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-添加汇总报告"}},[t._v("#")]),t._v(" 7.添加汇总报告")]),t._v(" "),e("p",[t._v("在我们刚刚创建的线程组上右键，依次点击添加-监听器-汇总报告，直接添加，然后点击运行按钮就可以看到结果了")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114015.png",alt:"图片"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114016.png",alt:"图片"}})]),t._v(" "),e("h3",{attrs:{id:"命令执行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令执行"}},[t._v("#")]),t._v(" 命令执行")]),t._v(" "),e("p",[t._v("管理员运行")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("jmeter -n -t templates/test.jmx -l templates/result.txt -e -o templates/web\n")])])]),e("p",[t._v("templates/test.jmx为测试计划文件路径\ntemplates/result.txt为测试结果文件路径\ntemplates/web为web报告保存路径")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114017.png",alt:"图片"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114018.png",alt:"图片"}})]),t._v(" "),e("p",[t._v("可以打开web的index.html查看图表")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114019.png",alt:"图片"}})]),t._v(" "),e("h2",{attrs:{id:"插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),e("h3",{attrs:{id:"_1-下载tps插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载tps插件"}},[t._v("#")]),t._v(" 1.下载TPS插件")]),t._v(" "),e("p",[t._v("直接去这个地址下载即可: "),e("a",{attrs:{href:"https://jmeter-plugins.org/wiki/TransactionsPerSecond/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jmeter-plugins.org/wiki/TransactionsPerSecond"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("点击Download，点击版本号即可下载jpgc-graphs-basic-2.0.zip文件")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114020.png",alt:"图片"}})]),t._v(" "),e("p",[t._v("下载之后解压，将解压后的lib包覆盖到Jmeter目录下的lib目录，重启Jmeter，就可以看到有了TPS的监听")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114021.png",alt:"图片"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2019/11/20191114022.png",alt:"图片"}})]),t._v(" "),e("h3",{attrs:{id:"_2-持续加压插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-持续加压插件"}},[t._v("#")]),t._v(" 2. 持续加压插件")]),t._v(" "),e("p",[t._v("Stepping Thread Group步进线程组已经不被官方推荐了，所以现在我们使用Concurrency Thread Group并发线程组")]),t._v(" "),e("p",[t._v("Concurrency Thread Group: ["),e("a",{attrs:{href:"https://jmeter-plugins.org/wiki/ConcurrencyThreadGroup/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jmeter-plugins.org/wiki/ConcurrencyThreadGroup/"),e("OutboundLink")],1),t._v("]")]),t._v(" "),e("p",[t._v("点击Download，点击版本号即可下载文件")]),t._v(" "),e("p",[t._v("下载之后解压，将解压后的lib包覆盖到Jmeter目录下的lib目录，重启Jmeter，就可以看到有了ConcurrencyThreadGroup")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/pachongshangdexuebi/p/11739064.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jmeter学习笔记（二十一）——Concurrency Thread Group阶梯式加压测试"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"_3-响应时间插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-响应时间插件"}},[t._v("#")]),t._v(" 3. 响应时间插件")]),t._v(" "),e("p",[t._v("Response Times Over Time: "),e("a",{attrs:{href:"https://jmeter-plugins.org/wiki/ResponseTimesOverTime/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jmeter-plugins.org/wiki/ResponseTimesOverTime/"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("点击Download，点击版本号即可下载文件")]),t._v(" "),e("p",[t._v("下载之后解压，将解压后的lib包覆盖到Jmeter目录下的lib目录，重启Jmeter，就可以看到有了ConcurrencyThreadGroup")]),t._v(" "),e("h2",{attrs:{id:"最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/b858ae2b5cce",target:"_blank",rel:"noopener noreferrer"}},[t._v("jmeter进阶二：使用Beanshell预处理器从指定列表中获取随机值"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/qq_27791709/article/details/78497949",target:"_blank",rel:"noopener noreferrer"}},[t._v("JMeter中引入外部的JAR包给bean shell 使用（提供三种方法"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/appium/p/10458133.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JMeter将上一个接口返回值作为下一个接口的请求参数"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("strong",[t._v("Jmeter里http接口的执行顺序是顺序执行")])]),t._v(" "),e("ul",[e("li",[t._v("如果在一个线程组里则是顺序执行")]),t._v(" "),e("li",[t._v("如果不在一个线程组里，就勾选独立运行各个线程组，在一个运行结束后启动下一个线程组")])]),t._v(" "),e("p",[t._v("线程数量和循环次数将会影响最终的测试报告，请大家多多测试")]),t._v(" "),e("ol",[e("li",[t._v("感谢晓晨Master的使用 JMeter 进行压力测试: "),e("a",{attrs:{href:"https://www.cnblogs.com/stulzq/p/8971531.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/stulzq/p/8971531.html"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/guanfuchang/p/7844981.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("meter-02 JMeter 生成HTML性能报告"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=s.exports}}]);