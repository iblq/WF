const fs = require('fs')
const ignoreList = ['node_modules']
import db from './db'

const remote = require('electron').remote
const homePath = remote.app.getPath('home')

export const formatList = projects => {
  /****
   * /User/baolq/mine/admin
   * {
   *  name: 'admin',
   *  path: '/User/baolq/mine/admin',
   *  userPath: '/mine
   * }
   */
  const list = projects.map(item => {
    const arr = item.split('/')

    let name = '',
      userPath = ''

    name = arr[arr.length - 1]

    userPath = arr.slice(3, arr.length - 1)
    userPath = userPath.join('/')
    return {
      name,
      userPath,
      path: item,
    }
  })

  let objData = {}
  for (let i of list) {
    let { userPath } = i
    objData[userPath] = objData[userPath] ? objData[userPath] : []
    objData[userPath].push(i)
  }
  return objData
}

export const readFile = (path, arr, docs) => {
  try {
    if (!fs.existsSync(path)) return

    let info = fs.statSync(path)

    // 文件夹
    if (!info.isDirectory()) return

    const files = fs.readdirSync(path) //同步读取文件夹

    // 判断是否是 node 应用
    if (files.includes('package.json')) {
      arr.push(path)
      return
    }
    // 判断是否是设计文档
    if (
      files.includes('index.html') &&
      (files.includes('assets') ||
        files.includes('images') ||
        files.includes('files') ||
        files.includes('links'))
    ) {
      docs.push(path)
      return
    }

    // 不是的话递归查看子文件夹
    const list = files.filter(item => item.substr(0, 1) !== '.' && !ignoreList.includes(item))
    for (let i of list) {
      readFile(path + '/' + i, arr, docs)
    }
  } catch (err) {
    return false
  }
}

export const readLocalList = () => {
  const { readDirList } = db.get('config')
  let projects = []
  let docs = []

  let arr = readDirList.split(/,|，/)
  arr = arr.filter(item => item && item.length > 1)

  for (const dir of arr) {
    readFile(homePath + '/' + dir, projects, docs)
  }

  projects = formatList(projects)
  docs = formatList(docs)

  db.set('projects', projects)
  db.set('docs', docs)
  return { projects, docs }
}