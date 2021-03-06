import { app, BrowserWindowConstructorOptions } from 'electron'
import { asAssetsPath } from './paths'

app.setAppUserModelId('com.im.NginxEditor')
/** 应用名称 */
export const APP_NAME = app.name

/** 应用标题 */
export const APP_TITLE = app.name

/** 应用主图标 (桌面) */
export const APP_ICON = asAssetsPath('app-icon/app-icon@256.png')

/** 亮色风格托盘图标 标准尺寸 16*16, 系统会自动载入 @2x 和 @3x */
export const TRAY_ICON_LIGHT = asAssetsPath('tray-icon/Icon.png')

/** 暗色风格托盘图标 (仅 macOS) */
export const TRAY_ICON_DARK = asAssetsPath('tray-icon/Icon@2x.png')

/** 创建新窗口时默认加载的选项 */
export const DEFAULT_WINDOW_OPTIONS: BrowserWindowConstructorOptions = {
  title: APP_NAME,
  icon: APP_ICON,
  minWidth: 200,
  minHeight: 200,
  width: 800,
  height: 600,
  show: false,
  hasShadow: true,
  webPreferences: {
    nodeIntegration: true,
    scrollBounce: true,
  },
  titleBarStyle: 'hiddenInset', // 隐藏标题栏, 但显示窗口控制按钮 , 需指定可拖动区域
  // frame: process.platform === 'darwin' ? true : false, // 无边框窗口
  // frame: false, // 无边框窗口
  // skipTaskbar: false, // 是否在任务栏中隐藏窗口
  // backgroundColor: '#fff',
  // transparent: true, // 窗口是否透明
  // titleBarStyle: 'default',
  vibrancy: 'fullscreen-ui', // 毛玻璃效果
}

export const DEFAULT_INITIAL_CONFIG: CreateConfig = {
  showSidebar: true,
  showTitlebar: false,
  autoShow: true,
  delayToShow: 10,
}
