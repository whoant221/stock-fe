import { useState, useEffect, useRef } from 'react';
import 'tippy.js/dist/tippy.css';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './PlaySongIcon.module.scss';
const cx = classNames.bind(styles)

function PlaySongIcon({className, data = {encodeId: null}}) {
  const audioElem = useRef();
  const classIcon = ['fas fa-play', 'fas fa-waveform']
  const [number, setNumber] = useState(0)
  const [listrender, setlistrender] = useState();


  useEffect(() => {
    const getSong = async () => {
      try {
          const a = await axios.get(`https://apizingmp3.herokuapp.com/api/song?id=${data.encodeId}`);
          setlistrender(a.data.data['128']);
      } catch (error) {
          alert(error);
      }
    };
    getSong()
  }, []);

  const radio = () => {
    if(listrender){
      return(
        <audio src={ listrender } preload="metadata" ref={audioElem}></audio>
    )}
  }

  const handleClick =() => {
    if(number === 0){
      console.log(audioElem.current);
      setNumber(1)
      audioElem.current.play()
    } 
    if(number === 1) {
      setNumber(0)
      audioElem.current.pause()
    }
  }

  return (
    <button className={cx('wrapper', className)} onClick={handleClick}>
      {radio()}
      <span className={cx('icon')}>
        <i className={cx(classIcon[number])}></i>
      </span>
    </button>
  )
}
export default PlaySongIcon