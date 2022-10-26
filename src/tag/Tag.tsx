import React, { ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';

import './index.scss';

export interface tagProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    type?: 'normal' | 'primary' | 'dashed' | 'link' | 'text';
    size?: 'small' | 'medium' | 'large';
    children?: ReactNode;
    style?: CSSProperties;
}

const Tag = (props: tagProps) => {
    const {className, type = 'normal', size = 'medium', children, style, ...others} = props;

    const cls = classNames({
        'ant-btn': true,
        [`ant-btn-${size}`]: size,
        [`ant-btn-${type}`]: type,
        [className as string]: !!className
    })
    return <span {...others} className={cls} style={style} >{children}</span>;
}

export default Tag;