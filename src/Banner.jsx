import React from 'react'
import './App.css'

function Banner() {
    return (
        <>
            <section id='banner'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner_text_part">
                                <h1>Your Favourite Food
                                    Delivered Hot &
                                    Fresh</h1>
                                <p>Healthy switcher chefs do all the prep work, like
                                    peeding, chopping & marinating, so you can cook
                                    a fresh food.</p>
                                    <button>Order Now<i class="fa-solid fa-arrow-right-long icon"></i></button>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div className="banner_img_part">
                                <img src="/public/photos/Banner Background.png" alt="" />


                            </div>
                            <div className="food">
                                <img src="/public/photos/banner img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
