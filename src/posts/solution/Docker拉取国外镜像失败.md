---
icon: shrimp
date: 2024-06-18
---

# Docker拉取国外镜像失败

* *拉取镜像超时*
* *拉取镜像时显示已弃用*

<!-- more -->

## 解决方案

### 一、拉取镜像

1. 登录docker实验室[https://labs.play-with-docker.com](https://labs.play-with-docker.com/)，点击Start

   <img src="https://im.gurl.eu.org/file/90630e8a652e8800677de.png" style="zoom: 25%;" />

2. 点击**+ ADD NEW INSTANCE**按钮，出现命令窗口

   <img src="https://im.gurl.eu.org/file/6e46657c0a3bc940653cc.png" alt="image-20240619093705369" style="zoom:50%;" />

3. 拉取镜像

   ```bash
   docker pull <镜像>:[版本]
   ```

### 二、导出镜像

1. 阿里云搜索**容器镜像服务 ACR**，进入管理控制台

2. 创建实例

   <img src="https://im.gurl.eu.org/file/075a18def4af83ca59c56.png" alt="image-20240619095603915" style="zoom: 50%;" />

3. 创建命名空间，不可重名

   ![image-20240619095714745](https://im.gurl.eu.org/file/269567ac0f880fa0233ca.png)

4. 创建镜像仓库，仓库名与镜像一致便于区分

   ![image-20240619095806040](https://im.gurl.eu.org/file/2418ebb8320f83d90d7dd.png)

5. 返回docker实验室命令窗口，输入命令登录阿里云Docker Registry

   ```bash
   docker login --username=云烟驻 registry.cn-shanghai.aliyuncs.com
   ```

6. 将镜像推送到Registry

   ```bash
   docker tag [ImageId/ImageName] registry.cn-shanghai.aliyuncs.com/<命名空间>/<镜像仓库>:[镜像版本]
   docker push registry.cn-shanghai.aliyuncs.com/<命名空间>/<镜像仓库>:[镜像版本]
   ```

7. 查看镜像推送成功

   ![image-20240619100919815](https://im.gurl.eu.org/file/8ba97432be6f22f635057.png)

8. 在自己服务器中登录阿里云Docker Registry

   ```
   docker login --username=云烟驻 registry.cn-shanghai.aliyuncs.com
   ```

9. 从Registry拉取镜像

   ```bash
   docker pull registry.cn-shanghai.aliyuncs.com/<命名空间>/<镜像仓库>:[镜像版本]
   ```

### 三、对镜像进行重命名

```bash
docker tag 旧镜像:版本 新镜像:版本  #此时会新增一个镜像，可以将原来镜像删除
```

