import React, { Component } from 'react'

export class Callto extends Component {
    render() {
        return (
            <div>
                <section className="callto-area relative">
                    <div className="container">
                        <div className="row d-flex callto-wrap justify-content-between pt-40 pb-40">
                            <h3 className="text-white">¡Por favor ayudanos en nuestra causa!</h3>
                            <a href="/donar" className="head-btn head-btn2 btn text-uppercase">DONA AHORA</a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Callto
