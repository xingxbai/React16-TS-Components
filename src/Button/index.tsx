import React, { ReactNode } from "react";
import './index.css'
import classNames from 'classnames'
interface ButtonProps{
  type?: 'normal' | 'primary' | 'dashed' | 'link' | 'text',
  className?: string,
  children?: ReactNode,
  style?: React.CSSProperties
}
const Button = (props: ButtonProps) => {
  const { className, children, type, style } = props
  const cls = classNames({
    'ant-btn': true,
    ['ant-btn-'+type]: type,
    [className as string]: !!className
  })
  return (
    <button className={cls} style={style}>
      {children}
    </button>
  )
}

export default Button