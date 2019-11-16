const calculate = (x, y, logger) => {
    const result = x+y;
    logger(result);
    return result;
};

const calculate2 = (x, y, logger) => {
    const result = x+y;
    logger.log(result);
    return result;
};

module.exports = {
    calculate,
    calculate2
};
