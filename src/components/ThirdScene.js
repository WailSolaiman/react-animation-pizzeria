import React, { Component } from 'react'
import { TimelineMax, Power3 } from 'gsap'
import ScrollMagic from 'scrollmagic'
import './ThirdScene.css'

class ThirdScene extends Component {
    componentDidMount() {
        this.animateScene()
    }

    animateScene = () => {
        let timeline = new TimelineMax()
        timeline
            .to('.section_3_01', 4, {
                y: -250,
                ease: Power3.easeInOut,
            })
            .to(
                '.section_3_02',
                4,
                {
                    y: -200,
                    ease: Power3.easeInOut,
                },
                '-=4'
            )
            .to(
                '.section_3_03',
                4,
                {
                    y: -100,
                    ease: Power3.easeInOut,
                },
                '-=4'
            )
            .to(
                '.section_3_04',
                4,
                {
                    y: 0,
                    ease: Power3.easeInOut,
                },
                '-=4'
            )
            .to(
                '.section_3_05',
                4,
                {
                    y: 150,
                    ease: Power3.easeInOut,
                },
                '-=4'
            )
            .to(
                '.section_3_06',
                4,
                {
                    y: 250,
                    ease: Power3.easeInOut,
                },
                '-=4'
            )
        new ScrollMagic.Scene({
            triggerElement: '.third-section',
            duration: '100%',
            triggerHook: 0,
            offset: '50',
        })
            .setTween(timeline)
            .setPin('.third-section')
            .addTo(this.props.controller)
    }

    render() {
        return (
            <section className="third-section">
                <h1>Animate Anything You Want</h1>
                <p>Easily add animation to text, photos, buttons & more.</p>
                <div className="images-wrapper">
                    <img
                        className="section_3_06"
                        alt="sections 3 06"
                        src="../../img/section_3_06.webp"
                    />
                    <img
                        className="section_3_05"
                        alt="sections 3 05"
                        src="../../img/section_3_05.webp"
                    />
                    <img
                        className="section_3_04"
                        alt="sections 3 04"
                        src="../../img/section_3_04.webp"
                    />
                    <img
                        className="section_3_03"
                        alt="sections 3 03"
                        src="../../img/section_3_03.webp"
                    />
                    <img
                        className="section_3_02"
                        alt="sections 3 02"
                        src="../../img/section_3_02.webp"
                    />
                    <img
                        className="section_3_01"
                        alt="sections 3 01"
                        src="../../img/section_3_01.webp"
                    />
                </div>
            </section>
        )
    }
}

export default ThirdScene
