setCookie=(cname,cvalue,days)=> {
    let date = new Date();
    date.setTime(date.getTime()+(days * 24 * 60*  60* 1000))
    const expires ="expires="+date.toUTCString();
    document.cookie = cname +"="+cvalue+";" +expires+";path=/";
}
getCookie=(cname) =>{
    const name = cname +"=";
    const cDecoded = decodeURIComponent(cname);
    const cArr = cDecoded.split(";");
    let value;
    cArr.forEach(val=>{
        if(val.indexOf(name)==0) 
        value= value.substring(name.length);
        
    })
    return value;
}

document.querySelector("#cookies-btn").addEventListener("click",()=>{
    document.querySelector("#cookies").style.display ="none";
    setCookie("cookie",true,30);

})
cookieMessage =()=>{
    if(!getCookie("cookie"))
    document.querySelector("#cookies").style.display = "block";

}

windows.addEventListener("load",cookieMessage)