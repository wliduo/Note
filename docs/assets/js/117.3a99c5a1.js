(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{486:function(t,a,r){"use strict";r.r(a);var _=r(9),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"java拾遗-jvm垃圾"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java拾遗-jvm垃圾"}},[t._v("#")]),t._v(" Java拾遗-JVM垃圾")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("虚拟机(JVM)的垃圾识别算法，垃圾回收算法，分代模型，垃圾回收器以及JVM调优")])])]),t._v(" "),r("h2",{attrs:{id:"_1-什么是垃圾"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是垃圾"}},[t._v("#")]),t._v(" 1. 什么是垃圾")]),t._v(" "),r("p",[t._v("在开始介绍垃圾之前，我们先复习一下手动内存管理。它是指你需要明确的为你的数据手动分配需要的空闲内存，但是如果用完后忘了回收掉这些内存，则之后也无法再次使用这部分内存。也就是说，这部分内存是属于被申明但未被继续使用。这种情况称为一个"),r("strong",[t._v("Memory Leak(内存泄漏)")])]),t._v(" "),r("p",[t._v("忘记回收内存可能是一件相当常见的事情。"),r("strong",[t._v("Memory Leak(内存泄漏)"),r("strong",[t._v("在过去也是一个较为常见的问题，而且仅能通过修改代码才能完全解决此问题。所以，一个更好的方法是自动回收未被用的内存，减少人本身可能犯错的可能性。这种自动的机制就是")]),t._v("垃圾回收(GC)")])]),t._v(" "),r("p",[t._v("简单说垃圾就是不在使用的，放着占用内存空间的对象，如放在工位的矿泉水空瓶等等，放到 JVM 中也就是在内存中已经不在使用的对象，这些无用的对象就是垃圾(没有任何引用指向的一个对象或者多个对象)，那么怎么判断这些对象是垃圾呢？JVM 提供了两种算法来识别垃圾")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("引用计数器")])]),t._v(" "),r("li",[r("strong",[t._v("可达性分析(根可达)")])])]),t._v(" "),r("h3",{attrs:{id:"_1-1-引用计数器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-引用计数器"}},[t._v("#")]),t._v(" 1.1. 引用计数器")]),t._v(" "),r("p",[t._v("给对象中添加一个引用计数器，每当有一个地方引用它，计数器就加 1，当引用失效，计数器就减 1，任何时候计数器为 0 的对象就是不可能再被使用的")]),t._v(" "),r("p",[t._v("这个方法实现简单，效率高，但是目前主流的虚拟机中并没有选择这个算法来管理内存，其最主要的原因是它很难解决对象之间相互循环引用的问题")]),t._v(" "),r("h3",{attrs:{id:"_1-2-可达性分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-可达性分析"}},[t._v("#")]),t._v(" 1.2. 可达性分析")]),t._v(" "),r("p",[t._v("("),r("strong",[t._v("根可达")]),t._v(")算法的基本思想就是通过一系列的称为 "),r("strong",[t._v("GC Roots")]),t._v(" 的对象作为起点，从这些节点开始向下搜索，节点所走过的路径称为引用链，当一个对象到 "),r("strong",[t._v("GC Roots")]),t._v(" 没有任何引用链相连的话，则证明此对象是不可用的")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/05/20200507001.png",alt:"图片"}})]),t._v(" "),r("p",[t._v("上图中，"),r("strong",[t._v("objX，objY，objZ")]),t._v(" 就是垃圾(没有任何引用链相连)，可作为 GC Roots 的对象包括下面几种")]),t._v(" "),r("ul",[r("li",[t._v("虚拟机栈中引用的对象(栈帧中的本地变量表)")]),t._v(" "),r("li",[t._v("方法区中类静态属性引用的对象")]),t._v(" "),r("li",[t._v("方法区中常量引用的对象")]),t._v(" "),r("li",[t._v("本地方法栈中 JNI(Native方法) 引用的对象")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("不可达的对象并非非死不可")]),t._v(" "),r("p",[t._v("即使在可达性分析法中不可达的对象，也并非是"),r("strong",[t._v("非死不可")]),t._v("的，这时候它们暂时处于"),r("strong",[t._v("缓刑阶段")]),t._v("，要真正宣告一个对象死亡，至少要经历两次标记过程")]),t._v(" "),r("ul",[r("li",[t._v("第一次标记: 如果对象在进行可达性分析后发现没有与 "),r("strong",[t._v("GC Roots")]),t._v(" 相连接的引用链，那它将会被第一次标记")]),t._v(" "),r("li",[t._v("第二次标记: 第一次标记后接着会进行一次筛选，筛选的条件是此对象是否有必要执行 "),r("code",[t._v("finalize()")]),t._v(" 方法。在 "),r("code",[t._v("finalize()")]),t._v(" 方法中没有重新与引用链建立关联关系的，将被进行第二次标记")])]),t._v(" "),r("p",[t._v("第二次标记成功的对象将真的会被回收，如果对象在 "),r("code",[t._v("finalize()")]),t._v(" 方法中重新与引用链建立了关联关系，那么将会逃离本次回收，继续存活")])]),t._v(" "),r("h3",{attrs:{id:"_1-3-四种引用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-四种引用"}},[t._v("#")]),t._v(" 1.3. 四种引用")]),t._v(" "),r("ul",[r("li",[t._v("强引用(NormalReference)")])]),t._v(" "),r("p",[t._v("在程序代码中普遍存在的，类似 "),r("code",[t._v("Object obj = new Object()")]),t._v(" 这类引用，只要强引用还存在，垃圾回收器永远不会回收掉被引用的对象，简单说只要有引用就不会被回收")]),t._v(" "),r("ul",[r("li",[t._v("软引用(SoftReference)")])]),t._v(" "),r("p",[t._v("对于软引用关联着的对象，在系统将要发生内存溢出异常之前，将会把这些对象列进回收范围之中进行第二次回收，如果这次回收后还没有足够的内存，才会抛出内存溢出异常，简单说就是空间不够才回收")]),t._v(" "),r("ul",[r("li",[t._v("弱引用(WeakReference)")])]),t._v(" "),r("p",[t._v("被弱引用关联的对象只能生存到下一次垃圾收集发生之前。当垃圾回收器工作时，无论当前内存是否足够，都会回收掉只被弱引用关联的对象")]),t._v(" "),r("p",[t._v("只要调用了垃圾回收(System.gc())就回收，应用场景：只要强引用消失，则应该被回收，一般用在容器里，典型应用ThreadLock，看下WeakHashMap、AQSunlock源码(Tomcat缓存用的是弱应用)")]),t._v(" "),r("ul",[r("li",[t._v("虚引用(PhantomReference)")])]),t._v(" "),r("p",[t._v("也叫幽灵引用或幻影引用，是最弱的一种引用关系。一个对象是否有虚引用的存在，完全不会对其生存时间构成影响，也无法通过虚引用来取得一个对象实例。它的作用是能在这个对象被回收器回收时收到一个系统通知")]),t._v(" "),r("h2",{attrs:{id:"_2-垃圾回收算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-垃圾回收算法"}},[t._v("#")]),t._v(" 2. 垃圾回收算法")]),t._v(" "),r("p",[t._v("一般都是标记清除(Mark Sweep)，复制(Copying)，标记压缩(Mark Compact)这三种")]),t._v(" "),r("h3",{attrs:{id:"_2-1-标记清除-mark-sweep"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-标记清除-mark-sweep"}},[t._v("#")]),t._v(" 2.1. 标记清除(Mark Sweep)")]),t._v(" "),r("p",[t._v("标记清除算法将垃圾回收分为两个阶段--标记阶段和清除阶段，在标记阶段首先通过根节点(GC Roots)，标记所有从根节点开始的对象，未被标记的对象就是未被引用的垃圾对象。然后，在清除阶段，清除所有未被标记的对象")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/05/20200508004.jpg",alt:"图片"}})]),t._v(" "),r("p",[t._v("就像上图一样，清理掉的垃圾就变成未使用的内存区域，等待被再次使用。但它存在一个很大的问题，那就是内存碎片，例如上图中等方块的假设是 2M，小一些的是 1M，大一些的是 4M。等我们回收完，内存就会切成了很多段。我们知道开辟内存空间时，需要的是连续的内存区域，这时候我们需要一个 2M 的内存区域，其中有 2 个 1M 是没法用的。这样就导致，其实我们本身还有这么多的内存的，但却用不了")]),t._v(" "),r("p",[t._v("标记清除算法的缺点是"),r("strong",[t._v("内存位置不连续，产生碎片，效率偏低(扫描了整个空间两次，第一次: 标记存活对象，第二次: 清除没有标记的对象)")])]),t._v(" "),r("h3",{attrs:{id:"_2-2-复制-copying"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-复制-copying"}},[t._v("#")]),t._v(" 2.2. 复制(Copying)")]),t._v(" "),r("p",[t._v("复制算法的提出是为了克服句柄的开销和解决内存碎片的问题。它将可用内存按照容量划分为大小相等的两块，每次只使用其中的一块。当这一块的内存用完了，就将还存活着的对象复制到另外一块上，然后再把已使用过的内存空间一次清理掉。这样使得每次都是对整个半区进行内存回收，内存分配时也就不用考虑内存碎片等复杂情况，只要移动堆顶的指针，按顺序分配内存即可，实现简单，运行高效")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/05/20200508005.jpg",alt:"图片"}})]),t._v(" "),r("p",[r("strong",[t._v("复制算法解决了标记清除算法中存在的效率问题，也没有碎片，只是这种算法的代价是将内存缩小为原来的一半，浪费空间")])]),t._v(" "),r("h3",{attrs:{id:"_2-3-标记整理-mark-compact"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-标记整理-mark-compact"}},[t._v("#")]),t._v(" 2.3. 标记整理(Mark Compact)")]),t._v(" "),r("p",[t._v("标记整理算法采用标记清除算法一样的方式进行对象的标记，但在清除时不同，在回收不存活的对象占用的空间后，会将所有的存活对象往左端空闲空间移动，并更新对应的指针。标记整理算法是在标记清除算法的基础上，又进行了对象的移动，因此成本更高，但是却解决了内存碎片的问题")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/05/20200508006.jpg",alt:"图片"}})]),t._v(" "),r("p",[r("strong",[t._v("标记整理算法优点是没有内存碎片，但是效率最低(扫描了整个空间两次，而且指针还需要调整)")])]),t._v(" "),r("h2",{attrs:{id:"_3-内存分代模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-内存分代模型"}},[t._v("#")]),t._v(" 3. 内存分代模型")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/05/20200507005.jpg",alt:"图片"}})]),t._v(" "),r("p",[r("strong",[t._v("分代垃圾回收算法")]),t._v("是目前大部分JVM的垃圾回收器采用的算法，它的核心思想是根据对象存活的生命周期将内存划分为若干个不同的区域。一般情况下将堆区划分为"),r("strong",[t._v("新生代")]),t._v("("),r("strong",[t._v("Young Generation")]),t._v(")和"),r("strong",[t._v("老年代")]),t._v("("),r("strong",[t._v("Tenured Generation")]),t._v(" or "),r("strong",[t._v("Old Generation")]),t._v(")，在堆区之外还有一个代就是"),r("strong",[t._v("永久代")]),t._v("("),r("strong",[t._v("Permanet Generation")]),t._v(")("),r("strong",[t._v("JDK1.7 后永久代移除，添加元空间")]),t._v(")。老年代的特点是每次垃圾收集时只有少量对象需要被回收，而新生代的特点是每次垃圾回收时都有大量的对象需要被回收，那么就可以根据不同代的特点采取最适合的收集算法")]),t._v(" "),r("p",[r("strong",[t._v("在不同年代使用最合适的算法，新生代存活率低，可以使用复制算法。而老年代对象存活率高，没有额外空间对它进行分配担保，所以只能使用标记清除或者标记整理算法")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("多名称详解")]),t._v(" "),r("p",[t._v("新生代 == 年轻代"),r("br"),t._v("\n老年代 == 年老代"),r("br"),t._v("\n永久代 == 持久代"),r("br"),t._v("\nMinor GC == Young GC(YGC)"),r("br"),t._v("\nMajor GC"),r("br"),t._v("\nFull GC(FGC)")])]),t._v(" "),r("h3",{attrs:{id:"_3-1-新生代"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-新生代"}},[t._v("#")]),t._v(" 3.1. 新生代")]),t._v(" "),r("p",[t._v("所有新生成的对象首先都是放在新生代的，新生代的目标就是尽可能快速的收集掉那些生命周期短的对象")]),t._v(" "),r("p",[r("strong",[t._v("新生代内存按照 8:1:1 的比例分为一个 Eden 区，两个 Survivor 区(简称 S0 和 S1)(又称为 From 和 To)，这样分是为了使用复制算法")])]),t._v(" "),r("p",[t._v("大部分对象是在 Eden 区中生成，当 Eden 区或者 S 区放不下的对象直接进入老年代。当 Eden 区满发生 YGC 时先将 Eden 区存活对象复制到一个 S0 区，然后清空 Eden 区，再次发生 YGC 将 Eden 区和 S0 区存活对象复制到另一个 S1 区，清空 Eden 区与 S0 区，而第三次发生 YGC 将 Eden 区和 S1 区存活对象复制到 S0 区，清空 Eden 区与 S1 区，如此往复，对象每复制一次，年龄加一，到达默认十五(CMS是六)时将进入老年代")]),t._v(" "),r("blockquote",[r("p",[t._v("关于动态年龄和分配担保了解即可")])]),t._v(" "),r("ul",[r("li",[t._v("动态年龄: "),r("a",{attrs:{href:"https://www.jianshu.com/p/989d3b06a49d",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jianshu.com/p/989d3b06a49d"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("分配担保: "),r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1082730",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cloud.tencent.com/developer/article/1082730"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"_3-2-老年代"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-老年代"}},[t._v("#")]),t._v(" 3.2. 老年代")]),t._v(" "),r("p",[t._v("在新生代中经历了 N 次垃圾回收后仍然存活的对象，就会被放到老年代中。因此，可以认为老年代中存放的都是一些生命周期较长的对象")]),t._v(" "),r("p",[t._v("当老年代内存满时触发 FGC，FGC 发生频率比较低，老年代对象存活时间比较长，存活率比较高")]),t._v(" "),r("h3",{attrs:{id:"_3-3-方法区和永久代以及元空间"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-方法区和永久代以及元空间"}},[t._v("#")]),t._v(" 3.3. 方法区和永久代以及元空间")]),t._v(" "),r("p",[t._v("方法区是 Java 虚拟机规范中的定义，是一种规范，永久代是 HotSpot 的概念，是一种实现，一个是标准一个是实现。其他的虚拟机实现并没有永久带这一说法。在 1.7 之前在(JDK1.2 ~ JDK6)的实现中，HotSpot 使用永久代实现方法区，对于 Java8， HotSpots 取消了永久代，那么是不是也就没有方法区了呢？当然不是，方法区是一个规范，规范没变，它就一直在。那么取代永久代的就是元空间。它可永久代有什么不同的？存储位置不同，永久代物理是是堆的一部分，和新生代，老年代地址是连续的，而元空间属于本地内存；存储内容不同，元空间存储类的元信息，静态变量和常量池等并入堆中，相当于永久代的数据被分到了堆和元空间中")]),t._v(" "),r("p",[t._v("详解: "),r("a",{attrs:{href:"https://blog.csdn.net/u011635492/article/details/81046174",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/u011635492/article/details/81046174"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"_4-垃圾回收器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-垃圾回收器"}},[t._v("#")]),t._v(" 4. 垃圾回收器")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("ZGC这里不考虑")])])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/05/20200508001.png",alt:"图片"}})]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("新生代回收器：Serial、ParNew、Parallel Scavenge")])]),t._v(" "),r("li",[r("strong",[t._v("老年代回收器：CMS、Serial Old、Parallel Old")])]),t._v(" "),r("li",[r("strong",[t._v("整堆回收器：G1")])])]),t._v(" "),r("p",[t._v("虽然我们对各个回收器进行比较，但并非要挑选出一个最好的回收器，因为直到现在为止还没有最好的垃圾回收器出现，更加没有万能的垃圾回收器，我们能做的就是根据具体应用场景选择适合自己的垃圾回收器")]),t._v(" "),r("h3",{attrs:{id:"_4-1-serial"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-serial"}},[t._v("#")]),t._v(" 4.1. Serial")]),t._v(" "),r("p",[t._v("新生代单线程回收器，采用复制算法，优点是简单高效，缺点是 STW(Stop The World) 时间长，Serial(串行)是最基本、发展历史最悠久的垃圾回收器")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/05/20200508002.jpg",alt:"图片"}})]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("STW(Stop The World)")]),t._v(" "),r("p",[t._v("单线程一方面意味着它只会使用一个 CPU 或一条线程去完成垃圾收集工作，另一方面也意味着在它进行垃圾收集时，必须暂停其他所有的工作线程，直到它收集结束为止，这个过程也称为 STW(Stop The World)，后者意味着，在用户不可见的情况下要把用户正常工作的线程全部停掉，这显然对很多应用是难以接受的")])]),t._v(" "),r("h3",{attrs:{id:"_4-2-serial-old"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-serial-old"}},[t._v("#")]),t._v(" 4.2. Serial Old")]),t._v(" "),r("p",[t._v("老年代单线程回收器，Serial 回收器的老年代版本，除了采用标记-整理算法，其他与 Serial 相同，同样 STW(Stop The World) 时间长，另一种用途就是"),r("strong",[t._v("作为 CMS 回收器的后备预案，在并发收集发生 Concurrent Mode Failure 时使用")])]),t._v(" "),r("h3",{attrs:{id:"_4-3-parnew"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-parnew"}},[t._v("#")]),t._v(" 4.3. ParNew")]),t._v(" "),r("p",[t._v("新生代多线程回收器，ParNew 回收器其实就是 Serial 回收器的多线程版本，除了使用多线程进行垃圾收集外，其余和 Serial 回收器完全一样，"),r("strong",[t._v("一般老年代选择 CMS 回收器的话，新生代都是使用 ParNew 回收器")]),t._v("，"),r("strong",[t._v("GC 时也需要暂停所有用户线程，直到 GC 结束")]),t._v("，好处是 STW(Stop The World) 处理是多线程处理，如果是多 CPU 环境下，速度更快，单 CPU 的话直接选择 Serial 回收器，不过现在也很少单 CPU 了")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@1.1/2020/05/20200508003.jpg",alt:"图片"}})]),t._v(" "),r("h3",{attrs:{id:"_4-4-parallel-scavenge"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-parallel-scavenge"}},[t._v("#")]),t._v(" 4.4. Parallel Scavenge")]),t._v(" "),r("p",[t._v("新生代多线程回收器，Parallel Scavenge 回收器和 ParNew 回收器类似，也是使用复制算法的多线程回收器，它的关注点是垃圾回收的吞吐量(高效率的利用 CPU)。CMS 等垃圾回收器的关注点更多的是用户线程的停顿时间(提高用户体验)。所谓吞吐量就是 CPU 中用于运行用户代码的时间与 CPU 总消耗时间的比值，它以高吞吐量为目标，即减少垃圾收集时间，让用户代码获得更长的运行时间，适合那种交互少、运算多的场景，例如，那些执行批量处理、订单处理、工资支付、科学计算的应用程序。"),r("strong",[t._v("另外值得注意的一点是，Parallel Scavenge 回收器无法与 CMS 回收器配合使用，所以在 JDK 1.6 推出 Parallel Old 之前，如果新生代选择 Parallel Scavenge 回收器，老年代只有 Serial Old 回收器能与之配合使用")])]),t._v(" "),r("h3",{attrs:{id:"_4-5-parallel-old"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-parallel-old"}},[t._v("#")]),t._v(" 4.5. Parallel Old")]),t._v(" "),r("p",[t._v("老年代多线程回收器，Parallel Old 回收器是 Parallel Scavenge 回收器的老年代版本，除了使用标记整理算法，其他特点与 Parallel Scavenge 回收器相同。这个回收器是在 JDK 1.6 开始提供")]),t._v(" "),r("h3",{attrs:{id:"_4-6-cms"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-cms"}},[t._v("#")]),t._v(" 4.6. CMS")]),t._v(" "),r("p",[t._v("CMS(Concurrent Mark-Sweep)")]),t._v(" "),r("p",[t._v("待补充")]),t._v(" "),r("h3",{attrs:{id:"_4-7-g1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-g1"}},[t._v("#")]),t._v(" 4.7. G1")]),t._v(" "),r("p",[t._v("待补充")]),t._v(" "),r("h3",{attrs:{id:"_4-8-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-总结"}},[t._v("#")]),t._v(" 4.8. 总结")]),t._v(" "),r("p",[t._v("吞吐量优先(交互少，计算多，适合在后台运算的场景)：Parallel Scavenge、Parallel Old"),r("br"),t._v("\n停顿时间优先(交互多，对响应速度要求高)：CMS")]),t._v(" "),r("p",[t._v("串行：Serial、Serial Old"),r("br"),t._v("\n并行：ParNew、Parallel Scavenge、Parallel Old"),r("br"),t._v("\n并发：CMS、G1")]),t._v(" "),r("p",[t._v("标记清除：CMS"),r("br"),t._v("\n复制：Serial、ParNew、Parallel Scavenge、G1"),r("br"),t._v("\n标记整理：Serial Old、Parallel Old、G1")]),t._v(" "),r("p",[r("strong",[t._v("参考")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/aspirant/p/8662690.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JVM的垃圾回收机制 总结(垃圾收集、回收算法、垃圾回收器)"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/CrankZ/article/details/86009279",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java——七种垃圾收集器+JDK11最新ZGC"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=v.exports}}]);