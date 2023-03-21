function linethrough() {
  // let parentitem = document.querySelector("#Arguments");
  let item = document.querySelector("li");
  item.style.textDecoration = "line-through";
}

function setImageSrcById(id, url) {
  let img = document.querySelector(id);

  img.src = url;
  img.style.height = "300px"
}

linethrough();

setImageSrcById("#image-1","https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4mRni?ver=a707");
setImageSrcById("#image-2","https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4mRni?ver=a707");
setImageSrcById("#image-3","https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4mRni?ver=a707");


function removeItem(){
    let item = document.querySelector("li")  
    item.remove()
}
removeItem()
removeItem()

function fontSize(font, id){
    let text = document.querySelector(id)
    text.style.fontSize = font
}

fontSize("100px","#heading")

function append(element){
let parent = document.createElement("ul")
let element = document.querySelector("li")
parent.appendChild(element)
}


