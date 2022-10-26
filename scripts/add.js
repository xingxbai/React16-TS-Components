const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const chalk = require('chalk');
const { spawn } = require('child_process');
const handlebars = require('handlebars');
const fetch = require('node-fetch');

/**
 * abc-xyz => AbcXyz
 * @param {*} str 
 */
 const varCase = str => str.replace(/-[a-z]/g, m => m[1].toUpperCase()).replace(/^.{1}/, m => m.toUpperCase());
 const lowCase = str => str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`).replace(/^-/, '');
 (async () => {
  // 读取终端输入的组件名：input(process.argv)
  const component = process.argv[2]
  const dirName = lowCase(component)
  const componentName = varCase(component)
  // spawn 模块读取执行命令行 mkdir
  spawn('mkdir', ['-p', path.join(process.cwd(), 'src/'+dirName)])
  // 读取template文件夹下所有hbs模板
  const tplFiles = glob.sync(path.join(__dirname, 'template/*.hbs'))
  tplFiles.forEach(async filePath => {
    const content = await fs.readFile(filePath, 'utf-8')
    // 使用handlebars读取hbs模板的内容，返回值是函数
    const template = handlebars.compile(content)
    const result = template({
      dirName,
      componentName
    })

    const newPath = filePath.replace('scripts/template', `src/${dirName}`)
    .replace('component', componentName)
    .replace('Component', componentName)
    .replace('.hbs', '');
    await fs.writeFile(newPath, result);
    console.log(chalk.green('write  '+newPath+' success'))
  })
  const response = await fetch(`https://unpkg.com/antd@4.19.5/es/${dirName}/style/index.css`);
  const body = await response.text();
  const scssFile2 = path.join(process.cwd(), 'src/'+dirName+'/index.scss')
  console.log(33, scssFile2)
  const scssFile = path.join(process.cwd(), `src/${dirName}/index.scss`);
  await fs.writeFile(scssFile, body);
  console.log(chalk.green(`update ${scssFile} success`));
 })()
