(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{501:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nginx转发udp信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx转发udp信息"}},[t._v("#")]),t._v(" Nginx转发UDP信息")]),t._v(" "),a("p",[t._v("记录 "),a("code",[t._v("Nginx")]),t._v(" 转发 "),a("code",[t._v("UDP")]),t._v(" 信息")]),t._v(" "),a("h2",{attrs:{id:"_1-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-start"}},[t._v("#")]),t._v(" 1. Start")]),t._v(" "),a("p",[a("code",[t._v("Nginx")]),t._v(" 要支持 "),a("code",[t._v("UDP")]),t._v(" 需要开启 "),a("code",[t._v("Stream")]),t._v(" 模块")]),t._v(" "),a("p",[t._v("修改配置需要重启，在 "),a("code",[t._v("sbin")]),t._v(" 目录下执行 "),a("code",[t._v("./nginx -s reload")])]),t._v(" "),a("h2",{attrs:{id:"_2-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-config"}},[t._v("#")]),t._v(" 2. Config")]),t._v(" "),a("p",[t._v("记录配置")]),t._v(" "),a("h3",{attrs:{id:"_2-1-主配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-主配置"}},[t._v("#")]),t._v(" 2.1. 主配置")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("user  nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nworker_processes  auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nworker_cpu_affinity auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nerror_log  logs/error.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# error_log  logs/error.log  notice;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# error_log  logs/error.log  info;")]),t._v("\n\npid        conf/nginx.pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nevents "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    use epoll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    worker_connections  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20480")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\nhttp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    include       mime.types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    default_type  application/octet-stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志格式化")]),t._v("\n    log_format  main  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_user")]),t._v(" ["),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$time_local")]),t._v('] "'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),t._v("\" '")]),t._v("\n                      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$body_bytes_sent")]),t._v(' "'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_referer")]),t._v("\" '")]),t._v("\n                      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\""),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_user_agent")]),t._v('" "'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_x_forwarded_for")]),t._v("\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志使用main格式")]),t._v("\n    access_log  logs/access.log  main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    sendfile        on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tcp_nopush     on;")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# keepalive_timeout  0;")]),t._v("\n    keepalive_timeout  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gzip  on;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 包含配置")]),t._v("\n    include /home/nginx/nginx-1.18.0/conf/conf.d/*.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nstream "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志格式化")]),t._v("\n    log_format proxy "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),t._v(" ["),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$time_local")]),t._v("] '")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$protocol")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$bytes_sent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$bytes_received")]),t._v(" '")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$session_time")]),t._v(' "'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$upstream_addr")]),t._v("\" '")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\""),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$upstream_bytes_sent")]),t._v('" "'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$upstream_bytes_received")]),t._v("\"'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\""),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$upstream_connect_time")]),t._v('" '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$body_bytes_sent")]),t._v("'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志使用proxy格式")]),t._v("\n    access_log logs/udp-access.log proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    open_log_file_cache off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 包含配置")]),t._v("\n    include /home/nginx/nginx-1.18.0/conf/conf.d/udp/*.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-2-http配置示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-http配置示例"}},[t._v("#")]),t._v(" 2.2. HTTP配置示例")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 监听80")]),t._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name  xxx.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    access_log  logs/xxx.com_access.log  main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    error_log   logs/XXX.com_error.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置反向代理")]),t._v("\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxy_set_header X_HTTP_SERVER   nginx ;")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxy_set_header X_REQUEST_URL $host;")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxy_set_header X_REQUEST_PORT $http_port;")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxy_set_header  X-Real-IP  $remote_addr;")]),t._v("\n        proxy_pass  http://xx.xx.xxx.xxx:9010"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    location ^~ /console/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" deny all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-2-udp配置示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-udp配置示例"}},[t._v("#")]),t._v(" 2.2. UDP配置示例")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18000")]),t._v(" udp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    proxy_pass xx.xx.xxx.xxx:18000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不等session完成就打印日志")]),t._v("\n    proxy_responses "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-log"}},[t._v("#")]),t._v(" 3. Log")]),t._v(" "),a("p",[a("code",[t._v("Nginx")]),t._v(" 日志主要一条是 "),a("code",[t._v("log_format")]),t._v(" 用来设置日志格式，另外一条是 "),a("code",[t._v("access_log")]),t._v(" 用来指定日志文件的存放路径、格式和缓存大小")]),t._v(" "),a("p",[t._v("详细查看: "),a("a",{attrs:{href:"https://www.cnblogs.com/kevingrace/p/5893499.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx配置中的log_format用法梳理（设置详细的日志格式）"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_4-负载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-负载"}},[t._v("#")]),t._v(" 4. 负载")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("upstream backserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题")]),t._v("\n    ip_hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# down表示当前的server暂时不参与负载")]),t._v("\n    server "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:9090 down"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# weight默认为1，weight越大，负载的权重就越大")]),t._v("\n    server "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:8080 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("weight")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:6060"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 其它所有的非backup机器down或者忙的时候，请求backup机器")]),t._v("\n    server "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:7070 backup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    proxy_pass http://backserver/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("参考")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_39639119/article/details/85019822",target:"_blank",rel:"noopener noreferrer"}},[t._v("记录一次 nginx udp无法打印日志问题"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);