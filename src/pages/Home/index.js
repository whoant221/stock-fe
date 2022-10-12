import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Chart from './Chart';
import styles from './Home.module.scss';
import Footer from '../../layouts/components/Footer'
import { Link } from 'react-router-dom';
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
                                <h2>Công ty DIGITEX Pte Ltd, trụ sở, cơ quan, đội ngũ</h2>
                                <p>Bitbank cung cấp dịch vụ giao dịch tiền điện tử mã hóa (cryptocurrency), khởi đầu với đồng Ethereum và Bitcoin. Không những là nguồn mua bán Ethereum, Bitcoin mà cũng là nơi kí thác các giao dịch mua bán BTC, ETH của người dùng một cách minh bạch và chính xác .</p>
                                <p>Kết nối dễ dàng qua: <Link to={'https://t.me/+R8ykfQJCv_o4ZDE1'}>https://t.me/+R8ykfQJCv_o4ZDE1</Link></p>
                                <p>Để Bitbank có thể phục vụ bạn tốt hơn nữa nhé !</p>
                                <a href="#" className="btn btn-main">Xem sàn</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div id="myDiv" className="bitcoin-graph">
                                <Chart style={{height: 400}}/>
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
                                    <img src={"https://cryptologos.cc/logos/thumbs/shiba-inu.png?v=022"} alt=""></img>
                                </div>
                                <h3>{'Dễ dàng và an toàn'}</h3>
                                <p>Bảo mật cao với 2FA cho cả ví mobile và web. Lưu trữ BTC ETH USDT BNB XRP bằng ví lạnh và bảo mật đa chữ kí với đa dịch vụ, kể cả BitGo .</p>
                            </div>
                        </div>
                
                        <div className="col-md-4 col-sm-6 col-xs-12" >
                            <div className="service-block text-center">
                                <div className="service-icon text-center">
                                    <img src="https://cryptologos.cc/logos/thumbs/monolith.png?v=022" alt=""></img>
                                </div>
                                <h3>Trao đổi tức thì</h3>
                                <p>Giao dịch mọi lúc mọi nơi với ví mobile, chúng tôi là sàn giao dịch đầu tiên ở Việt Nam cho phép tạo ví BTC ETH USDT BNB XRP trên điện thoại .</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12 mx-auto"  >
                            <div className="service-block color-bg text-center">
                                <div className="service-icon text-center">
                                    <img src="https://cryptologos.cc/logos/thumbs/waykichain.png?v=022" alt=""></img>
                                </div>
                                <h3>Mạng mạnh</h3>
                                <p>Hỗ trợ online nhanh nhất Việt Nam. Đảm bảo mọi vấn đề khó nhằn nhất được giải quyết tối đa 1 ngày làm việc .</p>
                            </div>
                        </div>
                
                        <div className="col-md-4 col-sm-6 col-xs-12" >
                            <div className="service-block color-bg text-center">
                                <div className="service-icon text-center">
                                    <img src="https://cryptologos.cc/logos/thumbs/chimpion.png?v=022" alt=""></img>
                                </div>
                                <h3>{'Nhiều ưu đãi'}</h3>
                                <p>Miễn phí hoàn toàn nạp VND BTC ETH USDT BNB để giao dịch. Chương trình khuyến mãi đến 100% phí giao dịch .</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12" >
                            <div className="service-block color-bg text-center">
                                <div className="service-icon text-center">
                                    <img src="https://cryptologos.cc/logos/thumbs/apecoin-ape.png?v=022" alt=""></img>
                                </div>
                                <h3>{'Chi phí thấp'}</h3>
                                <p>Phí mua bán Bitcoin Ethereum USDT của chúng tôi rất thấp, nhờ đó bạn có thể mua và bán BTC ETH BNB USDT XRP với giá tốt nhất hiện tại.</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12" >
                            <div className="service-block color-bg text-center">
                                <div className="service-icon text-center">
                                    <img src="https://cryptologos.cc/logos/thumbs/convex-finance.png?v=022" alt=""></img>
                                </div>
                                <h3>{'Uy tín'}</h3>
                                <p>Giá cả Bitcoin Ethereum USDT rõ ràng minh bạch, bạn tự quyết định chính xác giá mình muốn mua hay bán .</p>
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
                        <h4>Bitbank flow</h4>
                        <h2>Làm thế nào nó hoạt động</h2>
                        <span className="border"></span>
                        <p>Giao dịch mua bán Bitcoin, Ethereum tại Việt Nam nhanh chóng, khớp lệnh ngay lập tức với đúng mức giá bạn mong muốn .</p>
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
                            <h2>Mở tài khoản miễn phí và bắt đầu giao dịch ngay!</h2>
                            <p>Fiahub chính thức ra mắt phiên bản Bitbank Pro” trên Mobile App, <br></br> Sau khi nhận được phản hồi tích cực từ Quý khách hàng với “Phiên bản web”.</p>
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
                                <h2>Lấy Tiền Nhanh</h2>
                                <span className="border"></span>
                                <p>Rút tiền về VCB, Techcombank trong 30s. Ví VNT đảm bảo cho mọi giao dịch nhanh chóng và tiện lợi. Bạn có thể rút về tài khoản ngân hàng nhanh chóng bất kì lúc nào.</p>
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
                </div> 
            </section>

            <Footer/>
        </>

    );
}

export default Home;
