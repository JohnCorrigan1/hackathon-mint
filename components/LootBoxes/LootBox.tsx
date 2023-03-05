import Image from "next/image"
import { Dispatch, SetStateAction } from "react"

const LootBox: React.FC<{isAnimating: boolean, setIsAnimating: Dispatch<SetStateAction<boolean>>}> = (props) => {
    return (
        <div className="flex justify-center items-center">
            <Image src="/crateCropped.png" height={300} width={300} className={"" + (props.isAnimating ? " crate" : "")} /> 
        </div>
    )
}

export default LootBox
