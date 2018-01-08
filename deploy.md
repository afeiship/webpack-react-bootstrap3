# Deploy document
> Deploy document.


## Step by step:
+ install nodejs + bower
```bash
yum install nodejs 
```

+ install dependencies
```bash
git clone https://git.ooclab.com/cs/webpack-react-bootstrap3.git
cd tradewow-web
npm install --registry=https://registry.npm.taobao.org
npm run build
```

+ copy dist to a folder
+ 
## docker安装
```
0. 确保系统已安装 docker, docker-compose
1. 执行本地代码更新 git pull
2. 执行build, ./docker-build.sh
3. 停止服务: docker-compose down
4. 启动服务：docker-compose up -d 
4. 测试：http://localhost:8081

```



## dev with docker:
```
1. 我在本地开发： npm run dev 跑的端口为： http://localhost:8337
2. 我期望的情况（利用 dockerfile 实现）：
 2.1 本地配置 www.dev.com:8337
 2.2 实际访问的是 docker 里的 centos 的 8337 和 webpack 的开发服务
```