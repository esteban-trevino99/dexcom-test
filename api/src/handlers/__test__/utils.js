const responseMock = () => {
    const res = {};
    res.send = jest.fn();
    res.json = jest.fn();
    res.status = jest.fn(() => res);
    return res;
}

module.exports = {
    responseMock
}