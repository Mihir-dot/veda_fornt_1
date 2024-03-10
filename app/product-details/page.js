'use client'
import QuantityInput from "@/components/elements/QuantityInput"
import Layout from "@/components/layout/Layout"
import TestimonialSlider4 from "@/components/slider/TestimonialSlider4"
import Link from "next/link"
import { useState } from "react"
import 'swiper/css/thumbs'
import { Autoplay, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function Home() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const swiperOptions1 = {
        modules: [Autoplay, Navigation, Thumbs],
        onSwiper: setThumbsSwiper,
        // freeMode: true,
        // preloadImages: false,
        loop: true,
        slidesPerView: 3,
        speed: 1400,
        spaceBetween: 0,
        direction: "vertical",
        breakpoints: {
            300: {
                slidesPerView: 3,
            },
        }
    }

    const swiperOptions2 = {
        loop: true,
        speed: 1400,
        spaceBetween: 0,
        effect: "fade",
    }
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <div>
                    <section className="shop-details p_relative" style={{marginTop:"-5%"}}>
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-9 col-md-12 col-sm-12 content-side">
                                    <div className="shop-details-content mb_100">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                                <figure className="image-box">
                                                    <Link href="assets/images/shop/shop-10.png" className="lightbox-image" data-fancybox="gallery">
                                                        <img src="assets/images/shop/shop-10.png" alt="" />
                                                    </Link>
                                                </figure>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                                <div className="content-box ml_50">
                                                    <h2>Armchair Black Leather</h2>
                                                    <div className="customer-rating clearfix">
                                                        <ul className="rating pull-left">
                                                            <li><i className="icon-17"></i></li>
                                                            <li><i className="icon-17"></i></li>
                                                            <li><i className="icon-17"></i></li>
                                                            <li><i className="icon-17"></i></li>
                                                            <li><i className="icon-17"></i></li>
                                                        </ul>
                                                        <div className="review pull-left">
                                                            <Link href="/product-details">( 2 Reviews )</Link>
                                                        </div>
                                                    </div>
                                                    <span className="price">$19.20</span>
                                                    <div className="text">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper sagittis dolor aliquet quam feugiat nisi a ultrices feugiat facilisi turpis.</p>
                                                    </div>
                                                    <div className="addto-cart-box p_relative d_block mb_25">
                                                        <div className="cart-wrapper">
                                                            <ul className="clearfix">
                                                                <li className="item-quantity p_relative d_block float_left mr_10">
                                                                <div className="qity">
                                                                    <QuantityInput />
                                                                </div>
                                                                </li>
                                                                <li className="p_relative d_block float_left mr_10">
                                                                    <button type="button" className="theme-btn-one">
                                                                        Add To Cart
                                                                    </button>
                                                                </li>
                                                                <li className="like-box p_relative d_block float_left">
                                                                    <Link href="/product-details" className="d_iblock p_relative fs_20 lh_55 w_50 h_50 centred b_radius_50">
                                                                        <i className="icon-36"></i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="other-option">
                                                        <ul className="list">
                                                            <li><span>Category: </span> <Link href="/shop"> Furniture</Link>, <Link href="/shop">Chair</Link></li>
                                                            <li><span>Tags:</span> <Link href="/shop">Car</Link>, <Link href="/shop">Charging</Link>, <Link href="/shop">Electric</Link>, <Link href="/shop">Solar</Link>, <Link href="/shop">Gas</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}
