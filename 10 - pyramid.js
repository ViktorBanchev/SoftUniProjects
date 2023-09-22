function pyramid(base, inc) {
    let base1 = base;
    let stone = 0;
    let lapiz = 0;
    let marble = 0;
    let gold = 0;
    let height = 0;
    for (let i = base; i >= 1; i -= 2) {
        base1 = i;
        height += 1;
        let baseStone = ((base1 - 2) ** 2) * inc;
        let layer = (base1 ** 2) * inc;
        if (base1 > 2) {
            stone += baseStone;
            if (height % 5 != 0) {
                marble += layer - baseStone;
            } else if (height % 5 == 0) {
                lapiz += layer - baseStone;
            }
        } else if (base1 <= 2) {

            
            gold += layer
        }
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapiz)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * inc)}`);
}

pyramid(23, 0.5)