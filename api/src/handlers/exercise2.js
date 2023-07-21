module.exports = (req, res) => {
    const { target, input } = req.body
    let breakFor = false;
    const sumArray = []
    input.forEach((number, index) => {
        if (breakFor) return;
        for (let i = 0; i < input.length; i++) {
            const secondNumber = input[i];
            if (i == index) continue;

            if (number + secondNumber == target) {
                sumArray.push(index, i);
                breakFor = true;
                break;
            }
        }
    })
    if (!sumArray.length)
        res.
            status(500)
            .send(`Error! Target not available in ${JSON.stringify(input)}`);
            
    res.send(sumArray)
}