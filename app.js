const geocode = require('./services/geocode');
const forecast = require('./services/forecast');
const handleError = require('./utils/handleError');
const getAddress = require('./utils/getAddress');

geocode(getAddress(), handleError(({ latitude, longitude, location }) => {
    forecast(latitude, longitude, handleError((wheather) => {
        console.log(location);
        console.log(wheather);
    }));
}));
