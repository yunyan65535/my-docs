---
icon: bug
date: 2024-06-23
category:
  - Linux
  - Shell
tag:
  - play
---

# Shell Home

|---------------|
|	Play play	|
|---------------|

<!-- more -->>
## 判断主机存活

```shell
#! /bin/bash

num=0
if [ $# -eq 0 ];then
	echo -e "\e[1;31please enter an parameter after `basename $0` file\e[0m"
	exit
fi
if [ ! -f $0 ];then
	echo -e "\e[1;31mthe file type is not committed\e[0m"
	exit
fi
for ip in `cat $1`
do
	ping -c1 $ip &>/etc/null
	if [ $? ];then
		echo -e "\e[1;34m$ip is up\e[0m"
		((num++))
	fi
done
if [ $num -eq 0 ];then
	echo -e "\e[1;31mall die\e[0m"
fi

```

