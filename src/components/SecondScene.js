import React, { Component } from 'react'
import { TimelineMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import './SecondScene.css'

class SecondScene extends Component {
    componentDidMount() {
        this.animateScene()
    }

    animateScene = () => {
        let timeline = new TimelineMax()
        timeline.to('.top .image-container', 4, {
            height: 0,
        })
        new ScrollMagic.Scene({
            triggerElement: '.second-section',
            duration: '100%',
            triggerHook: 0,
            offset: '50',
        })
            .setTween(timeline)
            .setPin('.second-section')
            .addTo(this.props.controller)
    }

    render() {
        return (
            <section className="second-section">
                <h1>Draw Attention Where You Want it Most</h1>
                <p>A great animation effect is impossible to ignore.</p>
                <div className="images-wrapper bottom">
                    <div className="image-container">
                        <img
                            className="section_2_06"
                            alt="section 2 06"
                            src="../../img/section_2_06.webp"
                        />
                    </div>
                    <div className="image-container">
                        <img
                            className="section_2_07"
                            alt="section 2 07"
                            src="../../img/section_2_07.webp"
                        />
                    </div>
                    <div className="image-container">
                        <img
                            className="section_2_08"
                            alt="section 2 08"
                            src="../../img/section_2_08.webp"
                        />
                    </div>
                    <div className="image-container">
                        <img
                            className="section_2_09"
                            alt="section 2 09"
                            src="../../img/section_2_09.webp"
                        />
                    </div>
                    <div className="image-container">
                        <img
                            className="section_2_10"
                            alt="section 2 10"
                            src="../../img/section_2_10.webp"
                        />
                    </div>
                </div>
                <div className="images-wrapper top">
                    <div className="image-container">
                        <img
                            className="section_2_01"
                            alt="section 2 01"
                            src="../../img/section_2_01.webp"
                        />
                    </div>
                    <div className="image-container">
                        <img
                            className="section_2_02"
                            alt="section 2 02"
                            src="../../img/section_2_02.webp"
                        />
                    </div>
                    <div className="image-container">
                        <img
                            className="section_2_03"
                            alt="section 2 03"
                            src="../../img/section_2_03.webp"
                        />
                    </div>
                    <div className="image-container">
                        <img
                            className="section_2_04"
                            alt="section 2 04"
                            src="../../img/section_2_04.webp"
                        />
                    </div>
                    <div className="image-container">
                        <img
                            className="section_2_05"
                            alt="section 2 05"
                            src="../../img/section_2_05.webp"
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export default SecondScene
