const text=document.querySelector(".ctext p");
text.innerHTML =text.innerHTML.split("").map((char ,i)=> `<span style="transform:rotate(${i * 18}deg)">${char}</span>`).join("")

var hee=document.querySelector("#greet h2"),
darkbutton=document.querySelector(".darkcircle"),
darkmode=document.querySelector("#darkmode"),
darktext=document.querySelector("#darktext");

// ------------ Greet hey hello ---------
// ------------ Greet hey hello ---------
var tl=gsap.timeline();
function greet(){
    tl.to("h2",{
        top:15,
delay:.1,
stagger:1.5,
})
.to("h2",{
top:-15,
stagger:1.5,
},`-=6.6`)
.to("h2",{
delay:1.5,
top:15,
stagger:1.5,
},`-=5`)
.to("h2",{
top:40,
stagger:1.5,
},`-=6.5`)
}
for(var i=1; i<20;i++){
    greet();
   }

// -------Dark mode /Green Mode-------
// -------Dark mode /Green Mode-------
var flag=0;
darkmode.addEventListener("click",function(){
if(flag===0){
    darktext.style.opacity= "1"
    darkbutton.style.top ="93%"
    setTimeout(function(){
        darkmodeon();
        darkbutton.style.backgroundColor="rgb(239, 231, 231)"
        darktext.style.opacity= "0"
    },2000)
    flag=1;
}
else{
    darkbutton.style.top ="7%"
    darktext.innerHTML="WhiteMode"
    darktext.style.opacity= "1"
    setTimeout(function(){
        whitemodeon();
        darkbutton.style.backgroundColor="rgb(112, 112, 98)"
        darktext.style.opacity= "0"
    darktext.innerHTML="GreenMode"
    },2000)

    flag=0;
}
})
function darkmodeon(){
    document.documentElement.style.setProperty('--white','black')
    document.documentElement.style.setProperty('--black','white')
    document.documentElement.style.setProperty('--bgblack','white')
    document.documentElement.style.setProperty('--bgwhite','rgb(81, 81, 68)')
    document.documentElement.style.setProperty('--greetgray','white')
}
function whitemodeon(){
    document.documentElement.style.setProperty('--white','white')
    document.documentElement.style.setProperty('--black','black')
    document.documentElement.style.setProperty('--bgblack','#282826')
    document.documentElement.style.setProperty('--bgwhite','rgb(239, 231, 231)')
    document.documentElement.style.setProperty('--greetgray','gray')
}
// -------Dark mode /Green Mode-------

var ml=gsap.timeline();
ml.from("#line1 ,#line2",{
    height:"100%" ,
    delay:1,
    duration:1.5,
    ease: Circ,
})
.from("#line3 ,#line4",{
    width:"70%",
    delay:1.2,
    duration:2,
    ease: Circ,
},`-=3`)
.to("#loader",{
    y:"-100%",
    delay:.3,
    stagger:1,
    ease: Expo.easeInOut,
    duration:2
})
.from("#logo h2,#nbars,#shop,#hello",{
    y:20,
    stagger:.4,
    ease: Expo.easeInOut,
    duration:1.7,
    opacity:0
})
.from("#ltop h1,#ldown a",{
    x: -40,
    stagger: .2,
    ease: Expo.easeInOut,
    duration:2,
    opacity:0
},`-=2`)
.from("#ltop p,#ldown p,#ltop button",{
    x: 40,
    stagger: .2,
    ease: Expo.easeInOut,
    duration:2,
    opacity:0
},`-=2`)
.from("#square,#square img",{
    x: 60,
    stagger: .2,
    ease: Expo.easeInOut,
    duration:2,
    opacity:0
},`-=2`)
.from("#setup",{
    left:-200,
    top:-200,
    stagger: .2,
    ease: Circ,
    duration:2,
    opacity:0
},`-=2`)
.from(".circle,#darkmode", { 
    duration: 2.5, 
    ease: "bounce.out", 
    y: -500,
    opacity:0
},`-=1`);

