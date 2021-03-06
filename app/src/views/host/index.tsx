import { Button, Icon, message } from 'antd'
import React, { useEffect, useState, useRef, Fragment } from 'react'
import path from 'path'

import SudoModal from './SudoForm'

import { CodeMirror } from '@/src/components'
import { exec } from '@/src/util/cmd'
import db from '@/src/util/db'
import { pReadFile, pWriteFile } from '@/src/util/io'
import { isNeedPswd } from '@/src/util'
import { colorCfg } from '@/src/constant'
import { Content, Head, Right } from '@/src/components'

const userPath = $tools.APP_DATA_PATH

const Host = () => {
  const { hostPath } = db.get('config')

  const [content, setContent] = useState('')
  const [isShowModal, setIsShowModal] = useState(false)
  const [status, setStatus] = useState('success')

  const contentRef = useRef('')
  contentRef.current = content

  const readFile = async () => {
    const [data] = await pReadFile(hostPath)
    setContent(data || '')
  }
  useEffect(() => {
    readFile()
  }, [])

  const closeModal = () => setIsShowModal(false)

  const showModal = () => setIsShowModal(true)

  const onSaveFile = async () => {
    const tempFilePath = path.join(userPath, '.wf_temp.txt')
    setStatus('')

    if (typeof contentRef.current !== 'string') {
      message.error('保存出错')
      return
    }

    const [, err] = await pWriteFile(tempFilePath, contentRef.current)
    if (err) return

    const pwd = db.get('config').sudoPswd
    let cmd

    if (!pwd) {
      cmd = [`cat "${tempFilePath}" > ${hostPath}`, `rm -rf ${tempFilePath}`].join(' && ')
    } else {
      cmd = [
        `echo '${pwd}' | sudo -S chmod 777 ${hostPath}`,
        `cat "${tempFilePath}" > ${hostPath}`,
        `echo '${pwd}' | sudo -S chmod 644 ${hostPath}`,
      ].join(' && ')
    }

    const [stdout, error] = await exec(cmd)

    if (!error) {
      message.success('保存成功')
      setStatus('success')
      return
    }

    if (!pwd || isNeedPswd(stdout + error)) {
      showModal()
    } else {
      message.error(error)
    }
  }

  const savePwd = (v: string) => {
    db.update('config', { sudoPswd: v })

    closeModal()

    setTimeout(() => {
      onSaveFile()
    }, 100)
  }

  const onChange = (v: string) => setContent(v)

  return (
    <Fragment>
      <Head>
        <Button type="primary" size="small" onClick={onSaveFile}>
          保存
        </Button>
        <div className="g-sm-info">如有错误请检查 setting 页面命令配置是否正确</div>
        <Right>
          <div
            style={{
              color: colorCfg[status],
              fontSize: '16px',
              height: 32,
            }}
          >
            {status === 'success' && <Icon type="check-circle" />}
            {status === 'error' && <Icon type="close-circle" />}
          </div>
        </Right>
      </Head>
      <Content right>
        <CodeMirror
          value={content}
          options={{
            mode: 'shell',
          }}
          onChange={onChange}
          onSave={onSaveFile}
        />
      </Content>
      {isShowModal && <SudoModal saveData={savePwd} onCancel={closeModal} />}
    </Fragment>
  )
}

export default Host
