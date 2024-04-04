import Link from "next/link";

export default function Footer1() {
    return (
        <>
            <footer className="main-footer">
                <div className="widget-section">
                    <div className="pattern-layer">
                        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-20.png)' }}></div>
                        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-21.png)' }}></div>
                    </div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div className="logo-widget footer-widget">
                                    <figure className="footer-logo">
                                        <Link href="/">
                                            <img src="assets/images/footer-logo.png" alt="" />
                                        </Link>
                                    </figure>
                                    <div className="text">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elitsollicit udin netus quis ornare. Massa pharetra in nec sed nunc.
                                        </p>
                                        <p>nisl viverra massa imperdiet. Dui mattis quis congue fames.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 footer-column">
                                <div className="links-widget footer-widget ml_50">
                                    <div className="widget-title">
                                        <h3>Disability Support Service</h3>
                                    </div>
                                    <div className="widget-content">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul className="links-list clearfix">
                                                    <li><Link href="/about-us">About Us</Link></li>
                                                    <li><Link href="/career">Career</Link></li>
                                                    <li><Link href="/contact">Contact Us</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="links-list clearfix">
                                                    <li><Link href="/services">Services</Link></li>
                                                    <li><Link href="/podcast">Podcast</Link></li>
                                                    <li><Link href="/faq">Faq</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-content">
                                    <div className="row mt-5">
                                        <div className="col-2">
                                            <Link href="https://www.facebook.com" aria-label="Read more about it" style={{ display: 'inline-block', width: '40px', height: '40px', lineHeight: '40px', borderRadius: '50%', textAlign: 'center', color: '#000', backgroundColor: '#fff', border: '1px solid gray', transition: 'all 0.3s ease', margin: '0 auto' }}>
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                        </div>
                                        <div className="col-2 text-center">
                                        <Link href="https://twitter.com/"  aria-label="Read more about it" style={{ display: 'inline-block', width: '40px', height: '40px', lineHeight: '40px', borderRadius: '50%', textAlign: 'center', color: '#000', background: '#fff', border: '1px solid gray', transition: 'all 0.3s ease', margin: '0 auto' }}>
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                    </div>
                                        <div className="col-2 text-center">
                                            <Link href="https://www.linkedin.com/"  aria-label="Read more about it" style={{ display: 'inline-block', width: '40px', height: '40px', lineHeight: '40px', borderRadius: '50%', textAlign: 'center', color: '#000', backgroundColor: '#fff', border: '1px solid gray', transition: 'all 0.3s ease', margin: '0 auto' }}>
                                                <i className="fab fa-linkedin-in"></i>
                                            </Link>
                                        </div>
                                        {/*<div className="col-2 text-center">
                                            <Link href="#" style={{ display: 'inline-block', width: '40px', height: '40px', lineHeight: '40px', borderRadius: '50%', textAlign: 'center', color: '#000', backgroundColor: '#fff', border: '1px solid gray', transition: 'all 0.3s ease', margin: '0 auto' }}>
                                                <i className="fab fa-instagram"></i>
                                            </Link>
    </div>*/}
                                        <div className="col-2 text-center">
                                            <Link href="https://www.youtube.com/"  aria-label="Read more about it" style={{ display: 'inline-block', width: '40px', height: '40px', lineHeight: '40px', borderRadius: '50%', textAlign: 'center', color: '#000', background: '#fff', border: '1px solid gray', transition: 'all 0.3s ease', margin: '0 auto' }}>
                                                <i className="fab fa-youtube"></i>
                                            </Link>
                                        </div>
                                       
                                    </div>
                                </div>
                                
                                
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 footer-column">
                                <div className="contact-widget footer-widget">
                                    <div className="widget-title">
                                        <h3>Contact</h3>
                                    </div>
                                    <div className="widget-content">
                                        <p>Tincidunt neque pretium lectus donec risus.</p>
                                        <ul className="info-list clearfix">
                                            <li><i className="icon-23"></i>New Hyde Park, NY 11040</li>
                                            <li><i className="icon-3"></i><Link href="mailto:example@info.com">example@info.com</Link></li>
                                            <li><i className="icon-2"></i><Link href="tel:912136660027">333 666 0000</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom centred">
                    <div className="auto-container">
                        <div className="copyright">
                            <p>
                                Copyright {new Date().getFullYear()} by <Link href="#">vida</Link> theme All Right Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
