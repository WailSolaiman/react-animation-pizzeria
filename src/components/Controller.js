import React from 'react'
import { TimelineMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
import FirstScene from './FirstScene'
import SecondScene from './SecondScene'
import ThirdScene from './ThirdScene'
import ForthScene from './ForthScene'

const Controller = () => {
    ScrollMagicPluginGsap(ScrollMagic, TimelineMax)
    let controller = new ScrollMagic.Controller()
    return (
        <div>
            <FirstScene controller={controller} />
            <SecondScene controller={controller} />
            <ThirdScene controller={controller} />
            <ForthScene controller={controller} />
        </div>
    )
}

export default Controller
