/*
Conveyor belt slideshow script-
© Dynamic Drive (www.dynamicdrive.com)
For full source code, 100's more DHTML scripts, and Terms Of Use, visit dynamicdrive.com
*/


//Specify the slider's width (in pixels)
var sliderwidth="784px"
//Specify the slider's height
var sliderheight="250px"
//Specify the slider's slide speed (larger is faster 1-10)
var slidespeed=3
//configure background color:
slidebgcolor="pink"

//Specify the slider's images
var leftrightslide=new Array()
var finalslide=''
leftrightslide[00]='<a href="id116.htm" target="iframe"><img src="aa.bmp" border=1 width="250px" height="250px"></a>'
leftrightslide[01]='<a href="id115.htm" target="iframe"><img src="pictures/1.jpg" border=1 width="250px" height="250px"></a>'
leftrightslide[02]='<a href="id115.htm" target="iframe"><img src="pictures/2.jpg" border=1 width="250px" height="250px"></a>'
leftrightslide[03]='<a href="id115.htm" target="iframe"><img src="pictures/c1.png" border=1 width="250px" height="250px"></a>'
leftrightslide[04]='<a href="id115.htm" target="iframe"><img src="pictures/3.jpg" border=1 width="250px" height="250px"></a>'
leftrightslide[05]='<a href="id115.htm" target="iframe"><img src="pictures/4.jpg" border=1 width="250px" height="250px"></a>'
leftrightslide[06]='<a href="id115.htm" target="iframe"><img src="pictures/5.jpg" border=1 width="250px" height="250px"></a>'
leftrightslide[07]='<a href="id115.htm" target="iframe"><img src="pictures/c2.png" border=1 width="250px" height="250px"></a>'
leftrightslide[08]='<a href="id115.htm" target="iframe"><img src="pictures/6.jpg" border=1 width="250px" height="250px"></a>'
leftrightslide[09]='<a href="id115.htm" target="iframe"><img src="pictures/7.jpg" border=1 width="250px" height="250px"></a>'
leftrightslide[10]='<a href="id115.htm" target="iframe"><img src="pictures/8.jpg" border=1 width="250px" height="250px"></a>'
leftrightslide[11]='<a href="id115.htm" target="iframe"><img src="pictures/c3.png" border=1 width="250px" height="250px"></a>'
leftrightslide[12]='<a href="id115.htm" target="iframe"><img src="pictures/c4.png" border=1 width="250px" height="250px"></a>'
leftrightslide[13]='<a href="id115.htm" target="iframe"><img src="pictures/c5.png" border=1 width="250px" height="250px"></a>'
leftrightslide[14]='<a href="id115.htm" target="iframe"><img src="pictures/16.jpg" border=1 width="250px" height="250px"></a>'
leftrightslide[15]='<a style="color:blue; font-size:50px;">Chăm học và chăm yêu</a>'
leftrightslide[16]='<a href="id115.htm" target="iframe"><img src="pictures/12.jpg" border=1 width="250px" height="250px"></a>'
leftrightslide[17]='<a href="id115.htm" target="iframe"><img src="pictures/13.jpg" border=1 width="250px" height="250px"></a>'
leftrightslide[18]='<a href="id115.htm" target="iframe"><img src="pictures/14.jpg" border=1 width="250px" height="250px"></a>'
leftrightslide[19]='<a style="color:blue; font-size:50px;">Chúc mừng ngày Quốc tế Phụ nữ</a>'
leftrightslide[20]='<a href="id115.htm" target="iframe"><img src="pictures/15.jpg" border=1 width="250px" height="250px"></a>'
leftrightslide[21]='<a style="color:blue; font-size:50px;">Kỷ niệm đáng yêu!</a>'
////NO NEED TO EDIT BELOW THIS LINE////////////

var copyspeed=slidespeed
leftrightslide='<nobr>'+leftrightslide.join(" ")+'</nobr>'
var iedom=document.all||document.getElementById
if (iedom)
document.write('<span id="temp" style="visibility:hidden;position:absolute;top:-100px;left:-9000px">'+leftrightslide+'</span>')
var actualwidth=''
var cross_slide, ns_slide

function fillup(){
if (iedom){
cross_slide=document.getElementById? document.getElementById("test2") : document.all.test2
cross_slide2=document.getElementById? document.getElementById("test3") : document.all.test3
cross_slide.innerHTML=cross_slide2.innerHTML=leftrightslide
actualwidth=document.all? cross_slide.offsetWidth : document.getElementById("temp").offsetWidth
cross_slide2.style.left=actualwidth+20+"px"
}
else if (document.layers){
ns_slide=document.ns_slidemenu.document.ns_slidemenu2
ns_slide2=document.ns_slidemenu.document.ns_slidemenu3
ns_slide.document.write(leftrightslide)
ns_slide.document.close()
actualwidth=ns_slide.document.width
ns_slide2.left=actualwidth+20+"px"
ns_slide2.document.write(leftrightslide)
ns_slide2.document.close()
}
lefttime=setInterval("slideleft()",30)
}
window.onload=fillup

function slideleft(){
if (iedom){
if (parseInt(cross_slide.style.left)>(actualwidth*(-1)+8))
cross_slide.style.left=parseInt(cross_slide.style.left)-copyspeed+"px"
else
cross_slide.style.left=parseInt(cross_slide2.style.left)+actualwidth+30+"px"

if (parseInt(cross_slide2.style.left)>(actualwidth*(-1)+8))
cross_slide2.style.left=parseInt(cross_slide2.style.left)-copyspeed+"px"
else
cross_slide2.style.left=parseInt(cross_slide.style.left)+actualwidth+30+"px"

}
else if (document.layers){
if (ns_slide.left>(actualwidth*(-1)+8))
ns_slide.left-=copyspeed
else
ns_slide.left=ns_slide2.left+actualwidth+30

if (ns_slide2.left>(actualwidth*(+1)-8))
ns_slide2.left-=copyspeed
else
ns_slide2.left=ns_slide.left+actualwidth+30
}
}


if (iedom||document.layers){
with (document){
document.write('<table border="0" cellspacing="0" cellpadding="0"><td>')
if (iedom){
write('<div id="lbp-text-body style="position:relative;width:'+sliderwidth+';height:'+sliderheight+';overflow:hidden">')
write('<div id="lbp-text-body style="position:absolute;width:'+sliderwidth+';height:'+sliderheight+';background-color:'+slidebgcolor+'" onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed">')
write('<div id="test2" style="position:absolute;left:0px;top:0px"></div>')
write('<div id="test3" style="position:absolute;left:-1000px;top:0px"></div>')
write('</div></div>')
}
else if (document.layers){
write('<ilayer width='+sliderwidth+' height='+sliderheight+' name="ns_slidemenu" bgColor='+slidebgcolor+'>')
write('<layer name="ns_slidemenu2" left=0 top=0 onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed"></layer>')
write('<layer name="ns_slidemenu3" left=0 top=0 onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed"></layer>')
write('</ilayer>')
}
document.write('</td></table>')
}
}