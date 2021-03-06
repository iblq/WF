/**
 * 页面资源集合，请不要在主进程中引用
 */

// 设为 undefined 将不会创建路由，一般用于重定向页面
export const Home = undefined

export const Demo = import('./views/demo/demo')
export const Nginx = import('./views/nginx/nginx')
export const Host = import('./views/host')
export const Doc = import('./views/doc')
export const Project = import('./views/project')
export const Setting = import('./views/setting')

// 同步/异步 混用
export { default as AlertModal } from './views/modals/alert-modal'
export { default as NoMatch } from './views/no-match/no-match'
