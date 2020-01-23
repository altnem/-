function hyouji(){var str="最初のあいさつの語尾は？";
var cnt =document.timer.moji.value.length;
if(cnt<12){document.timer.moji.value=str.substr(0,cnt+1);}
else{document.timer.moji.value="";}}
function startfnc(){setInterval("hyouji()",1000);}
function mes(){alert("3秒経ちました!");}
