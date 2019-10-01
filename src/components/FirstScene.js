import React, { Component } from 'react'
import { TimelineMax, Power3 } from 'gsap'
import ScrollMagic from 'scrollmagic'
import './FirstScene.css'

class FirstScene extends Component {
    componentDidMount() {
        this.animateScene()
    }

    animateScene = () => {
        let timeline = new TimelineMax()
        timeline
            .from('.section_1_01', 4, {
                y: -100,
                x: -150,
                ease: Power3.easeInOut,
            })
            .from(
                '.section_1_02',
                4,
                {
                    y: -150,
                    x: -250,
                    ease: Power3.easeInOut,
                },
                '-=4'
            )
            .from(
                '.section_1_03',
                4,
                {
                    y: -80,
                    x: -100,
                    ease: Power3.easeInOut,
                },
                '-=4'
            )
            .from(
                '.section_1_04',
                4,
                {
                    y: -100,
                    x: -150,
                    ease: Power3.easeInOut,
                },
                '-=4'
            )
            .from(
                '.section_1_05',
                4,
                {
                    y: -80,
                    x: -200,
                    ease: Power3.easeInOut,
                },
                '-=4'
            )
            .from(
                '.section_1_06',
                4,
                {
                    y: -100,
                    x: -350,
                    ease: Power3.easeInOut,
                },
                '-=4'
            )
            .from(
                '.section_1_07',
                4,
                {
                    y: -50,
                    x: -150,
                    ease: Power3.easeInOut,
                },
                '-=4'
            )
            .from(
                '.section_1_08',
                4,
                {
                    y: 50,
                    x: -350,
                    ease: Power3.easeInOut,
                },
                '-=4'
            )
            .from(
                '.section_1_09',
                4,
                {
                    y: 100,
                    x: -200,
                    ease: Power3.easeInOut,
                },
                '-=4'
            )
        new ScrollMagic.Scene({
            triggerElement: '.first-section',
            duration: '100%',
            triggerHook: 0,
            offset: '0',
        })
            .setTween(timeline)
            .setPin('.first-section')
            .addTo(this.props.controller)
    }

    render() {
        return (
            <section className="first-section">
                <h1>
                    Make Your Site Move with <br />
                    Animation
                </h1>
                <div className="images-wrapper">
                    <img
                        className="section_1_bg"
                        alt="sections 1 bg"
                        src="../../img/section_1_bg.webp"
                    />
                    <div className="ingredient-images">
                        <img
                            className="section_1_01"
                            alt="sections 1 01"
                            src="../../img/section_1_01.webp"
                        />
                        <img
                            className="section_1_02"
                            alt="sections 1 02"
                            src="../../img/section_1_02.webp"
                        />
                        <img
                            className="section_1_03"
                            alt="sections 1 03"
                            src="../../img/section_1_03.webp"
                        />
                        <img
                            className="section_1_04"
                            alt="sections 1 04"
                            src="../../img/section_1_04.webp"
                        />
                        <img
                            className="section_1_05"
                            alt="sections 1 05"
                            src="../../img/section_1_05.webp"
                        />
                        <img
                            className="section_1_06"
                            alt="sections 1 06"
                            src="../../img/section_1_06.webp"
                        />
                        <img
                            className="section_1_07"
                            alt="sections 1 07"
                            src="../../img/section_1_07.webp"
                        />
                        <img
                            className="section_1_08"
                            alt="sections 1 08"
                            src="../../img/section_1_08.webp"
                        />
                        <img
                            className="section_1_09"
                            alt="sections 1 09"
                            src="../../img/section_1_09.webp"
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export default FirstScene
