import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import classNames from 'classnames/bind';
import styles from './Loading.module.scss';
const cx = classNames.bind(styles);

const Loading = () => {
    return (
        <SkeletonTheme
            baseColor='#444444'
            highlightColor='#5b5b5b'
            className={cx('skeleton-theme')}
        >
            <div className={cx('skeleton')}>
                <div className={cx('skeleton-icon')}>
                    <div className={cx('margin')}>
                        <Skeleton circle count={1} height='130px' width='130px' />
                        <div className={cx('content')}>
                            <Skeleton count={1} height='16px' width='50px' />
                            <Skeleton count={1} height='16px' width='90px' />                            
                        </div>
                    </div>
                    <div className={cx('margin')}>
                        <Skeleton circle count={1} height='130px' width='130px' />
                        <div className={cx('content')}>
                            <Skeleton count={1} height='16px' width='50px' />
                            <Skeleton count={1} height='16px' width='90px' />                            
                        </div>
                    </div>
                    <div className={cx('margin')}>
                        <Skeleton circle count={1} height='130px' width='130px' />
                        <div className={cx('content')}>
                            <Skeleton count={1} height='16px' width='50px' />
                            <Skeleton count={1} height='16px' width='90px' />                            
                        </div>
                    </div>
                    <div className={cx('margin')}>
                        <Skeleton circle count={1} height='130px' width='130px' />
                        <div className={cx('content')}>
                            <Skeleton count={1} height='16px' width='50px' />
                            <Skeleton count={1} height='16px' width='90px' />                            
                        </div>
                    </div>
                    <div className={cx('margin')}>
                        <Skeleton circle count={1} height='130px' width='130px' />
                        <div className={cx('content')}>
                            <Skeleton count={1} height='16px' width='50px' />
                            <Skeleton count={1} height='16px' width='90px' />                            
                        </div>
                    </div>
                    <div className={cx('margin')}>
                        <Skeleton circle count={1} height='130px' width='130px' />
                        <div className={cx('content')}>
                            <Skeleton count={1} height='16px' width='50px' />
                            <Skeleton count={1} height='16px' width='90px' />                            
                        </div>
                    </div>
                    <div className={cx('margin')}>
                        <Skeleton circle count={1} height='130px' width='130px' />
                        <div className={cx('content')}>
                            <Skeleton count={1} height='16px' width='50px' />
                            <Skeleton count={1} height='16px' width='90px' />                            
                        </div>
                    </div> 
                </div>

                <div className={cx('skeleton-icon-content')}>
                    <div className={cx('margin_4')}>
                        <Skeleton count={1} height='130px' width='280px' />
                    </div>
                    <div className={cx('margin_4')}>
                        <Skeleton count={1} height='130px' width='470px' />
                    </div>
                    <div className={cx('margin_4')}>
                        <Skeleton count={1} height='130px' width='280px' />
                    </div>
                </div>

                <div className={cx('skeleton-icon-content')}>
                    <div className={cx('margin_4')}>
                        <Skeleton count={1} height='130px' width='1046px' />
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
};

export default Loading;
