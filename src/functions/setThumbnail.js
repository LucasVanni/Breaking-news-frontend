const imageNYT = require('../assets/LogoNTY.jpg');

export default (multimedia) => {
    let url = '';

    if (multimedia !== null) {
        multimedia.forEach((element) => {
            if (element.width === 440) {
                url = element.url;
            }
        });
    } else {
        url = imageNYT;
    }

    return url;
};
