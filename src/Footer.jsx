import React from 'react'

function Footer() {
    return (
        <>
            <section id='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer_item">
                                <div className="footer_logo">
                                    <h3>FOODIE</h3>

                                </div>
                                <ul>
                                    <li><i class="fa-brands fa-twitter"></i></li>
                                    <li><i class="fa-brands fa-linkedin"></i></li>
                                    <li><i class="fa-brands fa-youtube"></i></li>
                                    <li><i class="fa-brands fa-facebook"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer-tecxt">
                                <ul>
                                    <li>Quality</li>
                                    <li>Help</li>
                                    <li>Share</li>
                                    <li>Carrers</li>
                                    <li>Work</li>
                                    <li>Testimonials</li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer-tecxt">
                                <ul>
                                    <li>244-5333-7783</li>
                                    <li>hello@food.com</li>
                                    <li>press@food.com</li>
                                    <li>contact@food.com</li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer-tecxt">
                                <ul>
                                    <li>Terms & Conditions</li>
                                    <li>Privacy Policy</li>

                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer
