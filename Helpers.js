class Helpers{
    static consoleLog(...args) {
        if (process.env.NODE_ENV !== 'production') {
            console.log(...args);
        }
    }
}

module.exports = Helpers;