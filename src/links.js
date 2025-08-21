
const githubLink = document.getElementById("github");
if (CONFIG.gh_username == ""){
    githubLink.href = "https://github.com/";
}else{
    githubLink.href = "https://github.com/" + CONFIG.gh_username;
}


const malLink = document.getElementById("myanimelist");
if (CONFIG.mal_username == ""){
    malLink.href = "https://myanimelist.net/";
}else{
    malLink.href = "https://myanimelist.net/profile/" + CONFIG.mal_username;
}


const lxdLink = document.getElementById("letterboxd");
if (CONFIG.lxd_username == ""){
    lxdLink.href = "https://letterboxd.com/";
}else{
    lxdLink.href = "https://letterboxd.com/" + CONFIG.lxd_username;
}


const webLink = document.getElementById("web");
webLink.href = CONFIG.personal_web;


const opggLink = document.getElementById("opgg");
if (CONFIG.lxd_username == ""){
    opggLink.href = "https://op.gg/";
}else{
    opggLink.href = "https://op.gg/lol/summoners/" + CONFIG.opgg_region + "/" + CONFIG.opgg_username;
}




