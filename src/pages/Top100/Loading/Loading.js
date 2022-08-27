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
            <div className={cx('wrapper')}>
                <div className={cx('banner-top100')}>
                    <div className={cx('bg-img')}></div>
                    <div className={cx('bg-blur')}></div>
                    <div className={cx('bg-blur-2')}></div>
                    <Skeleton className={cx('banner-svg')} count={1} height='220px' width='100%' />
                </div>
                <div className={cx('section')}>
                    <Skeleton className={cx('banner-svg')} count={1} height='30px' width='20%' />

                    <div className={cx('list-playlist')}>   
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>                       
                    </div>
                        
                </div>

                <div className={cx('section')}>
                    <Skeleton className={cx('banner-svg')} count={1} height='30px' width='20%' />

                    <div className={cx('list-playlist')}>   
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>                       
                    </div>

                    <div className={cx('list-playlist')}>   
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>                       
                    </div>

                    <div className={cx('list-playlist')}>   
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>                      
                    </div>
                        
                </div>

                <div className={cx('section')}>
                    <Skeleton className={cx('banner-svg')} count={1} height='30px' width='20%' />

                    <div className={cx('list-playlist')}>   
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>                       
                    </div>
                        
                </div>

                <div className={cx('section')}>
                    <Skeleton className={cx('banner-svg')} count={1} height='30px' width='20%' />

                    <div className={cx('list-playlist')}>   
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>                       
                    </div>

                    <div className={cx('list-playlist')}>   
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>                       
                    </div>

                    <div className={cx('list-playlist')}>   
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>                    
                    </div>
                        
                </div>

                <div className={cx('section')}>
                    <Skeleton className={cx('banner-svg')} count={1} height='30px' width='20%' />

                    <div className={cx('list-playlist')}>   
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>                       
                    </div>

                    <div className={cx('list-playlist')}>   
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>
                        <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>   
                            <Skeleton  count={1} height='191px' width='191px' />        
                            <Skeleton className={cx('banner-svg')} count={1} height='20px' width='191px' />
                            <Skeleton className={cx('banner-svg')} count={1} height='16px' width='160px' />
                        </div>                      
                    </div>
                        
                </div>

            </div>
        </SkeletonTheme>
    );
};

export default Loading;
