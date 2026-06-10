document
.getElementById("btnExplorar")
.addEventListener("click",()=>{

document
.getElementById("sobre")
.scrollIntoView({
behavior:"smooth"
});

});

const counters =
document.querySelectorAll(".contador");

counters.forEach(counter=>{

const update=()=>{

const target=
+counter.getAttribute("data-target");

const current=
+counter.innerText;

const increment=
target/100;

if(current<target){

counter.innerText=
Math.ceil(current+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});