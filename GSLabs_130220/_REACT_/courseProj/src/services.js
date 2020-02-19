import config from './config';
const axios = require('axios');
function getHt(){
    return document.documentElement.clientHeight
}
function getImg(image){
    return (`https://gsg-image-uploads.s3-accelerate.amazonaws.com/webcontent/img/coaches/profilePic/${image}`)
}
function returnRegex (type){
    switch (type){
        case 'email':
            return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
}
function fakeLogin(e, p, success, err){
    console.log(success, err);
    setTimeout(()=>{
        if(e==='as@as.com' && p==='123')
        {success({auth: 'somerandomauth'})}
        else
        {err("Invalid credentials")}
    }, 2000)   
}
function setStorage(name, val){
    localStorage.setItem(name, val)
}
function getStorage(name){
    return localStorage.getItem(name)
}
function returnURL(api){
    return `${config.baseURL}${config.apis[api]}`
}
function callAPI(api, type, success, err, data){
    if(type==='get')
    {
        axios.get(`${returnURL(api)}${data?'/'+data:''}`)
        .then(function (response) {
            success(response);
        })
        .catch(function (error) {
            err(error);
        })
    }
    else{
        axios.post(returnURL(api), data)
        .then(function (response) {
            success(response);
        })
        .catch(function (error) {
            err(error);
        })
    }
    
}
export {getHt, getImg, returnRegex, fakeLogin, returnURL, callAPI, setStorage, getStorage}