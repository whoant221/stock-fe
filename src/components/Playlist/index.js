import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";

import styles from './Playlist.module.scss';
import Icon from "~/components/Icon";
import Image from '~/components/Image'
import images from "~/images";

const cx = classNames.bind(styles)

function Playlist({
    className,
    name,
    describe,
    link,
    image,
    iconLeft,
    titleIconLeft
}) {

    return ( 
        <div className={cx('wrapper', {[className]: className})}>
            <div className={cx('card')}>
                <a className={cx('card-link')} href={link} title={name}>
                    <div className={cx('over-lay')}></div>
                    <Image 
                        className={cx('card-image')}
                        src={image}
                        alt={name}
                        defaultAvt={images.defaultAvataAlbum}
                    />   
                    <div className={cx('card-actions')}>
                        <Tippy content={titleIconLeft}>
                            <div>
                                <Icon icon={iconLeft} />
                            </div>
                        </Tippy>
                        <Icon 
                        s18
                            className={cx('icon-play')}
                            icon={<i className="fas fa-play"></i>}
                        />
                        <Tippy content='Khác'>
                            <div>
                                <Icon icon={<i className="far fa-ellipsis-h"></i>} />
                            </div>
                        </Tippy>
                    </div>
                </a>        
            </div>
            <div className={cx('content')}>
                <a href={link} title={name} className={cx('title')}>{name}</a>
                <p className={cx('subtitle')}>{describe}</p>
            </div>
        </div>
     );
}

export default Playlist;