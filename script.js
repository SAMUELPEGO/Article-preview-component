icon_profile_share = document.getElementById("svg_profile_share");
icon_socialMedia_share = document.getElementById("svg_socialMedia_share"); 
div_socialMedia = document.getElementById("div_container_socialMedia");

const button_share_show = () => {
        div_socialMedia.style.display = "block";
        icon_profile_share.removeAttribute("onclick","button_share_show()");
        icon_socialMedia_share.removeAttribute("onclick","button_share_show()");
        icon_profile_share.setAttribute("onclick","button_share_hidde()");
        icon_socialMedia_share.setAttribute("onclick","button_share_hidde()");
    
}
const button_share_hidde = () => {
        div_socialMedia.style.display = "none";
        icon_profile_share.removeAttribute("onclick","button_share_hidde()");
        icon_socialMedia_share.removeAttribute("onclick","button_share_hidde()");
        icon_profile_share.setAttribute("onclick","button_share_show()");
        icon_socialMedia_share.setAttribute("onclick","button_share_show()");
    
}  
