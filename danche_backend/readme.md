node_modules 不应该跟踪，太大了
git ignore 在github仓库新建仓库时可以选择忽略哪种文件，也可以在项目里 .gitignore 文件中中添加需要忽略的文件
npm i 使用npm install时会修改package.json文件

ls  查看当前目录
ls -al 查看目录中的所有文件状态
cd 进入目录
pwd 当前的绝对物理路径
du -hs 文件名/ 查看文件大小
cat 文件名 输出文件

git add .
git commit -m ''
git push origin master

git pull origin master
yarn 安装依赖

1.  删除node_modules
    git rm
2. .gitignore
3. 提交删除