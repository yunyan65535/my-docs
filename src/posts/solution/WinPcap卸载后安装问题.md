---
icon: shrimp
date: 2025-03-31
---


# WinPcap卸载后安装问题

卸载WinPcap.exe后,重新安装，错误提示：

“a new version of WinPcap is already installed on this machine”

<!-- more -->

解决办法：

找到相应文件，并把扩展名修改即可

**● C:\Windows\SysWOW64 的wpcap.dll改成 wpcap.dll.old**

**● C:\Windows\SysWOW64的packet.dll改成 packet.dll.old**