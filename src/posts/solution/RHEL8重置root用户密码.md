---
icon: shrimp
date: 2024-11-25
---

# RHEL8重置root用户密码

<!-- more -->
1. 在启动界面按e进入内核编辑

   <img src="../../.vuepress/public/images/image-20250224153238630.png" alt="image-20250224153238630" style="zoom:67%;" />

2. 在末尾添加rd.break

   <img src="../../.vuepress/public/images/image-20250224153151952.png" alt="image-20250224153151952" style="zoom: 67%;" />

3. 按Ctrl+x进入救援模式

   <img src="../../.vuepress/public/images/image-20250224153536690.png" alt="image-20250224153536690" style="zoom:67%;" />

4. 输入以下指令

   ```bash
   mount -o remount,rw /sysroot
   chroot /sysroot
   passwd
   # 输入两次密码
   touch /.autorelabel
   exit
   reboot
   ```

   