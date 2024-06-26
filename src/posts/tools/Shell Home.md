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

### v1.0	文件批量扫描

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

### v2.0	24掩码网段扫描

```shell
#! /bin/bash

>up_ip.txt
read -p "please input an ip: " ip
net=${ip%.*}
for i in {1..254}
do
	{	
		ip=$net.$i
		ping -c1 -W1 $ip &>/etc/null
		if [ $? -eq 0 ];then
			echo "$ip is up" |tee -a up_ip.txt
		fi
	}&	#后台运行高效率
done
wait	#等待循环执行完毕
echo "results have been pushed into up_ip.txt"
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
disk_used=`df |grep '/$' |awk -F"[ %]+" '{print $(NF-1)}'`
if [ $disk_used -ge 90 ];then
	echo "`date +%F/%H:%M:%S`,disk_used:$disk_used" |mail -s "disk warn!" $mail
fi
```

## 配置yum源

```shell
#! /bin/bash
#检查网络连通性
ping www.baidu.com &>/etc/null
if [ $? -ne 0 ];then
	ping 114.114.114.114 &>/etc/null
	if [ $? -ne 0 ];then
		echo "please cheak your DNS"
	else
		echo "please cheak your network"
	exit
else
	echo "erro"
	exit
fi
#获取系统版本
os_v=`cat /etc/redhat-release |awk -F"[ .]+" '{print $4}'`
#备份yum源
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
#下载
case $os_v in
7)
	curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
	;;
6)
	curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-6.10.repo --no-check-certificate
	;;
esac
#更新缓存
yum clean all
yum makecache
```

