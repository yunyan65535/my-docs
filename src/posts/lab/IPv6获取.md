---
icon: project
date: 2025-06-05
star: true
---

# IPv6获取

> 此实验建立在光猫工作在路由模式且天翼网关的基础上

<!-- more --> 

1. 查看电脑网关，登录路由器配置页面

   <img src="../../.vuepress/public/images/image-20250531171212228.png" alt="image-20250531171212228" style="zoom: 50%;" />

2. 输入密码登录后查看光猫工作模式，PPPoE为桥接模式，DHCP为路由模式（家用路由器一样用）

   <img src="../../.vuepress/public/images/image-20250531171326761.png" alt="image-20250531171326761" style="zoom:33%;" />

3. 通过网关地址访问光猫，输入密码后可对光猫进行简单配置，SSID，密码等信息标示于光猫背面，登录后还是无法网络设置，需要超级管理员账户telecomadmin权限，因此先得获取账户密码

   <img src="../../.vuepress/public/images/image-20250531171631426.png" alt="image-20250531171631426" style="zoom:50%;" />

4. 在登录后的界面查看源代码，搜索`sessionKey`，将其添加在URL后，注意`sessionKey`具有一定时效性，刷新重新获取既可

   ```
   http://192.168.1.1:8080/usbbackup.cmd?action=backupeble&amp;enabled=0&amp;sessionKey=
   ```

   找到一个，结果访问的时候说不存在，于是找下一个

   <img src="../../.vuepress/public/images/image-20250531172447139.png" alt="image-20250531172447139" style="zoom: 67%;" />

   成功找到

   <img src="../../.vuepress/public/images/image-20250531172618144.png" alt="image-20250531172618144" style="zoom: 67%;" />

5. 访问成功后页面如下，光猫上插入u盘需要FAT32或者NTFS格式，点击备份配置

   <img src="../../.vuepress/public/images/image-20250531174153968.png" alt="image-20250531174153968" style="zoom:50%;" />

6. 保存成功后取下u盘查看，可看到配置文件，使用RouterPassView进行查看

   <img src="../../.vuepress/public/images/image-20250531174455029.png" alt="image-20250531174455029" style="zoom:50%;" />

7. 查找TeleComAccount找到账户和密码

   <img src="../../.vuepress/public/images/image-20250531180100477.png" alt="image-20250531180100477" style="zoom:50%;" />

8. 登录成功，可对网络进行配置

   <img src="../../.vuepress/public/images/image-20250531180219991.png" alt="image-20250531180219991" style="zoom: 50%;" />

9.  修改网络配置

    <img src="../../.vuepress/public/images/image-20250531181014026.png" alt="image-20250531181014026" style="zoom: 50%;" />

10. 查看网络状态，成功获取全球IPv6地址

    <img src="../../.vuepress/public/images/image-20250605113711139.png" alt="image-20250605113711139" style="zoom: 50%;" />

11. 测试连通性

    <img src="../../.vuepress/public/images/image-20250605114149795.png" alt="image-20250605114149795" style="zoom: 50%;" />

12. 填入获取到的前缀并开启dhcp

    <img src="../../.vuepress/public/images/image-20250605114823658.png" alt="image-20250605114823658" style="zoom:50%;" />

13. 查看主机ip获取情况，成功获取

    <img src="../../.vuepress/public/images/image-20250605121911784.png" alt="image-20250605121911784" style="zoom:50%;" />

14. 测试ipv6网络是否可用https://ip.zxinc.org/ipquery/

    <img src="../../.vuepress/public/images/image-20250605164744048.png" alt="image-20250605164744048" style="zoom:50%;" />

