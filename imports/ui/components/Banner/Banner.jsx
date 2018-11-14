import React, { Component } from 'react'

export class Banner extends Component {
    render() {
        return (
            <div>
                <section className="banner-area relative" id="home">
                    <div className="overlay overlay-bg"></div>
                    <div className="container">
                        <div className="row fullscreen align-items-center justify-content-start" >
                            <div className="banner-content col-lg-9 col-md-12">
                                <h1>
                                    Tu Donación <br></br>
                                    es Nuestra Inspiración
								</h1>
                                <a href="#donate" className="head-btn btn text-uppercase">DONA AHORA</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Banner
