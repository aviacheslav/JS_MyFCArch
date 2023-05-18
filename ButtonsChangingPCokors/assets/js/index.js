const paragraphToChangeColor=document.querySelector("p");
console.log(paragraphToChangeColor);
//const [redBtn, bluBtn, grnBtn, OrngBtn]=document.querySelector("button");
const [redBtn, blueBtn, greenBtn, orngBtn]=document.getElementsByTagName("button");
//const btns=document.querySelector("button");
//const [redBtn, bluBtn, grnBtn, OrngBtn] btns;
console.log(orngBtn);

function PaintParagraph(event){
    //debugger;
    //const btn=event.target;
    if(event.target.dataset.btncolor=="red"){
        paragraphToChangeColor.style.backgroundColor="red";
    }else if(event.target.dataset.btncolor=="blue"){
        paragraphToChangeColor.style.backgroundColor="blue";
    }else if(event.target.dataset.btncolor=="green"){
        paragraphToChangeColor.style.backgroundColor="green";    
    }else if(event.target.dataset.btncolor=="orange"){
        paragraphToChangeColor.style.backgroundColor="orange";
    }
}

redBtn.addEventListener("click", PaintParagraph);
blueBtn.addEventListener("click", PaintParagraph);
greenBtn.addEventListener("click", PaintParagraph);
orngBtn.addEventListener("click", PaintParagraph);

