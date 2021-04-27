(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{607:function(l,v,a){"use strict";a.r(v);var _=a(20),e=Object(_.a)({},(function(){var l=this,v=l.$createElement,a=l._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[a("h1",{attrs:{id:"jvm调优手册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm调优手册"}},[l._v("#")]),l._v(" JVM调优手册")]),l._v(" "),a("blockquote",[a("p",[l._v("多数的 Java 应用不需要在服务器上进行 GC 优化；多数导致 GC 问题的 Java 应用，都不是因为我们参数设置错误，而是代码问题；在应用上线之前，先考虑将机器的 JVM 参数设置到最优（最适合）；减少创建对象的数量；减少使用全局变量和大对象；GC 优化是到最后不得已才采用的手段；在实际使用中，分析 GC 情况优化代码比优化 GC 参数要多得多")])]),l._v(" "),a("h2",{attrs:{id:"_0-目的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-目的"}},[l._v("#")]),l._v(" 0. 目的")]),l._v(" "),a("blockquote",[a("p",[l._v("将转移到老年代的对象数量降低到最小；减少 GC 的执行时间")])]),l._v(" "),a("ul",[a("li",[l._v("策略 1：将新对象预留在新生代，由于 Full GC 的成本远高于 Minor GC，因此尽可能将对象分配在新生代是明智的做法，实际项目中根据 GC 日志分析新生代空间大小分配是否合理，适当通过“-Xmn”命令调节新生代大小，最大限度降低新对象直接进入老年代的情况")]),l._v(" "),a("li",[l._v("策略 2：大对象进入老年代，虽然大部分情况下，将对象分配在新生代是合理的。但是对于大对象这种做法却值得商榷，大对象如果首次在新生代分配可能会出现空间不足导致很多年龄不够的小对象被分配的老年代，破坏新生代的对象结构，可能会出现频繁的 full gc。因此，对于大对象，可以设置直接进入老年代（当然短命的大对象对于垃圾回收来说简直就是噩梦）。-XX:PretenureSizeThreshold 可以设置直接进入老年代的对象大小")]),l._v(" "),a("li",[l._v("策略 3：合理设置进入老年代对象的年龄，-XX:MaxTenuringThreshold 设置对象进入老年代的年龄大小，减少老年代的内存占用，降低 full gc 发生的频率")]),l._v(" "),a("li",[l._v("策略 4：设置稳定的堆大小，堆大小设置有两个参数：-Xms 初始化堆大小，-Xmx 最大堆大小")]),l._v(" "),a("li",[l._v("策略 5：注意： 如果满足下面的指标，则一般不需要进行 GC 优化")])]),l._v(" "),a("blockquote",[a("p",[l._v("MinorGC 执行时间不到50ms；Minor GC 执行不频繁，约10秒一次；Full GC 执行时间不到1s；Full GC 执行频率不算频繁，不低于10分钟1次")])]),l._v(" "),a("h2",{attrs:{id:"_1-排查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-排查"}},[l._v("#")]),l._v(" 1. 排查")]),l._v(" "),a("p",[l._v("ping 一下，看一下网络情况\niostat jstack")]),l._v(" "),a("ol",[a("li",[l._v("首先排查一下，是整个 Java 应用慢，还是就某一个请求慢")]),l._v(" "),a("li",[l._v("看下机器的 CPU 的负载，CPU 利用率，I/O 情况")]),l._v(" "),a("li",[l._v("如果 2 都没有问题，再看下 Java 应用的 GC 情况")]),l._v(" "),a("li",[l._v("如果 3 还没有问题，那么将 Java 全部 dump 出来，看下线程都在干什么")]),l._v(" "),a("li",[l._v("如果依赖了外部服务(数据库/其它服务)，看下其它服务健康状况是否良好")]),l._v(" "),a("li",[l._v("如果依赖比较多，需要根据调用链路分析一下慢在哪里(从反向代理开始到 Tomcat 到应用(包括缓存，数据库)然后再到页面的渲染最后到浏览器解析)")])]),l._v(" "),a("h2",{attrs:{id:"_2-优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-优化"}},[l._v("#")]),l._v(" 2. 优化")]),l._v(" "),a("ul",[a("li",[l._v("系统 CPU 经常 100%，如何调优？")])]),l._v(" "),a("ol",[a("li",[l._v("找出哪个进程 CPU 高（top）")]),l._v(" "),a("li",[l._v("该进程中的哪个线程cpu高（top -Hp）")]),l._v(" "),a("li",[l._v("导出该线程的堆栈 (jstack)")]),l._v(" "),a("li",[l._v("查找哪个方法（栈帧）消耗时间 (jstack)")]),l._v(" "),a("li",[l._v("工作线程占比高 | 垃圾回收线程占比高")])]),l._v(" "),a("h2",{attrs:{id:"_3-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-参数"}},[l._v("#")]),l._v(" 3. 参数")]),l._v(" "),a("p",[l._v("JVM 参数")]),l._v(" "),a("h3",{attrs:{id:"gc选择参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gc选择参数"}},[l._v("#")]),l._v(" GC选择参数")]),l._v(" "),a("ul",[a("li",[l._v("Linux 中没找到默认 GC 的查看方法，而 Windows 中会打印 UseParallelGC\n"),a("ul",[a("li",[l._v("./java -XX:+PrintCommandLineFlags -version")]),l._v(" "),a("li",[l._v("通过 GC 的日志来分辨")])])]),l._v(" "),a("li",[l._v("Linux 下 1.8 版本默认的垃圾回收器到底是什么？\n"),a("ul",[a("li",[l._v("1.8.0_181 默认（看不出来）Copy MarkCompact")]),l._v(" "),a("li",[l._v("1.8.0_222 默认 PS + PO")])])]),l._v(" "),a("li",[l._v("-XX:+UseSerialGC = Serial New (DefNew) + Serial Old\n"),a("ul",[a("li",[l._v("小型程序。默认情况下不会是这种选项，HotSpot 会根据计算及配置和 JDK 版本自动选择收集器")])])]),l._v(" "),a("li",[l._v("-XX:+UseParNewGC = ParNew + SerialOld\n"),a("ul",[a("li",[l._v("这个组合已经很少用（在某些版本中已经废弃）")]),l._v(" "),a("li",[l._v("https://stackoverflow.com/questions/34962257/why-remove-support-for-parnewserialold-anddefnewcms-in-the-future")])])]),l._v(" "),a("li",[l._v("-XX:+UseConcMarkSweepGC = ParNew + CMS + Serial Old")]),l._v(" "),a("li",[l._v("-XX:+UseParallelGC = Parallel Scavenge + Parallel Old (1.8默认) 【PS + SerialOld】")]),l._v(" "),a("li",[l._v("-XX:+UseParallelOldGC = Parallel Scavenge + Parallel Old")]),l._v(" "),a("li",[l._v("-XX:+UseG1GC = G1")])]),l._v(" "),a("h3",{attrs:{id:"gc常用参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gc常用参数"}},[l._v("#")]),l._v(" GC常用参数")]),l._v(" "),a("ul",[a("li",[l._v("-Xmn -Xms -Xmx -Xss\n"),a("ul",[a("li",[l._v("年轻代 最小堆 最大堆 栈空间")])])]),l._v(" "),a("li",[l._v("-XX:+UseTLAB\n"),a("ul",[a("li",[l._v("使用TLAB，默认打开")])])]),l._v(" "),a("li",[l._v("-XX:+PrintTLAB\n"),a("ul",[a("li",[l._v("打印TLAB的使用情况")])])]),l._v(" "),a("li",[l._v("-XX:TLABSize\n"),a("ul",[a("li",[l._v("设置TLAB大小")])])]),l._v(" "),a("li",[l._v("-XX:+DisableExplictGC\n"),a("ul",[a("li",[l._v("System.gc()不管用，FGC")])])]),l._v(" "),a("li",[l._v("-XX:+PrintGC")]),l._v(" "),a("li",[l._v("-XX:+PrintGCDetails")]),l._v(" "),a("li",[l._v("-XX:+PrintHeapAtGC")]),l._v(" "),a("li",[l._v("-XX:+PrintGCTimeStamps")]),l._v(" "),a("li",[l._v("-XX:+PrintGCApplicationConcurrentTime (低)\n"),a("ul",[a("li",[l._v("打印应用程序时间")])])]),l._v(" "),a("li",[l._v("-XX:+PrintGCApplicationStoppedTime （低）\n"),a("ul",[a("li",[l._v("打印暂停时长")])])]),l._v(" "),a("li",[l._v("-XX:+PrintReferenceGC （重要性低）\n"),a("ul",[a("li",[l._v("记录回收了多少种不同引用类型的引用")])])]),l._v(" "),a("li",[l._v("-verbose:class\n"),a("ul",[a("li",[l._v("类加载详细过程")])])]),l._v(" "),a("li",[l._v("-XX:+PrintVMOptions")]),l._v(" "),a("li",[l._v("-XX:+PrintFlagsFinal  -XX:+PrintFlagsInitial\n"),a("ul",[a("li",[l._v("必须会用")])])]),l._v(" "),a("li",[l._v("-Xloggc:opt/log/gc.log")]),l._v(" "),a("li",[l._v("-XX:MaxTenuringThreshold\n"),a("ul",[a("li",[l._v("升代年龄，最大值15")])])])]),l._v(" "),a("h3",{attrs:{id:"parallel常用参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parallel常用参数"}},[l._v("#")]),l._v(" Parallel常用参数")]),l._v(" "),a("ul",[a("li",[l._v("-XX:SurvivorRatio")]),l._v(" "),a("li",[l._v("-XX:PreTenureSizeThreshold\n"),a("ul",[a("li",[l._v("大对象到底多大")])])]),l._v(" "),a("li",[l._v("-XX:MaxTenuringThreshold")]),l._v(" "),a("li",[l._v("-XX:+ParallelGCThreads\n"),a("ul",[a("li",[l._v("并行收集器的线程数，同样适用于CMS，一般设为和CPU核数相同")])])]),l._v(" "),a("li",[l._v("-XX:+UseAdaptiveSizePolicy\n"),a("ul",[a("li",[l._v("自动选择各区大小比例")])])])]),l._v(" "),a("h3",{attrs:{id:"cms常用参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cms常用参数"}},[l._v("#")]),l._v(" CMS常用参数")]),l._v(" "),a("ul",[a("li",[l._v("-XX:+UseConcMarkSweepGC")]),l._v(" "),a("li",[l._v("-XX:ParallelCMSThreads\n"),a("ul",[a("li",[l._v("CMS线程数量")])])]),l._v(" "),a("li",[l._v("-XX:CMSInitiatingOccupancyFraction\n"),a("ul",[a("li",[l._v("使用多少比例的老年代后开始CMS收集，默认是68%(近似值)，如果频繁发生SerialOld卡顿，应该调小，（频繁CMS回收）")])])]),l._v(" "),a("li",[l._v("-XX:+UseCMSCompactAtFullCollection\n"),a("ul",[a("li",[l._v("在FGC时进行压缩")])])]),l._v(" "),a("li",[l._v("-XX:CMSFullGCsBeforeCompaction\n"),a("ul",[a("li",[l._v("多少次FGC之后进行压缩")])])]),l._v(" "),a("li",[l._v("-XX:+CMSClassUnloadingEnabled")]),l._v(" "),a("li",[l._v("-XX:CMSInitiatingPermOccupancyFraction\n"),a("ul",[a("li",[l._v("达到什么比例时进行Perm回收")])])]),l._v(" "),a("li",[l._v("GCTimeRatio\n"),a("ul",[a("li",[l._v("设置GC时间占用程序运行时间的百分比")])])]),l._v(" "),a("li",[l._v("-XX:MaxGCPauseMillis\n"),a("ul",[a("li",[l._v("停顿时间，是一个建议时间，GC会尝试用各种手段达到这个时间，比如减小年轻代")])])])]),l._v(" "),a("h3",{attrs:{id:"g1常用参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#g1常用参数"}},[l._v("#")]),l._v(" G1常用参数")]),l._v(" "),a("ul",[a("li",[l._v("-XX:+UseG1GC")]),l._v(" "),a("li",[l._v("-XX:MaxGCPauseMillis\n"),a("ul",[a("li",[l._v("建议值，G1会尝试调整Young区的块数来达到这个值")])])]),l._v(" "),a("li",[l._v("-XX:GCPauseIntervalMillis\n"),a("ul",[a("li",[l._v("GC的间隔时间")])])]),l._v(" "),a("li",[l._v("-XX:+G1HeapRegionSize\n"),a("ul",[a("li",[l._v("分区大小，建议逐渐增大该值，1 2 4 8 16 32。")]),l._v(" "),a("li",[l._v("随着size增加，垃圾的存活时间更长，GC间隔更长，但每次GC的时间也会更长")]),l._v(" "),a("li",[l._v("ZGC做了改进（动态区块大小）")])])]),l._v(" "),a("li",[l._v("G1NewSizePercent\n"),a("ul",[a("li",[l._v("新生代最小比例，默认为5%")])])]),l._v(" "),a("li",[l._v("G1MaxNewSizePercent\n"),a("ul",[a("li",[l._v("新生代最大比例，默认为60%")])])]),l._v(" "),a("li",[l._v("GCTimeRatio\n"),a("ul",[a("li",[l._v("GC时间建议比例，G1会根据这个值调整堆空间")])])]),l._v(" "),a("li",[l._v("ConcGCThreads\n"),a("ul",[a("li",[l._v("线程数量")])])]),l._v(" "),a("li",[l._v("InitiatingHeapOccupancyPercent\n"),a("ul",[a("li",[l._v("启动G1的堆空间占用比例")])])])]),l._v(" "),a("h2",{attrs:{id:"_4-工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-工具"}},[l._v("#")]),l._v(" 4. 工具")]),l._v(" "),a("ul",[a("li",[l._v("Arthas手册")])]),l._v(" "),a("ol",[a("li",[l._v("启动arthas java -jar arthas-boot.jar")]),l._v(" "),a("li",[l._v("绑定 java 进程")]),l._v(" "),a("li",[l._v("dashboard 命令观察系统整体情况")]),l._v(" "),a("li",[l._v("help 查看帮助")]),l._v(" "),a("li",[l._v("help xx 查看具体命令帮助")])]),l._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/507f7e0cc3a3",target:"_blank",rel:"noopener noreferrer"}},[l._v("Arthas使用"),a("OutboundLink")],1)]),l._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/nxlhero/p/11660854.html",target:"_blank",rel:"noopener noreferrer"}},[l._v("利用JVM在线调试工具排查线上问题"),a("OutboundLink")],1)]),l._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/ChoviWu/p/10069399.html",target:"_blank",rel:"noopener noreferrer"}},[l._v("Linux下通过jstat命令查看jvm的GC情况"),a("OutboundLink")],1)]),l._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/kongzhongqijing/articles/3630264.html",target:"_blank",rel:"noopener noreferrer"}},[l._v("java命令--jstack 工具"),a("OutboundLink")],1)]),l._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/huanglog/p/10302901.html",target:"_blank",rel:"noopener noreferrer"}},[l._v("java命令--jmap命令使用"),a("OutboundLink")],1)])]),l._v(" "),a("ul",[a("li",[l._v("jmap 命令")])]),l._v(" "),a("ol",[a("li",[l._v("jmap -heap pid")]),l._v(" "),a("li",[l._v("jmap -histo pid")]),l._v(" "),a("li",[l._v("jmap -clstats pid")])]),l._v(" "),a("h2",{attrs:{id:"_5-记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-记录"}},[l._v("#")]),l._v(" 5. 记录")]),l._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/unclewei/p/12611633.html",target:"_blank",rel:"noopener noreferrer"}},[l._v("Spring Framework和Java版本之间的关系"),a("OutboundLink")],1)])]),l._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://www.blogjava.net/paulwong/archive/2014/06/16/414812.html",target:"_blank",rel:"noopener noreferrer"}},[l._v("-XX:ParallelGCThreads参数"),a("OutboundLink")],1)])]),l._v(" "),a("li",[a("p",[l._v("Spring 和 Java 版本不兼容")])]),l._v(" "),a("li",[a("p",[l._v("一台机器同时跑两个 JVM，得把 -XX:ParallelGCThreads 调小")])])]),l._v(" "),a("p",[a("strong",[l._v("参考")])]),l._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://segmentfault.com/q/1010000007603766",target:"_blank",rel:"noopener noreferrer"}},[l._v("linux java 程序运行慢原因查找?"),a("OutboundLink")],1)]),l._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/l1394049664/article/details/81290910",target:"_blank",rel:"noopener noreferrer"}},[l._v("thread dump分析"),a("OutboundLink")],1)]),l._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6844903802378665997",target:"_blank",rel:"noopener noreferrer"}},[l._v("GC 调优策略"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=e.exports}}]);