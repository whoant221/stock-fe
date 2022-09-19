import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import Icon from '~/components/Icon';
import styles from './PlayerBar.module.scss';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

function PlayerBar({ playSong }) {
    const song = useSelector((state) => state.playMusicReducer);

    // const [valueInput, setvalueInput] = useState(0);
    const [PlaySong, setplaySong] = useState(0);
    const [LoadingNumber, setloadingNumber] = useState();
    const [play, setPlay] = useState(true);
    const musicRef = useRef();


    const onPlaying = () => {
        const duration = musicRef.current.duration;
        const ct = musicRef.current.currentTime;
        setplaySong(ct/duration * 100);
        setloadingNumber(parseInt(ct));
    }
 
    // const onChangeValue = (e) => {
    //     setvalueInput(parseInt(e.target.value));
    // };

    const handlePlayMusic = () => {
        if (play) {
            setPlay(false);
            musicRef.current.pause();
        } else {
            setPlay(true);
            musicRef.current.play(); 
        }
    };
    return (
        <div className={cx('wrapper', 'grow')}>
            <div className={cx('control-btns', 'flex justify-center grow')}>
                <Icon
                    s18
                    className={cx('icon')}
                    icon={<i className='fal fa-random'></i>}
                    activeIcon={<i className='fal fa-random'></i>}
                />
                <Icon
                    s18
                    className={cx('icon')}
                    icon={<i className='fal fa-step-backward'></i>}
                />
                {play ? (
                    <Icon
                        s14
                        activeNoColor
                        isActive
                        className={cx('icon', 'icon-play')}
                        icon={<i className='fas fa-play'></i>}
                        activeIcon={<i className='fas fa-pause'></i>}
                        onClick={handlePlayMusic}
                    />
                ) : (
                    <Icon
                        s14
                        activeNoColor
                        isActive
                        className={cx('icon', 'icon-play')}
                        icon={<i className='fas fa-play'></i>}
                        activeIcon={<i className='fas fa-play'></i>}
                        onClick={handlePlayMusic}
                    />
                )}

                <Icon
                    s18
                    className={cx('icon')}
                    icon={<i className='fal fa-step-forward'></i>}
                />
                <Icon
                    s18
                    className={cx('icon')}
                    icon={<i className='fal fa-repeat'></i>}
                    activeIcon={<i className='fal fa-repeat'></i>}
                />
            </div>
            <div
                className={cx(
                    'control-time',
                    'flex grow justify-center items-center'
                )}
            >
                {!LoadingNumber ? <div className={cx('current-time')}>00:00</div> :
                    <div className={cx('current-time')}>
                        {Math.floor(`${LoadingNumber}` / 60) < 10
                            ? '0' + Math.floor(`${LoadingNumber}` / 60)
                            : Math.floor(`${LoadingNumber}` / 60)}
                        :
                        {`${LoadingNumber}` % 60 < 10
                            ? '0' + (`${LoadingNumber}` % 60)
                            : `${LoadingNumber}` % 60}
                    </div>
                }

                {playSong && (
                    <audio
                        src={playSong['128']}
                        type='audio'
                        autoPlay
                        ref={musicRef}
                        onTimeUpdate={onPlaying}
                    />
                )}
                <input
                    id='progress'
                    className={cx('progress')}
                    style={{
                        background: `linear-gradient(to right, #ffffff 0%, #ffffff ${(PlaySong)}%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)`,
                    }}
                    type='range'
                    value={PlaySong}
                    step='1'
                    min='0'
                    max='100'
                    // onChange={onChangeValue}
                ></input>

                {!song.duration ? <div className={cx('total-time')}>00:00</div> :
                    <div className={cx('total-time')}>
                        {Math.floor(`${song.duration}` / 60) < 10
                            ? '0' + Math.floor(`${song.duration}` / 60)
                            : Math.floor(`${song.duration}` / 60)}
                        :
                        {`${song.duration}` % 60 < 10
                            ? '0' + (`${song.duration}` % 60)
                            : `${song.duration}` % 60}
                    </div>
                }
                
                
            </div>
        </div>
    );
}

export default PlayerBar;
