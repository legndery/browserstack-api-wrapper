const axios = require('axios')
/** @type {axios} */
const axiosInstance = require('./../config/axiosInstance');
class Worker {
    constructor() {
        this.path = "worker"
    }
    
    create({
        os,
        os_version,
        browser,
        device=undefined,
        browser_version=undefined,
        timeout=undefined,
        url=undefined,
        name=undefined,
        build=undefined,
        project=undefined,
        "browserstack.video": browserstackVideo=undefined,
        resolution=undefined
    }) {
        const data = {
            os,
            os_version,
            browser,
            device,
            browser_version,
            timeout,
            url,
            name,
            build,
            project,
            "browserstack.video": browserstackVideo,
            resolution
        }
        Object.keys(data).forEach((d)=>{
            if(data[d]===undefined){
                delete data[d];
            }
        })
        const path = this.path;
        // console.log(path);
        return axiosInstance.post(path, data).then(({data})=>data).catch(({response})=>response.data);;
    }
    
    delete(id){
        const path = this.path+"/"+id;
        // console.log(path);
        return axiosInstance.delete(path).then(({data})=>data).catch(({response})=>response.data);
    }
    takeScreenshot(id, format){
        const path = `${this.path}/${id}/screenshot.${format}`;
        console.log(path);
        return axiosInstance.get(path).then(({data})=>data).catch(({response})=>response.data);
    }
    get(){
        const path = `${this.path}s`;
        return axiosInstance.get(path).then(({data})=>data).catch(({response})=>response.data);
    }
    status(id){
        const path = this.path+"/"+id;
        // console.log(path);
        return axiosInstance.get(path).
        then(({data})=>data).catch(({response})=>response.data);
    }
}

module.exports = Worker;