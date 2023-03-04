import { NextPage } from 'next'
import Description from '../components/LootBoxes/Description'
import LootBox from '../components/LootBoxes/LootBox'
import Nav from '../components/Nav'

const mintgear: NextPage = () => {
    return (
        <div className='h-[100vh] bg-[#2D2424] '>
            <Nav />
            <div className='w-full flex justify-center  items-center'>
            <div className='bg-[#D5CEA3] flex justify-center items-center w-1/3 bg-opacity-40 mt-auto'>
                <LootBox />
                <Description />
            </div>
            </div>
        </div>
    )
}

export default mintgear