module.exports = themeConfig = {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    docsRepo: 'dolyw/Note',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'doc',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在 GitHub 上编辑此页',
    // 将同时提取markdown中h1和h2标题，显示在侧边栏上
    sidebarDepth: 2,
    // 文档更新时间，每个文件git最后提交的时间
    lastUpdated: '上次更新时间',
    nav: [
        // 内部链接，以doc为根目录
        { text: '主页', link: '/' },
        /* {
            text: 'Data',
            items: [
                { text: 'Redis', link: '/redis/' },
                { text: 'MySQL', link: '/mysql/' },
                { text: 'Elasticsearch', link: '/elasticsearch/' }
            ]
        }, */
        {
            text: '学习记录',
            items: [
                { text: 'Java', link: '/java/' },
                { text: 'Docker', link: '/docker/' },
                { text: 'Elasticsearch', link: '/elasticsearch/' },
                { text: 'Cache', link: '/cache/' },
                { text: 'Database', link: '/database/' },
                { text: '前端记录', link: '/front/' }
            ]
        },
        {
            text: '架构记录',
            items: [
                { text: '分布式', link: '/distributed/' },
                { text: '秒杀架构', link: '/seckill/' },
                /* { text: 'Dubbo', link: '/dubbo/' }, */
                { text: 'SpringCloud', link: '/springcloud/' }
            ]
        },
        {
            text: '零星笔记',
            items: [
                { text: '工具命令', link: '/command/' },
                { text: '零散记录', link: '/note/' }
            ]
        },
        {
            text: '开源项目',
            items: [
                { text: '项目列表', link: '/p/' },
                { text: '鉴权-ShiroJwt', link: '/shirojwt/' },
                { text: '秒杀-SeckillEvolution', link: '/seckill-evolution/' },
                { text: '聊天-NettyStudy', link: '/netty/' },
                { text: '代码生成器-ViewGenerator', link: '/viewgenerator/' }
            ]
        },
        {
            text: '其他补充',
            items: [
                { text: '其他记录', link: '/other/' },
                { text: '编程闲话', link: '/gossip/' }
            ]
        },
        { text: '关于', link: '/about.md' },
        // 外部链接
        /* { text: '我的博客', link: 'https://dolyw.com/go?url=https://blog.dolyw.com' }, */
        // 下拉列表
        {
            text: '联系',
            items: [
                { text: '导航', link: 'https://dolyw.com/go?url=https://map.dolyw.com' },
                { text: '博客', link: 'https://dolyw.com/go?url=https://blog.dolyw.com' },
                { text: '音乐', link: 'https://dolyw.com/go?url=https://res.dolyw.com' },
                { text: '留言', link: 'https://dolyw.com/go?url=https://msg.dolyw.com' },
                { text: '简历', link: 'https://dolyw.com/go?url=https://cv.dolyw.com' },
                { text: 'GitHub', link: 'https://dolyw.com/go?url=https://github.com/dolyw' }
            ]
        }
    ],
    sidebar: {
        // 学习记录
        '/java/': [
            ['', 'Java'],
            ['01-Java-Basics', 'Java拾遗-基础'],
            ['02-Java-Collection', 'Java拾遗-容器'],
            ['03-Java-Concurrent', 'Java拾遗-并发'],
            ['04-Java-JVM', 'Java拾遗-虚拟机(JVM)'],
            ['05-Java-IO', 'Java拾遗-输入/输出(IO)'],
            ['11-Thread-Safe.md', '其他-Java中的线程安全'],
            ['12-Thread-Pool.md', '其他-Java中的线程池的创建及使用'],
            ['13-List-De-Duplication.md', '其他-List集合去重方式及效率对比'],
            ['14-50-Details.md', '其他-Java性能优化的50个细节']
        ],
        '/netty/': [
            ['', 'Netty'],
            ['00-Netty-SocketIO.md', 'Netty-SocketIO实现聊天室']
        ],
        '/docker/': [
            ['', 'Docker'],
            ['00-GettingStarted.md', 'Docker入门安装'],
            ['01-VisualizationTools.md', 'Docker界面可视化'],
            ['02-Tomcat.md', 'Docker下Tomcat的使用'],
            ['03-Elasticsearch.md', 'Docker下Elasticsearch的使用']
        ],
        '/elasticsearch/': [
            ['', 'Elasticsearch'],
            ['00-GettingStarted.md', '简单了解Elasticsearch'],
            ['01-LocalInstallation', '安装本地Elasticsearch'],
            ['02-LocalInstallationIK.md', '安装本地IK分词插件'],
            ['03-SpringBootES.md', 'SpringBoot整合Elasticsearch'],
            ['04-DockerES.md', 'Docker下Elasticsearch的使用'],
            ['05-MySqlES.md', 'MySql数据同步Elasticsearch']
        ],
        '/cache/': [
            ['', 'Cache'],
            ['02-Cache-Invalidation', '缓存失效的场景'],
            ['00-DataBaseConsistency.md', 'Redis与数据库一致性'],
            ['01-DataBaseConsistency.md', 'Redis与数据库一致性补充']
        ],
        '/database/': [
            ['', 'Database'],
            ['00-Isolation', 'ACID以及事务隔离级别'],
            ['01-MySQL-Lock', 'MySQL那些锁'],
            ['02-DB-NF', 'Database中的范式理论'],
            ['03-MySQL-Index-B+', 'MySQL索引以及B+树']
        ],
        // 前端记录
        '/front/': [
            ['', '前端记录'],
            ['00-Notes', '组件UI库记录'],
            ['01-Knowledge-System.md', '前端知识体系']
        ],
        // 分布式
        '/distributed/': [
            ['', 'Distributed'],
            ['00-CAP-BASE.md', 'CAP和BASE理论'],
            ['01-Distributed-Transaction.md', '浅析分布式事务']
        ],
        // 秒杀架构
        '/seckill/': [
            ['', '秒杀架构'],
            ['01-Design-Thinking.md', '秒杀系统的设计思考'],
            ['02-Distributed-Limit', '高并发下的限流分析']
        ],
        '/springcloud/': [
            ['', 'SpringCloud'],
            ['00-Version', '版本区别']
        ],
        // 工具命令
        '/command/': [
            ['', '工具命令'],
            ['01-Git-Command.md', 'Git命令记录'],
            ['02-Linux-Command.md', 'Linux命令记录'],
            ['03-Docker-Command.md', 'Docker命令记录'],
            ['04-Git-MultiUser.md', 'SSH同时使用多个Git账户'],
            ['05-Git-MultiPush.md', 'Git一次Push到多个远端'],
            ['06-JMeter-Install', 'JMeter的安装使用']
        ],
        // 零散记录
        '/note/': [
            ['', '推荐阅读'],
            ['00-Technical-Map.md', '图谱记录'],
            ['01-CV.md', '写一个好的简历'],
            ['02-CV2.md', '写一个好的简历To'],
            ['03-Interview.md', '面试题记录收集']
        ],
        '/p/': [
            ['', '开源项目'],
        ],
        // 开源项目
        '/shirojwt/': [
            ['', 'ShiroJwt'],
            ['ShiroJwt01.md', '项目说明'],
            ['ShiroJwt-Interface.md', '接口文档'],
            ['ShiroJwt02-MySQL.md', '改为数据库形式(MySQL)'],
            ['ShiroJwt03-401.md', '解决无法直接返回401错误'],
            ['ShiroJwt04-Redis.md', '实现Shiro的Cache(Redis)功能']
        ],
        '/seckill-evolution/': [
            ['', 'SeckillEvolution'],
            ['00-Preparation.md', '0. 整体流程'],
            ['01-Tradition-Process', '1. 传统方式'],
            ['02-Optimistic-Lock', '2. 使用乐观锁'],
            ['03-Optimistic-Lock-Redis', '3. 使用缓存'],
            ['04-Distributed-Limit', '4. 使用分布式限流'],
            ['05-MQ-Async.md', '5. 使用队列异步下单']
        ],
        '/viewgenerator/': [
            ['', 'ViewGenerator']
        ],
        // 编程闲话
        '/gossip/': [
            ['', 'Java码农的悲哀'],
            ['01-Programmer-Slang.md', '码农有趣的黑话'],
            ['02-Technical-Interpretation.md', '史上最污技术解读'],
            ['03-Make-System.md', '阎王爷让我给他做个后台管理系统']
        ],
        // 其他记录
        '/other/': [
            ['', '其他记录'],
            ['01-Jekyll.md', '在Windows下安装与使用Jekyll'],
            ['02-Github-Failure.md', '解决GitHub访问不了的方法']
        ]
    }
}