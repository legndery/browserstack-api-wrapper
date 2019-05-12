const axiosInstance = require('../config/axiosInstance');
class Browser {
    constructor(){
        this.path = "browsers"
    }
    /**
     * @description Fetches Active Browsers
     * @returns {Promise}
     * @param {*} structure 
     */
    fetch({
        flatten = false
    } = {}){
        const path = this.path + (flatten?"?flat=true":"");
        // console.log(this.path);
        return axiosInstance.get(path).then(({data})=>data).catch(({response})=>response.data);
    }
    /**
     * @description Fetches all browser beta/dev
     */
    fetchAll({
        flatten = false
    } = {}){
        const path = this.path + "?all=true"+(flatten?"&flat=true":"");
        return axiosInstance.get(path).then(({data})=>data).catch(({response})=>response.data);
    }
}
module.exports = Browser;