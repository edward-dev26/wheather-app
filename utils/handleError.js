const handleError = (successCallback) => (error, data) => {
    if (error) return console.log(error);

    successCallback(data);
};

module.exports = handleError;