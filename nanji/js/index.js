window.onload=function(){
    var img=document.getElementsByClassName("imgs");
    var xian=document.getElementsByClassName("xiank")[0];
    var btn=document.getElementsByClassName("btn")[0];

    btn.onclick=function(){
        xian.style.cssText="transform:scale(0,0);"
    }
    for(var i=0;i<img.length;i++){
        img[i].index=i;
        img[i].onclick=function(){
            xian.style.cssText="transform:scale(1,1);"
        }

        //img[i].onmouseover=function(){
        //    img[this.index].style.cssText="transform:scale(1.2,1.2);z-index:1000;";
        //}
        //img[i].onmouseout=function(){
        //    img[this.index].style.cssText="transform:scale(1,1);z-index:100;";
        //}
    }

    var tu=document.getElementsByClassName("bantu");
    tu[0].style.zIndex=10;
    for(var j=1;j<tu.length;j++){
        //tu[i].style.display="none";
        tu[j].style.left=840+"px";
    }
//    轮播
    var btnl=document.getElementsByClassName("btnl")[0];
    var btnr=document.getElementsByClassName("btnr")[0];
    var num=0;
    var next=0;

    function btnll(){
            next++;
            if (next>=tu.length) {
                next=0;
            }
            animate(tu[num],{left:-840})
            tu[next].style.left=840+"px";
            animate(tu[next],{left:0})
            num=next;

    }
    btnl.onclick=function(){
        btnll();
    }
    function btnrr(){
        next--;
        if (next<0) {
            next=tu.length-1;
        }
        animate(tu[num],{left:840})
        tu[next].style.left=-840+"px";
        //animate(tu[next],{left:840})
        animate(tu[next],{left:0})
        //animate(tu[num],{left:840})


        //tu[next].style.display="none";
        //tu[num].style.display="block";
        num=next;

    }
    btnr.onclick=function(){
        btnrr();
    }

}