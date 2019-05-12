
const auth = require('./config/auth');
const constants = require('./config/constants');
const models = require('./model');
const axiosInstance = require('./config/axiosInstance');
class BrowserStack {
    constructor(options){
        auth.setCreds(options);
        /////////////////////
        this.browsers = new models.Browser();
        ////////////////////
        this.workers = new models.Worker();
        /////////////////////
        this.status = function(){
            return axiosInstance.get('status').then(({data})=>data).catch(({response})=>response.data);
        }
    }
    static get RESOLUTIONS(){
        return constants.RESOLUTIONS;
    }
    static get FORMATS(){
        return constants.FORMATS;
    }
}

module.exports = BrowserStack;