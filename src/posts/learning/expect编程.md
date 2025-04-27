---
icon: book-open-reader
date: 2024-06-29
---

# expect编程

> *解决脚本交互问题*

<!-- more -->

* spawn：开启会话
* expect：计划指令
* interactive：停止交互
* set：设置变量
* expect eof：结束交互

```expect
# /bin/expect

set password 123
spawn ssh target
expect {
	"yes/no" {send "yes\r"; exp_continue}	#没出现继续执行
	"password:" {send "$password\r"};
}
#interactive
expect eof
```

## 变量

* 位置变量：[lindex &argv num]，从0索引