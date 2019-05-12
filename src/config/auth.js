const axiosInstance = require('./axiosInstance');
class AuthHandler{
    setCreds({username, accessKey}){
        this.accessKey = accessKey;
        this.username = username;
        axiosInstance.defaults.headers.common['Authorization']= "Basic "+Buffer.from(`${this.username}:${this.accessKey}`).toString('base64');
    }
}

const auth = new AuthHandler();

module.exports = auth;