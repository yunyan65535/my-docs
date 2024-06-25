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

## 内存使用率

```shell
#! /bin/bash

total=`free |grep 'Mem' |awk '{print $2}'`
used=`free |grep 'Mem' |awk '{print $3}'`
rate=$((used*100/total))
echo "当前内存使用:$rate%"
```

## 磁盘预警

```shell
#! /bin/bash

mail=2104773395@qq.com
disk_used=df |grep '/$' |awk'{print $(NF-1)}' |awk "-F%" '{print $1}'
if [ $disk_used -ge 90 ];then
	echo "`date +%F/%H:%M:%S`,disk_used:$disk_used" |mail -s "disk warn!" $mail
fi
```

