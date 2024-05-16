import React from 'react'

function Work() {
    return (
        <>
            <section id='work'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="work-heading">
                                <h3>Work</h3>
                                <h2>How It Works</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt
                                    magna non et elit. Dolor  turpis molestie dui
                                    magnis facilisis at fringilla quam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="workItem">
                                <img src="/public/photos/work one.png" alt="" />
                                <h3>Pick Meals</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="workItem workflex">
                                <img src="/public/photos/work two.png" alt="" />
                                <h3>Choose How Often</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="workItem">
                                <img src="/public/photos/work three.png" alt="" />
                                <h3>Fast Deliveries</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Work
