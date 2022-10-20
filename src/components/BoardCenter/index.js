import React from 'react'
import classNames from 'classnames/bind';
import styles from './BoardCenter.module.scss';
const cx = classNames.bind(styles);

export default function BoardCenter({ children, className }) {
  return <div className={cx('wrapper', {[className]: className})}>{children}</div>;
}
