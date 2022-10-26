import React, { ReactNode, CSSProperties, useState, useEffect } from 'react';
import classNames from 'classnames';
import { CloseOutlined } from '@ant-design/icons';
import './index.scss';

export interface tagProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    closable?: boolean;
    color?: string;
    visible?: boolean;
    onClose?: Function;
}

const Tag = (props: tagProps) => {
    const {
        className,
        children,
        closable,
        color,
        style: pstyle,
        ...others
    } = props;
    const [visible, setVisible] = useState(true)
    useEffect(()=>{
        if ('visible' in props && typeof props.visible !== 'undefined') {
            setVisible(props.visible)
        }
    }, [props.visible])
    const customColor = color && color.match(/^#/);

    const cls = classNames({
        'ant-tag': true,
        ['ant-tag-'+color]: color && !customColor, 
        [className as string]: !!className
    })
    const style: CSSProperties = {...pstyle}
    if (customColor) {
        style.backgroundColor = color;
    }

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if (typeof props.onClose === 'function') {
            props.onClose(e)
        }
        if (e.defaultPrevented) {
            return
        }
        if (!('visible' in props)) {
            setVisible(false);
        }
    }
    if (!visible) {
        return null
    }
    return <span {...others} className={cls} style={style} >
        {children}
        {closable ? 
        // @ts-ignore
        <CloseOutlined onClick={handleClick} /> : null}
        </span>;
}

export default Tag;