import './App.css'

function About() {
    return (
        <>
            <section id='about'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about_img_part">
                                <div className="about_img">
                                    <img src="/public/photos/About Page Banner Image Background Removed 1.png" alt="about food" />
                                </div>
                                <div className="about_bg">
                                <img src="/public/photos/About Section Background.png" alt="about bg" />

                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <div className="about_text_part">
                                <h3>About</h3>
                                <h2>Food Is An Important Part Of A Balanced Diet</h2>
                                <p className='pone'>Lorem ipsum dolor sit amet consectetur. Non tincidunt
                                    magna non et elit. Dolor  turpis molestie dui
                                    magnis facilisis at fringilla quam.</p>
                                <p className='ptwo'>Lorem ipsum dolor sit amet consectetur. Non tincidunt
                                    magna non et elit. Dolor  turpis molestie dui
                                    magnis facilisis at fringilla quam.</p>

                                   <div className="about_btn_part">
                                   <button>Learn More</button>
                                   <a href="#"><i class="fa-solid fa-play play_icon"></i> watch video</a>
                                   </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default About
