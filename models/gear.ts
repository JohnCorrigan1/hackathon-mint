interface Gear {
    name: string;
    modifiers: Modifier[];
    rarity: string;
    slot: string;
}

interface Modifier {
    buff: number;
    statToBuff: string;
}

export default Gear;