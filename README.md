
# AIP文档生成工具

简单的文档生成工具! [生成的页面预览效果](https://www.geekjc/geekjc-doc) [Details document](https://www.geekjc/geekjc-doc)

```
 ______   ______  ______  _    __       _   ______ - _____    ______   ______ 
| | ____ | |     | |     | |  / /      | | | |      | | \ \  / |  | \ | |     
| |  | | | |---- | |---- | |-< <   _   | | | |      | |  | | | |  | | | |     
|_|__|_| |_|____ |_|____ |_|  \_\ |_|__|_| |_|____  |_|_/_/  \_|__|_/ |_|____ 
                                                                              
```

# 全局安装

```bash
$ sudo npm install geekjc-doc -g
```


# 命令使用

命令使用帮助。


```sh
  Usage: geekjc-doc [options]

    Simple document generation tool!

  Options:

    -h, --help           output usage information
    -V, --version        output the version number
    -C, --Create <file>  Select Directory Makefile.
    -v                   App version information.
    -i, init             Init a documentation.
    -b, build            Markdown produces static pages document.
    -w, watch            Listener "md" file is automatically generated pages.
    -s, server           Open local static html server.
    -c, clean            Clear the generate static files.
    -t, theme            Choose a theme.
    -d, deploy           Publish to a gh-pages branch on GitHub.

  Examples:

    $ geekjc-doc init
    $ geekjc-doc init [path]
    $ geekjc-doc init [path] -C ~/geekjc-doc/
    $ geekjc-doc watch
    $ geekjc-doc server
    $ geekjc-doc clean
    $ geekjc-doc deploy
    $ geekjc-doc theme
    $ geekjc-doc -t ~/git/geekjc-doc-theme-slate/
```


# TODO

- [x] geekjc-doc 基本命令定义
- [x] 添加 build 命令，markdown生成静态页面
- [x] 添加 watch 命令，监控markdown文件自动生成HMTL页面
- [x] 默认模板制作
- [x] 树形菜单生成
- [x] 添加 server 命令，预览生成的静态页面
- [x] 添加多页面导航菜单
- [x] 添加 clean 命令
- [x] 静态资源相对路径引用
- [x] github 连接地址添加
- [x] `geekjc-doc deploy` === `git push -f origin gh-pages`
- [ ] 配置文件配置下载 md 文件
- [x] 解决server 端口冲突
- [ ] 判断是否存在markdown树形导航菜单
- [x] 第二个模板制作
- [x] 模板切换命令
- [ ] api 检索功能
- [x] 兼容windows路径(cmd工具冒得问题嘞)
