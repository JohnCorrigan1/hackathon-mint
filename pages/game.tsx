import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import('../components/PhaserGame')

const game1: NextPage = () => {
    const PhaserGame = dynamic(() => import('../components/Blank'), {
        ssr: false,
    })
    
    return (
        // <div id="phaser-container"></div>
        <PhaserGame />
    )
}

export default game1