import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Chart from './Chart';
import styles from './Home.module.scss';
import Footer from '../../layouts/components/Footer'
const cx = classNames.bind(styles);

function Home() {
    useEffect(() => {
        document.title = 'Bitbank | Giao dịch mua bán Bitcoin, Ethereum tại Việt Nam nhanh chóng';
    }, []);

    return (
        <>
            <section className={cx("hero-area", "content")}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center mb-4 mb-lg-0">
                            <div className="video-player">
                                <img className="img-fluid rounded" 
                                src={'https://images.pexels.com/photos/5980743/pexels-photo-5980743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt=""></img>
                                <a className="play-icon">
                                    <i className="fab fa-bitcoin" data-video="https://www.youtube.com/embed/g3-VxLQO7do?autoplay=1"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block">
                                <h2>Sàn giao dịch lớn nhất Huflit, mua bán Bitcoin Ethereum uy tín, dễ dàng, giá tốt</h2>
                                <p>Giao dịch mua bán Bitcoin, Ethereum tại Việt Nam nhanh chóng, khớp lệnh ngay lập tức với đúng mức giá bạn mong muốn, được thực hiện dựa trên hệ quản trị PostgreSql.</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a data-scroll href="#services" className="btn btn-main">Giao dịch ngay</a>		
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>	

            <section className="counter section-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-3">
                            <div className="counters-item">
                                <span>$50B+</span>
                                <p>Bitcoin Served</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-3">
                            <div className="counters-item">
                                <span>10M+</span>
                                <p>Người Dùng</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-3">
                            <div className="counters-item">
                                <span>68</span>
                                <p>Quốc Gia Hỗ Trợ</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-3">
                            <div className="counters-item kill-border">
                                <span>10B</span>
                                <p>Treades Hoạt Động</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-2 section bg-gray" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 align-self-center mb-4 mb-md-0">
                            <div className="align-self-center">
                                <h2>A New Kind of Digital Currency to change the world what we think</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae deleniti ipsa labore necessitatibus culpa veritatis quo accusantium, neque enim ea ad eaque iure, quas tempore velit, quibusdam dolor illo! Explicabo.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quisquam maiores iste soluta, nihil dolorem?</p>
                                <a href="#" className="btn btn-main">Xem sàn</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div id="myDiv" className="bitcoin-graph">
                                <Chart/>
                            </div>
                        </div> 		
                    </div>
                </div>
            </section>

            <section className="services section-xs"  id="services">
                <div className="container">
                    <div className="row">
                
                        <div className="col-md-4 col-sm-6 col-xs-12" >
                            <div className="service-block color-bg text-center">
                                <div className="service-icon text-center">
                                    <img src="images/icons/bitcoin-safety-shield.png" alt=""></img>
                                </div>
                                <h3>{'Easy & Secure'}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                            </div>
                        </div>
                
                        <div className="col-md-4 col-sm-6 col-xs-12" >
                            <div className="service-block text-center">
                                <div className="service-icon text-center">
                                    <img src="images/icons/bitcoin-exchange.png" alt=""></img>
                                </div>
                                <h3>Instant Exchange</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12 mx-auto"  >
                            <div className="service-block color-bg text-center">
                                <div className="service-icon text-center">
                                    <img src="images/icons/bitcoin-network.png" alt=""></img>
                                </div>
                                <h3>Strong Network</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                            </div>
                        </div>
                
                        <div className="col-md-4 col-sm-6 col-xs-12" >
                            <div className="service-block color-bg text-center">
                                <div className="service-icon text-center">
                                    <img src="images/icons/bitcoin-safety-shield.png" alt=""></img>
                                </div>
                                <h3>{'Easy & Secure'}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12" >
                            <div className="service-block color-bg text-center">
                                <div className="service-icon text-center">
                                    <img src="images/icons/bitcoin-safety-shield.png" alt=""></img>
                                </div>
                                <h3>{'Easy & Secure'}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12" >
                            <div className="service-block color-bg text-center">
                                <div className="service-icon text-center">
                                    <img src="images/icons/bitcoin-safety-shield.png" alt=""></img>
                                </div>
                                <h3>{'Easy & Secure'}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                            </div>
                        </div>
                
                    </div> 		
                </div>   	
            </section>

            <section className="service-2 section bg-gray">
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <div className="title text-center">
                        <h4>Bitcoin flow</h4>
                        <h2>How It Works</h2>
                        <span className="border"></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque, obcaecati atque sit!</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4 p-0">
                        <div className="service-item text-center">
                            <span className="count">1.</span>
                            <h4>XÁC THỰC</h4>
                            <p>{'Bạn chỉ cần xác thực Email & Số điện thoại của bạn.'}</p>
                        </div>
                    </div>
                    <div className="col-md-4 p-0">
                        <div className="service-item text-center">
                        <span className="count">2.</span>
                        <h4>MUA BÁN VNT</h4>
                        <p>VNT là đơn vị dùng để giao dịch trên hệ thông * VNT là đơn vị dùng để thực hiện giao dịch mua bán ETH trên hệ thống Fiahub. VNT là viết tắt của VNTCoin, là một đơn vị Token ERC-20 trên Ethereum blockchain được chính DIGITEX Pte Ltd Fiahub phát hành.</p>
                        </div>
                    </div>
                    <div className="col-md-4 p-0">
                        <div className="service-item text-center">
                        <span className="count">3.</span>
                        <h4>MUA BITCOIN, ETHEREUM</h4>
                        <p>Mua BTC hoặc mua ETH bằng VNT. BTC ETH sẽ được lưu trữ vào ví trên hệ thống BTC ETH có thể được gửi rút đến bất kỳ ví nào khác bên ngoài.</p>
                        </div>
                    </div>
                    </div>    
                </div>    
            </section>

            <section className="call-to-action section-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Open account for free and start trading Bitcoins now!</h2>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin bibendum auctor, <br></br> nisi elit consequat ipsum, nesagittis sem nid elit. Duis sed odio sitain elit.</p>
                            <a href="" className="btn btn-main">Get Started</a>
                        </div>
                    </div> 		
                </div>   	
            </section> 

            <section className="pricing-table section" id="pricing">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="title text-center">
                                <h4>Easy Pricing</h4>
                                <h2>Pricing.</h2>
                                <span className="border"></span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque,
                                    obcaecati atque sit!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <ul className="nav nav-pills mb-6 pricing-tab justify-content-center" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                                        aria-controls="pills-home" aria-selected="true">Buy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                                        aria-controls="pills-profile" aria-selected="false">Sell</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-6 col-xs-12">
                                            <div className="pricing-item">
                                                <h3>Get 0.112 ETH</h3>
                                                <div className="pricing-body">
                                                    <div className="price">
                                                        <span>€803</span>
                                                        <span className="sup">95</span>
                                                    </div>
                                                    <div className="progress" data-percent="45%">
                                                        <div className="progress-bar"></div>
                                                    </div>
                                                    <p>You get 0.0364727 Bitcoins</p>
                                                    <a className="btn btn-main" href="#">Buy</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
                                            <div className="pricing-item">
                                                <h3>Get 0.112 ETH</h3>
                                                <div className="pricing-body">
                                                    <div className="price">
                                                        <span>€283</span>
                                                        <span className="sup">15</span>
                                                    </div>
                                                    <div className="progress" data-percent="60%">
                                                        <div className="progress-bar"></div>
                                                    </div>
                                                    <p>You get 0.0364727 Bitcoins</p>
                                                    <a className="btn btn-main" href="#">Buy</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
                                            <div className="pricing-item">
                                                <h3>Get 0.112 ETH</h3>
                                                <div className="pricing-body">
                                                    <div className="price">
                                                        <span>€122</span>
                                                        <span className="sup">00</span>
                                                    </div>
                                                    <div className="progress" data-percent="75%">
                                                        <div className="progress-bar"></div>
                                                    </div>
                                                    <p>You get 0.0364727 Bitcoins</p>
                                                    <a className="btn btn-main" href="#">Buy</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-6 col-xs-12">
                                            <div className="pricing-item">
                                                <h3>Get 0.112 ETH</h3>
                                                <div className="pricing-body">
                                                    <div className="price">
                                                        <span>€803</span>
                                                        <span className="sup">95</span>
                                                    </div>
                                                    <div className="progress" data-percent="45%">
                                                        <div className="progress-bar"></div>
                                                    </div>
                                                    <p>You get 0.0364727 Bitcoins</p>
                                                    <a className="btn btn-main" href="#">Sell</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
                                            <div className="pricing-item">
                                                <h3>Get 0.112 ETH</h3>
                                                <div className="pricing-body">
                                                    <div className="price">
                                                        <span>€283</span>
                                                        <span className="sup">15</span>
                                                    </div>
                                                    <div className="progress" data-percent="60%">
                                                        <div className="progress-bar"></div>
                                                    </div>
                                                    <p>You get 0.0364727 Bitcoins</p>
                                                    <a className="btn btn-main" href="#">Sell</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
                                            <div className="pricing-item">
                                                <h3>Get 0.112 ETH</h3>
                                                <div className="pricing-body">
                                                    <div className="price">
                                                        <span>€122</span>
                                                        <span className="sup">00</span>
                                                    </div>
                                                    <div className="progress" data-percent="75%">
                                                        <div className="progress-bar"></div>
                                                    </div>
                                                    <p>You get 0.0364727 Bitcoins</p>
                                                    <a className="btn btn-main" href="#">Sell</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="custom-pricing text-center mt-30">
                                <p>The price will be recalculated in 27 seconds</p>
                                <p><a href="">How is the price calculated ?</a></p>
                            </div>
                        </div>
                    </div>
                    <form className="custom-pricing-form">
                        <h3 className="text-center">You can also input a custom amount:</h3>
                        <div className="form-row justify-content-center">
                            <div className="col-md-4">
                                <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="BTC"></input>
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control mb-2" id="inlineFormInput2" placeholder="USD"></input>
                            </div>
                            <div className="col-md-2">
                                <button type="submit" className="btn btn-main mb-2">Buy</button>
                            </div>
                        </div>
                    </form>
                </div> 
            </section>

            <Footer/>
        </>

    );
}

export default Home;
