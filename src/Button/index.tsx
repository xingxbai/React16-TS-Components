import React, { ReactNode } from "react";
import './index.css'
import classNames from 'classnames'
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
  type?: 'normal' | 'primary' | 'dashed' | 'link' | 'text',
  className?: string,
  children?: ReactNode,
  style?: React.CSSProperties,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  onBlur?: React.FocusEventHandler<HTMLButtonElement>
}
const Button = (props: ButtonProps) => {
  const { className, children, type, style, onClick, onBlur } = props
  const cls = classNames({
    'ant-btn': true,
    ['ant-btn-'+type]: type,
    [className as string]: !!className
  })
  return (
    <button className={cls} style={style} onClick={onClick} onBlur={onBlur}>
      {children}
    </button>
  )
}

export default Button