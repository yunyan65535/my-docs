---
icon: book-open-reader
date: 2024-06-21
category:
  - Linux
tag:
  - learning
  - shell
star: true
sticky: 10
---

# Linux进阶-shell编程

> *shell：介于用户和内核之间的工具，用户操作通过shell解析传递给内核*
>
> *两种表现形式：交互式、脚本式*
>
> *类型：bash（Linux默认）、ash、csh、ksh等*

<!-- more -->

## 基本格式

```shell
#未指定解释器时生效,默认为bash
#! /bin/bash

#定向给pyton执行
python <<-EOF
print "hello world"
EOF

#执行语句
echo "hello world"
```

## 执行

> 无论是通过bash shell.sh还是./shell.sh都是在sub shell执行，不会影响当前shell，而使用. shell或source shell.sh则会在当前shell生效

## 特点

### 历史命令记忆

| 命令    | 作用                     |
| ------- | ------------------------ |
| !number | 执行编号命令             |
| !string | 最近一个搜索到的命令执行 |
| !$      | 上个命令最后参数         |
| !!      | 上个命令                 |
| ^R      | 搜索历史命令             |

### 命令别名

| 命令      | 作用                   |
| --------- | ---------------------- |
| alias     | 查看别名、临时命名别名 |
| unalias   | 取消别名               |
| \         | 跳过别名使用           |
| ~/.bashrc | 永久命名别名           |

### 快捷键

| 快捷键 | 作用           |
| ------ | -------------- |
| ^R     | 搜索历史命令   |
| ^D     | 退出登录       |
| ^A     | 光标移动最前   |
| ^E     | 光标移动最后   |
| ^K     | 删除光标后内容 |
| ^U     | 删除光标前内容 |
| ^Y     | 撤销           |
| ^S     | 不显示命令行   |
| ^Q     | 显示命令行     |
| ^V     | 块选择         |

### 通配符

| 符号                  | 作用                       |
| --------------------- | -------------------------- |
| *                     | 匹配任意字符               |
| ?                     | 匹配任意一个字符           |
| [123]、[1-3];[^1-3\] | 匹配范围内一个；不在范围内 |
| ()                    | 将命令在sub shell执行      |
| {1..3}、\{1,2,3\}       | 集合，按序取参             |
| \                     | 转义                       |

### 前后台进程控制

> screan工具：
>
> -S：定义一个会话名称，
>
> -list：查看会话列表，
>
> -r：继续会话

| 命令      | 作用                   |
| --------- | ---------------------- |
| &         | 后台运行               |
| nohup     | 使终端重启时后台还存在 |
| ^C        | 结束前台进程           |
| ^Z        | 前台作业暂停到后台     |
| jobs      | 查看作业状态           |
| bg PID    | 作业后台工作           |
| fg PID    | 作业回到前台           |
| kill %PID | 终结进程               |

### 颜色设置

* \e[1;30m：字体颜色30-37
* \e[1;40m：背景颜色40-47
* \e[0m：重置

## 变量

### 使用

* 引用变量：$，字符串中加{}或空格隔开
* 删除变量：unset
* 只读：readonly

### 类型

* 本地变量：脚本内部使用

* 环境变量：整个系统可使用

  > env：查看所有环境变量
  >
  > 修改：
  >
  > ​		系统：/etc/profile
  >
  > ​		用户：~/.bash_profile
  >
  > 导出：
  >
  > ```bash
  > export PATH=$PATH:/root/shell
  > ```
  >
  > 在脚本中一般无需设置环境变量，如需调用其他文件变量导出后. shell引入

* 位置变量

  $数字：根据参数下标传参

* 预定义变量：

  | 变量   | 含义                              |
  | ------ | --------------------------------- |
  | $0     | 脚本文件名                        |
  | $*、$@ | 所以参数                          |
  | $#     | 参数个数                          |
  | $?     | 上次执行命令结果，0正确，其他错误 |
  | $!     | 上一个后台进程PID                 |
  | $$     | 当前进程PID                       |

### 字符串

* ${#变量}：字符串长度
* ${变量:开始:长度}：提取字符

### 数组

* ()：定义数组
* ${数组[]}:获取对应下标元素

### 引用

> 基本引用格式：$、(())、${}、``

* ${temp#~}：从前删除特定内容后引用
* ${temp#*~}：删除到第一个特定内容处引用
* ${temp##*~}：贪婪匹配
* ${temp%~}：从后匹配删掉特定内容
* ${temp%~*}：删除到第一个特定内容处引用
* ${temp%%~*}：贪婪匹配
* ${temp:n:m​}：切片引用

* ${temp/oldstr/newstr}：内容替换引用
* ${temp//oldstr/newstr}：贪婪匹配

### 赋值

* ${temp-str}：未定义时str将替换
* ${temp=str}：同-；但还会赋值给temp
* ${temp+str}：与-相反
* ${temp?str}：未定义把str输出到标准错误中，并退出脚本

> 加:空值也生效

## 运算

> 测试工具test，成功结果为0，失败为1，$?查看
>
> 简写[ 表达式 ]

### 数值比较

| 命令 | 判断 |
| :--: | :--: |
| -lt  |  <   |
| -le  |  <=  |
| -gt  |  >   |
| -ge  | \>=  |
| -ne  |  !=  |
| -eq  |  =   |

### 字符串比较

| 判判断断命令 |   运算    |
| :----------: | :-------: |
|      =       |     =     |
|      !=      |    !=     |
|      -n      | 长度不为0 |
|      -z      |  长度为0  |

### 文件判断

| 命令 |      判断      |
| :--: | :------------: |
|  -f  |      文件      |
|  -d  |      目录      |
|  -w  |      可写      |
|  -x  |     可执行     |
|  -s  |     不为空     |
|  -c  | 字符设备文件按 |
|  -b  |   块设备文件   |
|  -L  |      链接      |
|  -e  |      存在      |

### 逻辑判断

|   命令   | 判断 |
| :------: | :--: |
|  -a、&&  |  与  |
| -o、\|\| |  或  |
|    !     |  非  |

## 流程控制

### read输入

| 参数 | 作用         |
| ---- | ------------ |
| -p   | 打印         |
| -t   | 等待时间     |
| -n   | 限制输入长度 |



### if分支结构

```shell
#! /bin/bash

read -p "please input two number:" a b

if [ $a -ge $b ];then
	echo "right"
elif [ $a -ne $b ];then
	echo "error"
else
	echo "what this?"
fi
```

### case分支结构

```shell
#! /bin/bash

read -p "please input a char:" str

case $str in
[a-z])
	echo "alpha"
;;
[0-9])
	echo "number"
;;
*)
	echo "others"
;;	
esac
```

### for循环结构

```shell
#! /bin/bash

#遍历
for i in a b /*
do
	echo $i
done
```

```shell
#! /bin/bash

#求和
for i in `seq 1 100`
do
	let sum+=$i
done

echo $sum
```

```shell
#! /bin/bash

#打印1到5
for ((i=1;i<=5;i++))
do
	echo $i
done
```

### while循环结构

```shell
#! /bin/bash

#打印1到5
i=1

while [ $i -le 5 ]
do
	echo $i
	((i++)) #let i+=1; i=$[$i+1]
done
```

### until循环结构

```shell
#! /bin/bash

#打印1到5
i=1

until [ $i -gt 5 ]
do
	echo $i
	((i++))
done
```

## 函数

```shell
#! /bin/bash

demo()
{
	read -p "输入两个数:" a b
	sum=$(($a+$b))
	echo "the sum is:"
	return $sum
}
demo

echo $?

#demo自定义
```

## 调试

* sh -n shell.sh：检查语法错误
* sh -vx shell.sh：查看执行过程

## 特殊命令

* seq m n：生成m到n正数
* expr：运算操作
* basename：显示路径最后文件名
* dirname：最后目录名

## 文件包含

* .文件
* source 文件

## 相关文件

### 系统级

* /etc/profile：全局环境
* /etc/bashrc：局部环境

### 用户级

* ~/.bash_profile：全局环境
* ~/.bashrc：局部环境
* ~/.bash_logout：退出后执行命令
* ~/.bash_history：退出后记录历史命令

<img src="../../.vuepress/public/images/image-20240623110504680.png" alt="image-20240623110504680" style="zoom:50%;" />

### 黑洞文件

> 所有经黑洞文件数据都为空，路径/dev/null

* 任意内容屏蔽输出和错误

  ```bash
  ping www.baidu.com &>/dev/null
  ```

* 清空文件

  ```bash
  cat /dev/null > 文件
  ```
  
  ```bash
  echo "cat /dev/null >~/.bash_history" >>~/.bash_logout
  ```

## sed

> 作用：处理文件流
>
> 格式：sed [参数] 指令 文件

| 参数 | 作用                    |
| ---- | ----------------------- |
| -n   | 结合p使用，用于打印内容 |
| -i   | 会对文件进行修改        |

| 指令           | 作用                 |
| -------------- | -------------------- |
| '1p'           | 打印第1行            |
| '$p'           | 打印最后行           |
| '1,$p'         | 打印1到最后行        |
| '1a 内容'      | 第1行下添加          |
| '1,2a 内容'    | 1到2行下都添加       |
| '1d'           | 删除第一行           |
| '1,2d'         | 删除1到2行           |
| '1c 内容'      | 取代第一行           |
| '1,2c 内容'    | 取代1到2行           |
| 's/旧/新/g'    | 替换所有内容         |
| '1,2s/旧/新/g' | 对1到2行内容进行替换 |

