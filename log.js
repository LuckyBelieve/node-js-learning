class Log {
    info(message) {
        console.log('Info: ' + message);
    }
    warning(warning) {
        console.log('Warning: ' + warning);
    }
    error(error) { console.log('Error: ' + error); }
};
module.exports = Log
