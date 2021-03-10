!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";const t=16,n=function(t,n,e,o=1){const r=t.getContext("2d"),a=(t=>(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1))(r);return t.width=n*a,t.height=e*a,t.style.width=n*o+"px",t.style.height=e*o+"px",r.setTransform(a,0,0,a,0,0),t},e=(t,n)=>{const e=new Image;return e.src=t,n&&e.addEventListener("load",(()=>n(e)),!1),e},o=(t,n,e=n)=>{const o=t.width/n;let r=Math.floor(Math.random()*o);if(o>0){setInterval((()=>{r=(r+1)%o}),125)}return(o,a,i)=>o.drawImage(t,r*n,0,n,e,a*n,i*e,n,e)},r=(t,n=.2)=>(void 0===t.drawX&&(t.drawX=t.x),void 0===t.drawY&&(t.drawY=t.y),t.drawX<t.x&&(t.drawX+=Math.min(t.x-t.drawX,n)),t.drawY<t.y&&(t.drawY+=Math.min(t.y-t.drawY,n)),t.drawX>t.x&&(t.drawX-=Math.min(t.drawX-t.x,n)),t.drawY>t.y&&(t.drawY-=Math.min(t.drawY-t.y,n)),[t.drawX,t.drawY]);const a=(t,n,e,o)=>{const r=[];for(let a=n;a<o;a++)for(let n=t;n<e;n++)r.push([n,a]);return function(t){for(var n=t.length-1;n>0;n--){var e=Math.floor(Math.random()*(n+1)),o=t[n];t[n]=t[e],t[e]=o}}(r),r},i=e("img/tiles.png"),d=e("img/bat.png"),c=e("img/skeleton.png"),l=e("img/knight.png"),s=e("img/knight_flip.png"),u=e("img/slime.png"),h=e("img/coin.png"),m=(t,n)=>{const e=[];return t>1&&e.push([t-1,n]),n>1&&e.push([t,n-1]),t<6&&e.push([t+1,n]),n<8&&e.push([t,n+1]),(o=e)[Math.floor(Math.random()*o.length)];var o},w=(n,e)=>({name:"Coin",draw:o(h,t),x:n,y:e}),f=(n,e)=>({name:"Bat",draw:o(d,t),turn:m,x:n,y:e}),g=(n,e)=>({name:"Skeleton",draw:o(c,t),turn:m,x:n,y:e}),x=(n,e)=>({name:"Slime",draw:o(u,t),turn:m,x:n,y:e});let y,p,M,k,v,E,X,Y,b,S={},R=0;function B(){X=!1,Y=1.5,R++,document.getElementById("floor-hud").textContent=`${R}`;const t=a(1,1,7,9).filter((([t,n])=>Math.abs(t-b.x)>1||Math.abs(n-b.y)>1));[v,E]=t.pop(),k=[],[w,w,f,g,x].forEach((n=>{const[e,o]=t.pop();k.push(n(e,o))}))}window.addEventListener("keydown",(function(t){S[t.keyCode]=!0})),window.addEventListener("keyup",(function(t){S[t.keyCode]=!1})),(t=>{let n=null,e=null;document.addEventListener("touchstart",(t=>{const o=t.touches[0];n=o.clientX,e=o.clientY}),!1),document.addEventListener("touchmove",(o=>{if(!n||!e)return;const r=o.touches[0].clientX,a=o.touches[0].clientY,i=n-r,d=e-a;Math.abs(i)>Math.abs(d)?t(i>0?37:39):t(d>0?38:40),n=null,e=null}),!1)})((t=>{S[t]=!0})),window.addEventListener("load",(function(){y=((t,e,o,r)=>{const a=document.getElementById(t);n(a,e,o,r);const i=a.getContext("2d");return i.imageSmoothingEnabled=!1,i})("root",128,160,3),M=((t,n,e=n)=>(o,r,a,i,d)=>o.drawImage(t,r*n,a*e,n,e,i*n,d*e,n,e))(i,t),p=(t,n,e)=>M(t,8,1,n,e),b=((n,e)=>{const r=[o(l,t),o(s,t)],a={name:"Knight",x:n,y:e,dir:0,draw:(...t)=>r[a.dir](...t)};return a})(2,2),B(),I()}));const C={37:()=>{b.x>1&&b.x--,b.dir=1},38:()=>{b.y>1&&b.y--},39:()=>{b.x<6&&b.x++,b.dir=0},40:()=>{b.y<8&&b.y++}};function I(){X||Object.entries(C).forEach((([t,n])=>{S[t]&&(S[t]=!1,n(),k.filter((t=>!!t.turn)).forEach((t=>{const[n,e]=t.turn(t.x,t.y);t.x=n,t.y=e})))})),y.clearRect(0,0,128,160);for(let t=1;t<9;t++)for(let n=1;n<7;n++)M(y,1,1,n,t);M(y,0,0,0,0);for(let t=1;t<7;t++)M(y,1,0,t,0);M(y,2,0,7,0),M(y,0,2,0,9);for(let t=1;t<7;t++)M(y,1,2,t,9);M(y,2,2,7,9);for(let t=0;t<9;t++)M(y,0,1,0,t);for(let t=0;t<9;t++)M(y,2,1,7,t);p(y,v,E),k.forEach((t=>{const[n,e]=r(t);t.draw(y,n,e)}));const[t,n]=r(b);b.draw(y,t,n),X?Y<1?Y+=Math.min(1-Y,1/12):B():(Y>0&&(Y-=Math.min(Y,1/12)),b.x===v&&b.y===E&&(X=!0)),Y>0&&(y.fillStyle=`rgba(39, 29, 42, ${Y})`,y.fillRect(0,0,128,160)),requestAnimationFrame(I)}}));
