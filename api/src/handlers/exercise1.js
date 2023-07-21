module.exports = (req, res) => {
    const input = req.body

    const numbersMissing = [];

    for (let i = 0; i < input.length; i++) {
        const number = i + 1
        if (input[i] > input.length || input[i] < 1)
            res.
                status(500)
                .send(`Error! Series of numbers is incorrect ("${input[i]}" not valid in length of series 1 - ${input.length})`);

        if (!input.includes(number)) numbersMissing.push(number)
    }
    res.send(numbersMissing)
}