import React, { Component } from 'react'
import { TimelineMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import './ForthScene.css'

class ForthScene extends Component {
    componentDidMount() {
        this.animateScene()
    }

    animateScene = () => {
        let timeline = new TimelineMax()
        timeline
            .to('.section_4_01', 4, {
                autoAlpha: 0,
            })
            .from(
                '.section_4_02',
                4,
                {
                    autoAlpha: 0,
                },
                '-=4'
            )
            .from('.section_4_03', 4, {
                autoAlpha: 0,
            })
            .from('.section_4_04', 4, {
                autoAlpha: 0,
            })

        new ScrollMagic.Scene({
            triggerElement: '.forth-section',
            duration: '100%',
            triggerHook: 0,
            offset: '50',
        })
            .setTween(timeline)
            .setPin('.forth-section')
            .addTo(this.props.controller)
    }

    render() {
        return (
            <section className="forth-section">
                <h1>14 Types of Animation</h1>
                <p>
                    With so many different effects, the possibilities are
                    endless.
                </p>
                <div className="images-wrapper">
                    <img
                        className="section_4_01"
                        alt="section 4 01"
                        src="../../img/section_4_01.webp"
                    />
                    <img
                        className="section_4_02"
                        alt="section 4 02"
                        src="../../img/section_4_02.webp"
                    />
                    <img
                        className="section_4_03"
                        alt="section 4 03"
                        src="../../img/section_4_03.webp"
                    />
                    <img
                        className="section_4_04"
                        alt="section 4 04"
                        src="../../img/section_4_04.webp"
                    />
                </div>
            </section>
        )
    }
}

export default ForthScene
