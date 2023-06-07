const validateTime = (num) => {
    const correctNumber = num < 10 ? '0' + num : num;
    return correctNumber;
}

module.exports = { validateTime }