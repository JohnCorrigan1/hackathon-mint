import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const game1: NextPage = () => {
    const PhaserGame = dynamic(() => import('../components/PhaserGame'), {
        ssr: false,
    })
    
    return (
        // <div id="phaser-container"></div>
        <PhaserGame />
    )
}

export default game1