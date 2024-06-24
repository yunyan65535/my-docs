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

|	Play play	|
|---------------|

<!-- more -->
## 判断主机存活

```shell
#! /bin/bash

num=0
red="\e[1;31m"
blue="\e[1;34m"
reset="\e[0m"
if [ $# -eq 0 ];then
	echo -e "${red}please enter an parameter after `basename $0` file$reset"
	exit
fi
if [ ! -f $0 ];then
	echo -e "${red}the file type is not committed$reset"
	exit
fi
for ip in `cat $1`
do
	ping -c1 $ip &>/etc/null
	if [ $? -eq 0 ];then
		echo -e "$blue$ip is up$reset"
		((num++))
	fi
done
if [ $num -eq 0 ];then
	echo -e "${red}all die$reset"
fi

```

