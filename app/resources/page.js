
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Resources">
                {/* sidebar-page-container */}
                <section className="sidebar-page-container pt_150 pb_150">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12 sidebar-side">
                                <div className="blog-details-content">
                                    <div className="news-block-one">
                                        <div className="inner-box">
                                            {/* <div className="image-box">
                                                <figure className="image"><img src="assets/images/news/news-13.jpg" alt="" /></figure>
                                                <h2>18<span>APRIL</span></h2>
                                            </div> */}
                                            <div className="lower-content" style={{marginTop:"-10%"}}>
                                                <h2>How to Manage Business’s Online Reputation</h2>
                                                <p>Imperdiet consectetur gravida vel rutrum tempus, mattis sit massa lacus morbi feugiat aliquam sagittis nunc neque sit nec lorem tincidunt arcu nunc accumsan risus felis in ornare Lorem ipsum dolor sit amet, consectetur adipiscing elit. cursus ornare non non massa elit rutrum. eros proin nibh neque interdum accumsan, neque vitae. Tortor etiam sed suspendisse faucibus ac volutpat mattis tortor nec. Orc velit posuere turpis amet. Lectus lacus lectus habitasse amet quam libero, lorem. Volutpat maecenas viverra consequat condimentum diam donec aliquet. Natoque quam vitae leo risus. Eget neque proin in dolor cursus bibendum urna dictum. Aliquam gravida et proin maecenas quis faucibus varius tristique.</p>
                                                <p>Pulvinar dolor aliquet netus ultrices neque, mi non accumsan ullamcorper nunc scelerisque turpis facilisis pretium ut facilisis pharetra, ultrices. Duis imperdiet habitant arcu quis. Nunc euismod odio cursus in diam eget tincidunt mauris.</p>
                                                <h2>COVID-19 resources
</h2>
                                                <p>Imperdiet consectetur gravida vel rutrum tempus, mattis sit massa lacus morbi feugiat aliquam sagittis nunc neque sit nec lorem tincidunt arcu nunc accumsan risus felis in ornare Lorem ipsum dolor sit amet, consectetur adipiscing elit. cursus ornare non non massa elit rutrum. eros proin nibh neque interdum accumsan, neque vitae. Tortor etiam sed suspendisse faucibus ac volutpat mattis tortor nec. Orc velit posuere turpis amet. Lectus lacus lectus habitasse amet quam libero, lorem. Volutpat maecenas viverra consequat condimentum diam donec aliquet. Natoque quam vitae leo risus. Eget neque proin in dolor cursus bibendum urna dictum. Aliquam gravida et proin maecenas quis faucibus varius tristique.</p>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    <div className="author-box">
                                        <figure className="author-thumb"><img src="assets/images/news/author-1.jpg" alt="" /></figure>
                                        <h3>Sandra Bullock</h3>
                                        <span className="designation">About Author</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit amet sit purus tempor dui pharetra consequat nibh elit urna interdum viera quam.</p>
                                    </div>
                                    <div className="comment-form-area">
                                        <h3>Leave A Comments</h3>
                                        <div className="form-inner">
                                            <form action="blog-detailsl" method="post" className="default-form">
                                                <div className="row clearfix"> 
                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="text" name="name" placeholder="Your Name"  />
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="email" name="email" placeholder="Your email"  />
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                        <textarea name="message" placeholder="Type message"></textarea>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                        <div className="message-btn">
                                                            <button type="submit" className="theme-btn-one">Post Comment</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </section>
                {/* sidebar-page-container end */}

            </Layout>
        </>
    )
}
