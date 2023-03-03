interface Gear {
    name: string;
    modifiers: Modifier[];
}

interface Modifier {
    buff: number;
    statToBuff: string;
}

export default Gear;