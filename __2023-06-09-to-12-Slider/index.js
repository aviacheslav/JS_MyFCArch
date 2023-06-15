let items=document.querySelectorAll("section");
//removeAttribute
let activeItemN;
let activeItem, classList, item;
let slidesCount=items.length;
//
//
function getActiveSlide(){
	for(let i=1; i<=slidesCount; i++){
		item=items[i-1];
		listOfClasses=item.classList;
		for(classItem of listOfClasses){
			if(classItem=='sectionVisible'){
				activeItemN=i;
				break;
			}
		}
	}
	item=items[activeItemN-1];
	return item;
}
//
//

const buttonLeft=document.querySelector(".leftButton");
const buttonRight=document.querySelector(".rightButton");

buttonLeft.addEventListener("click", ()=>{
	changeSlide('prev')
})

buttonRight.addEventListener('click', ()=>{
	changeSlide('next')
})

function changeSlide(direction){
	activeItem=getActiveSlide();
	//activeItem.removeAttribute("sectionVisible");
	//activeItem.classList.pop();//so ne works
	activeItem.removeAttribute("class", "sectionVisible");
	activeItem.setAttribute("class", "sectionInvisible");
	//
	if(direction === 'next'){
		activeItemN++
		if(activeItemN > slidesCount){
			activeItemN=1;
		}
	}else if(direction === 'prev'){
		activeItemN--
		if(activeItemN <1){
			activeItemN=slidesCount
		}
	}
	activeItem=items[activeItemN-1];
	//activeItem.classList.pop();//so ne works
	activeItem.removeAttribute("class", "sectionVisible");
	//activeItem.classList.push("sectionVisible");
	activeItem.setAttribute("class", "sectionVisible");
}