import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useEffect, useMemo } from 'react'

// import Button from '../components/Button'

const game1: NextPage = () => {
    const PhaserGame = dynamic(() => {
        import('../components/PhaserGame')
        return import('../components/Blank')}
        , {
        ssr: false,
    })
    // const handleClick = () => {
    //     const scene = phaserGame.scene.keys.helloworld as HelloWorldScene
    //     scene.createEmitter()
    //  , }
    
    return (
        // <div id="phaser-container"></div>
        <PhaserGame />
    )
}

export default game1