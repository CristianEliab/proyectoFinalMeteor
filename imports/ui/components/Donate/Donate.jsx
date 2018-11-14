import React, { Component } from 'react'

export class Donate extends Component {
    render() {
        return (
            <div>
                <section className="donate-area relative section-gap" id="donate">
                    <div className="overlay overlay-bg"></div>
                    <div className="container">
                        <div className="row d-flex justify-content-end">
                            <div className="col-lg-6 col-sm-12 pb-80 header-text">
                                <h1>Donate Now</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br></br> tempor incididunt ut labore  et dolore magna aliqua.
							</p>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 contact-left">
                                <div className="single-info">
                                    <h4>Divided Evenly</h4>
                                    <p>
                                        inappropriate behavior is often laughed off as “boys will be boys,” <br></br> women face higher conduct women face higher conduct.
								</p>
                                </div>
                                <div className="single-info">
                                    <h4>Transperancy All the Way</h4>
                                    <p>
                                        inappropriate behavior is often laughed off as “boys will be boys,” <br></br> women face higher conduct women face higher conduct.
								</p>
                                </div>
                                <div className="single-info">
                                    <h4>Trustworthy</h4>
                                    <p>
                                        inappropriate behavior is often laughed off as “boys will be boys,”<br></br> women face higher conduct women face higher conduct.
								</p>
                                </div>
                            </div>
                            <div className="col-lg-6 contact-right">
                                <form className="booking-form" id="myForm" action="donate.php">
                                    <div className="row">
                                        <div className="col-lg-12 d-flex flex-column">
                                            <select name="type" className="app-select form-control" required>
                                                <option data-display="Project you want to donate">Project you want to donate</option>
                                                <option value="1">Donate type 1</option>
                                                <option value="2">Donate type 2</option>
                                                <option value="3">Donate type 3</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-6 d-flex flex-column">
                                            <input name="fname" placeholder="Enter your name" className="form-control mt-20" required="" type="text" required />
                                        </div>
                                        <div className="col-lg-6 d-flex flex-column">
                                            <input name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" className="form-control mt-20" required="" type="email" />
                                        </div>
                                        <div className="col-lg-12 d-flex flex-column">
                                            <input name="amound" placeholder="Donation amount (USD)" className="form-control mt-20" required="" type="text" />

                                            <textarea className="form-control mt-20" name="message" placeholder="Messege" required=""></textarea>
                                        </div>

                                        <div className="col-lg-12 d-flex justify-content-end send-btn">
                                            <button className="submit-btn primary-btn mt-20 text-uppercase ">donate<span className="lnr lnr-arrow-right"></span></button>
                                        </div>

                                        <div className="alert-msg"></div>
                                    </div>
                                </form>
                                <p className="payment-method">
                                    We Accept :   <img src="./payment.png" alt="" />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Donate
