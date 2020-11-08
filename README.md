# realworld-nuxtjs

+ 配置PM2配置文件 pm2.config.json  我的服务器上pm2启动yarn有点问题，所以pm2使用npm来起项目。

  ```json
  {
    "apps": [
      {
        "name": "RealWorld",
        "script": "npm",
        "args": "start"
      }
    ]
  }
  ```

+ 提交更新

  + `git add .`
  + `git commit -m"第一次发布部署-测试"`
  + `git push` （此时只是推送了提交记录，并不会触发自动化构建）
  + `git add .`
  + `git tag v0.1.0` （通过tag打版）
  + `git tag` （查看版本）
  + `git push origin v0.1.0` （把本地标签推送到远程仓库，会触发自动构建）