        // @ts-ignore
document.getElementById("bottomScroll").style.display= "none";
function scroll(){
    if(window.scrollY<=200){
        // @ts-ignore
        document.getElementById("bottomScroll").style.display= "none";
    }
    else{
        // @ts-ignore
        document.getElementById("bottomScroll").style.display= "flex";
    }
}