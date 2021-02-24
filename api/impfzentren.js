import * as imfzentrenData from './impfzentren-data.json'
module.exports = (req, res) => {
    console.log(imfzentrenData.default)
    res.json(imfzentrenData.default)
}