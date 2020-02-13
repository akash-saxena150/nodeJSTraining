function getHt(){
    return document.documentElement.clientHeight
}
function getImg(image){
    return (`https://gsg-image-uploads.s3-accelerate.amazonaws.com/webcontent/img/coaches/profilePic/${image}`)
}
export {getHt, getImg}