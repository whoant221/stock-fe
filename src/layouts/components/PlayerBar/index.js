import classNames from 'classnames/bind';
import { useState } from 'react';
import Icon from '~/components/Icon';
import styles from './PlayerBar.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addValueIsPlay } from '../../../redux/actions';
import { setLoop, setRandom } from '../../../redux/actions';
import zingStorage from '~/utils/storage';
const cx = classNames.bind(styles);

function PlayerBar({ playSong, musicRef }) {
    const dispatch = useDispatch();
    const song = useSelector((state) => state.playMusicReducer);
    const valueVolume = useSelector((state) => state.IconProject.valueVolume['1']/100)
    const isPlay = useSelector((state) => state.IconProject.isPlay['1'])
    const isLoop = useSelector((state) => state.IconProject.isLoop['1'])
    const [PlaySong, setplaySong] = useState(0);
    const [LoadingNumber, setloadingNumber] = useState();


    if(PlaySong){
        if(isPlay) musicRef.current.play()
        else musicRef.current.pause()
    }

    //kết thúc audio sẽ làm gì ...
    const handleOnEnd = () => {
        dispatch(addValueIsPlay(false));
        // if(!isLoop){
        //     alert('thanh')
        // }
    }

    const onPlaying = () => {
        const duration = musicRef.current.duration;
        const ct = musicRef.current.currentTime;
        setplaySong(ct/duration * 100);
        setloadingNumber(parseInt(ct));
        musicRef.current.volume = valueVolume
    };

    const onChangeValue = (e) => {
        musicRef.current.currentTime = (e.target.value * Math.ceil(musicRef.current.duration)/100);
    }; 


    const handleLoop = () => {
        if (zingStorage.getIsLoop()) {
            dispatch(setLoop(false));
            zingStorage.setIsLoop(false);
        } else {
            dispatch(setLoop(true));
            zingStorage.setIsLoop(true);
        }
    };

    const handleRandom = () => {
        if (zingStorage.getIsRanDom()) {
            dispatch(setRandom(false));
            zingStorage.setIsRanDom(false);
        } else {
            dispatch(setRandom(true));
            zingStorage.setIsRanDom(true);
        }
    };

    return (
        <div className={cx('wrapper', 'grow')}>
            <div className={cx('control-btns', 'flex justify-center grow')}>

                {zingStorage.getIsRanDom() ?
                    <Icon
                        s18
                        isActive
                        className={cx('icon')}
                        icon={<i className='fal fa-random'></i>}
                        activeIcon={<i className='fal fa-random'></i>}
                        onClick ={handleRandom}
                    /> :
                    <Icon
                        s18
                        className={cx('icon')}
                        icon={<i className='fal fa-random'></i>}
                        activeIcon={<i className='fal fa-random'></i>}
                        onClick ={handleRandom}
                    />
                }
                
                <Icon
                    s18
                    className={cx('icon')}
                    icon={<i className='fal fa-step-backward'></i>}
                />
                {isPlay ? (
                    <Icon
                        s14
                        activeNoColor
                        isActive
                        className={cx('icon', 'icon-play')}
                        icon={<i className='fas fa-play'></i>}
                        activeIcon={<i className='fas fa-pause'></i>}
                        onClick={() => {
                            dispatch(addValueIsPlay(false))
                            musicRef.current.pause();
                        }}
                    />
                ) : (
                    <Icon
                        s14
                        activeNoColor
                        isActive 
                        className={cx('icon', 'icon-play')}
                        icon={<i className='fas fa-play'></i>}
                        activeIcon={<i className='fas fa-play'></i>}
                        onClick={() => {
                            dispatch(addValueIsPlay(true))
                            musicRef.current.play();
                        }}
                    />
                )}

                <Icon
                    s18
                    className={cx('icon')}
                    icon={<i className='fal fa-step-forward'></i>}
                />

                {zingStorage.getIsLoop() ? 
                    <Icon
                        s18
                        isActive
                        className={cx('icon')}
                        icon={<i className='fal fa-repeat'></i>}
                        activeIcon={<i className='fal fa-repeat'></i>}
                        onClick = {handleLoop}
                    /> : 
                    <Icon
                        s18
                        className={cx('icon')}
                        icon={<i className='fal fa-repeat'></i>}
                        activeIcon={<i className='fal fa-repeat'></i>}
                        onClick = {handleLoop}
                    /> 
                }
                
            </div>
            <div
                className={cx(
                    'control-time',
                    'flex grow justify-center items-center'
                )}
            >
                {!LoadingNumber ? (
                    <div className={cx('current-time')}>00:00</div>
                ) : (
                    <div className={cx('current-time')}>
                        {Math.floor(`${LoadingNumber}` / 60) < 10
                            ? '0' + Math.floor(`${LoadingNumber}` / 60)
                            : Math.floor(`${LoadingNumber}` / 60)}
                        :
                        {`${LoadingNumber}` % 60 < 10
                            ? '0' + (`${LoadingNumber}` % 60)
                            : `${LoadingNumber}` % 60}
                    </div>
                )}

                {playSong && (
                    <audio
                        src={playSong['128']}
                        type='audio'
                        autoPlay={isPlay}
                        ref={musicRef}
                        loop = {isLoop}
                        onTimeUpdate={onPlaying}
                        onEnded={handleOnEnd}
                    />
                )}
                <input
                    id='progress'
                    className={cx('progress')}
                    style={{
                        background: `linear-gradient(to right, #ffffff 0%, #ffffff ${PlaySong}%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)`,
                    }}
                    type='range'
                    value={PlaySong}
                    step='1'
                    min='0'
                    max='100'
                    onChange={onChangeValue}
                ></input>

                {!song.duration ? (
                    <div className={cx('total-time')}>00:00</div>
                ) : (
                    <div className={cx('total-time')}>
                        {Math.floor(`${song.duration}` / 60) < 10
                            ? '0' + Math.floor(`${song.duration}` / 60)
                            : Math.floor(`${song.duration}` / 60)}
                        :
                        {`${song.duration}` % 60 < 10
                            ? '0' + (`${song.duration}` % 60)
                            : `${song.duration}` % 60}
                    </div>
                )}
            </div>
        </div>
    );
}

export default PlayerBar;
