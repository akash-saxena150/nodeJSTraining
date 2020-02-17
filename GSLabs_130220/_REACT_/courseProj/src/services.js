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
export {getHt, getImg, returnRegex, fakeLogin}