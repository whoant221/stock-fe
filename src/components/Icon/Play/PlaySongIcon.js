import { useState, useEffect } from 'react';
import 'tippy.js/dist/tippy.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '~/redux/actions';
import zingStorage from '~/utils/storage';
import classNames from 'classnames/bind';
import styles from './PlaySongIcon.module.scss';
const cx = classNames.bind(styles)

function PlaySongIcon({className}) {

  const classIcon = ['fas fa-play', 'fas fa-waveform']
  const [number, setNumber] = useState(0)
  
  const handleClick =() => {
    if(number === 0) setNumber(1)
    if(number === 1) setNumber(0)
  }

  return (
    <button className={cx('wrapper', className)} onClick={handleClick}>
        <span className={cx('icon')}>
          <i className={cx(classIcon[number])}></i>
        </span>
    </button>
  )
}
export default PlaySongIcon