import { NextPage } from "next"
import { Head } from "next/document"
import { useState } from "react"
import { isPromise } from "util/types"
import EquipModal from "../components/EquipModal"
import GearCard from "../components/GearCard"
import Nav from "../components/Nav"
import Gear from "../models/gear"

const Gear: NextPage = () => {



    const speedBoots: Gear = {
        name: "Speed Boots",
        modifiers: [{statToBuff: "dexterity", buff: 5}, {statToBuff: "Consitution", buff: -1}, {statToBuff: "Intellect", buff: 100}]
    }


    return (
        <div className="w-full min-h-[100vh] bg-[#2D2424]">
            <Nav />
            {/* <EquipModal isOpen={isOpen} setIsOpen={setIsOpen}/> */}
            <div className="grid grid-cols-5 p-10 gap-5">
                {/* <GearCard item={speedBoots} isOpen={isOpen} isSuccessfull={isSuccesfull} setIsOpen={setIsOpen} setIsSuccesfull={setIsSuccesfull}/> */}
                <GearCard item={speedBoots} />
                <GearCard item={speedBoots} />
                <GearCard item={speedBoots} />
                <GearCard item={speedBoots} />
                <GearCard item={speedBoots} />
                <GearCard item={speedBoots} />
                <GearCard item={speedBoots} />
                <GearCard item={speedBoots} />
                <GearCard item={speedBoots} />
                <GearCard item={speedBoots} />

            </div>
        </div>
    )
}

export default Gear