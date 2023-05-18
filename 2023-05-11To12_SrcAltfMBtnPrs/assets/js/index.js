
const imgs=[['BikeAndCar.jpg', 'BikeAndCar'],['ships.jpg', 'ships']];
const [img]=document.getElementsByTagName('img');//decompos - first of array

let count=0;
let pictureN=1;

function btnHandler(event){
    if(pictureN==imgs.length){
		pictureN=1;
	}else{
		pictureN++;
	};
	img.setAttribute("src", "assets/img/"+imgs[pictureN-1][1-1]);
	img.setAttribute("alt", imgs[pictureN-1][2-1]);
}

const [firstButton]=document.getElementsByTagName('button');

firstButton.addEventListener('click', btnHandler);




