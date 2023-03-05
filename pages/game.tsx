import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { query } from '../lib/subgraphFetch'

const Game1: NextPage = () => {
    const PhaserGame = dynamic(() => {
        import('../components/Phaser/PhaserGame')
        return import('../components/Blank')
        }
        , {
        ssr: false,
    })
  
    const [result, setResult] = useState<any>(null)
    
    useEffect(() => {
        const getData = async () => {
            const data = await query()
            setResult(data)
        }
        getData()
    },[])

    useEffect(() => {
        console.log("from game real", result)
    }, [result])  

    return (
        <PhaserGame />
    )
}
// todo update this to support custom queries


export default Game1
