# Browserstack Automation API Wrapper


**REST API REFERENCE: https://github.com/browserstack/api**
---------------

To get started You can create an account at https://www.browserstack.com/users/sign_in. If you then go to your [account profile](https://www.browserstack.com/accounts/automate)  to find your username and authentication key.

## Installation

```
npm i legndery/browserstack-api-wrapper.git
```

## Usage

```
const BrowserStack = require('browserstack-api-wrapper');
const client = new BrowserStack({
    username: 'username',
    accessKey: 'key'
});
client.workers.create({ //Start Worker instnace
    os:'WINDOWS',
    os_version:'XP',
    browser:'chrome',
    browser_version:'36.0',
    url:'https://google.com'
})
.then(function(data){ 
    console.log(data); 
    return client.workers.get();//Get all active worker list
})
.then(function(data){
    console.log(data)
    return client.workers.status(data[0].id) // Get status of one worker
})
.then(function(data){
    return client.workers.takeScreenshot(data.id, 'json');//take screenshot
})
.then(function(data){
    console.log(data);
    return client.workers.delete(data.id) //Delete the worker
})
.then(console.log)
.catch(console.err);
```