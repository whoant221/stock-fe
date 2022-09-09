import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useState, useEffect, } from 'react';
import styles from './MusicControl.module.scss' 
import Media from '~/components/Media';
import PlayerBar from '~/layouts/components/PlayerBar';
import Icon from '~/components/Icon';
import SidebarRight from '../SidebarRight';
import { useSelector, useDispatch } from 'react-redux';
import zingStorage from "~/utils/storage";
import * as actions from '~/redux/actions';
const cx = classNames.bind(styles)

function MusicControl() {
    const initValue = zingStorage.getAddValueVolume()
    const dispatch = useDispatch();
    const [toggleBtn, setToggleBtn] = useState(false)
    const [activePlaylist, setActivePlaylist] = useState(false)
    const [valueInput, setvalueInput] = useState(initValue);

    const onChangeValue = (e) => {
        setvalueInput(parseInt(e.target.value));
    };

    useEffect(() => {
        dispatch(actions.addValueVolume(valueInput));
        zingStorage.setAddValueVolume(valueInput)
    }, [valueInput]);

    // useEffect(() => {
    //     value
    // }, []);

    
    function handleTogglePlaylist() {
        if(toggleBtn) {
            setToggleBtn(false)
        } else {
            setToggleBtn(true)
        }
        activePlaylist ? setActivePlaylist(false) : setActivePlaylist(true)
    }

    return ( 
        <div className={cx('wrapper', 'px-5 flex justify-between items-center')}>
            <div className={cx('control-left', 'flex items-center justify-start')}>
                <Media 
                    image='https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp…over/9/7/5/7/9757a70a3932be1bfbba5695e120a4c1.jpg'
                    songName="Nguời âm phủ"
                    singerName="OSAD"
                    largeCd
                    noHover
                />
            </div>
            <PlayerBar/>
            <div className={cx('control-right', 'flex items-center justify-end')}>
                <Tippy content="MV">
                    <div className="icon">
                        <Icon icon={<i className="fal fa-tv-music"></i>}/>
                    </div>
                </Tippy>
                <Tippy content="Xem lời bài hát">
                    <div className="icon">
                        <Icon s14 icon={<i className="fal fa-microphone"></i>}/>
                    </div>
                </Tippy>
                <Tippy content="Chế độ cửa sổ">
                    <div className="icon">
                        <Icon s14 icon={<i className="fal fa-window-restore"></i>}/>
                    </div>
                </Tippy>
                
                
                <div className={cx('control-volume', 'flex items-center')}>
                    <Icon 
                        activeNoColor
                        icon={<i className="fal fa-volume"></i>}    
                        activeIcon={<i className="fal fa-volume-mute"></i>}
                    />
                    <input 
                    id="volume"  
                    style={{ background: `linear-gradient(to right, #ffffff 0%, #ffffff ${valueInput}%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)`}}
                    className={cx("volume")} 
                    type="range" 
                    value={valueInput}
                    step="1" 
                    min="0" 
                    max="100"
                    onChange={onChangeValue}
                    >
                    </input>
                </div>
                <span className={cx('divide', 'block mx-5')}></span>
                
                <Tippy content="Danh sách phát">
                    <div className="icon">
                        <Icon 
                            onClick={handleTogglePlaylist}
                            s14 hover square 
                            activeNoColor={toggleBtn}
                            icon={<i className="fal fa-list-music"></i>}
                            activeIcon={<i className="fal fa-list-music"></i>}
                        />
                    </div>
                </Tippy>
            </div>
            <SidebarRight playlistActive={activePlaylist}/>

        </div>
     );
}

export default MusicControl;