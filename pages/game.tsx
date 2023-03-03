import { NextPage } from 'next'
import dynamic from 'next/dynamic'
const game1: NextPage = () => {
    const PhaserGame = dynamic(() => {
        import('../components/Phaser/PhaserGame')
        return import('../components/Blank')
        }
        , {
        ssr: false,
    })
    
    return (
        <PhaserGame />
    )
}

export default game1
