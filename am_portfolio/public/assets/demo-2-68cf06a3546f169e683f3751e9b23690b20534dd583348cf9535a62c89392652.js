!function(){function n(){d=window.innerWidth,r=window.innerHeight,w={x:0,y:r},h=document.getElementById("large-header"),h.style.height=r+"px",l=document.getElementById("demo-canvas"),l.width=d,l.height=r,c=l.getContext("2d"),s=[];for(var n=0;n<.5*d;n++){var t=new a;s.push(t)}o()}function t(){window.addEventListener("scroll",e),window.addEventListener("resize",i)}function e(){f=!(document.body.scrollTop>r)}function i(){d=window.innerWidth,r=window.innerHeight,h.style.height=r+"px",l.width=d,l.height=r}function o(){if(f){c.clearRect(0,0,d,r);for(var n in s)s[n].draw()}requestAnimationFrame(o)}function a(){function n(){t.pos.x=Math.random()*d,t.pos.y=r+100*Math.random(),t.alpha=.1+.3*Math.random(),t.scale=.1+.3*Math.random(),t.velocity=Math.random()}var t=this;!function(){t.pos={},n(),console.log(t)}(),this.draw=function(){t.alpha<=0&&n(),t.pos.y-=t.velocity,t.alpha-=5e-4,c.beginPath(),c.arc(t.pos.x,t.pos.y,10*t.scale,0,2*Math.PI,!1),c.fillStyle="rgba(255,255,255,"+t.alpha+")",c.fill()}}var d,r,h,l,c,s,w,f=!0;n(),t()}();