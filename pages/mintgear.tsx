import { NextPage } from 'next'
import { useState } from 'react'
import Description from '../components/LootBoxes/Description'
import LootBox from '../components/LootBoxes/LootBox'
import Nav from '../components/Nav'

const Mintgear: NextPage = () => {

    const [isAnimating, setIsAnimating] = useState(false)

    const handleGearMint = () => {
        setIsAnimating(true)
    }

    return (
        <div className='h-[100vh] bg-[#2D2424] '>
            <Nav />
            <div className='w-full flex flex-col justify-center  items-center'>
            <div className='bg-[#D5CEA3] flex justify-center items-center w-1/3 bg-opacity-40 mt-auto p-20 gap-20 rounded-xl'>
                <LootBox isAnimating={isAnimating} setIsAnimating={setIsAnimating} />
                <Description />
                
            </div>
            <button onClick={handleGearMint} className='bg-blue-500 hover:bg-blue-600 active:scale-95 hover:scale-105 text-zinc-200 p-2 mt-5 w-1/5 rounded-lg font-bold text-xl'>Mint</button>
            </div>
        </div>
    )
}

export default Mintgear