bighornSheep.addEventListener('click',function(){
	/*pagetitle.innerHTML = "Bighorn Sheep";*/
	console.log("Bighorn Sheep");
	document.body.classList.remove("blackBear");
	document.body.classList.remove("Moose");
	document.body.classList.remove("Wolf");
	document.body.classList.remove("Elk");	
	document.body.classList.add('bighornSheep');
	document.getElementById('animals').src="sheep.webp";
	document.getElementById('animals').alt="sheep";
	document.getElementById('bighornSheep').style.backgroundColor = "#97bf04"; 
	document.getElementById('blackBear').style.backgroundColor = "#d9043d"; 
	document.getElementById('Moose').style.backgroundColor = "#d9043d"; 
	document.getElementById('Wolf').style.backgroundColor = "#d9043d"; 
	document.getElementById('Elk').style.backgroundColor = "#d9043d"; 
})

blackBear.addEventListener('click',function(){
	/*pagetitle.innerHTML = "Black Bear";*/
	console.log("Black Bear");
	document.body.classList.add("blackBear");
	document.body.classList.remove("Moose");
	document.body.classList.remove("Wolf");
	document.body.classList.remove("Elk");	
	document.body.classList.remove('bighornSheep');
	document.getElementById('animals').src="bear.webp";
	document.getElementById('animals').alt="bear";
	document.getElementById('blackBear').style.backgroundColor = "#97bf04"; 
	document.getElementById('bighornSheep').style.backgroundColor = "#d9043d"; 
	document.getElementById('Moose').style.backgroundColor = "#d9043d"; 
	document.getElementById('Wolf').style.backgroundColor = "#d9043d"; 
	document.getElementById('Elk').style.backgroundColor = "#d9043d"; 	
})

Moose.addEventListener('click',function(){
	/*pagetitle.innerHTML = "Moose";*/
	console.log("Bighorn Sheep");
	document.body.classList.remove("blackBear");
	document.body.classList.remove("Moose");
	document.body.classList.remove("Wolf");
	document.body.classList.remove("Elk");	
	document.body.classList.add('bighornSheep');
	document.getElementById('animals').src="moose.webp";
	document.getElementById('animals').alt="moose";
	document.getElementById('Moose').style.backgroundColor = "#97bf04"; 
	document.getElementById('bighornSheep').style.backgroundColor = "#d9043d"; 
	document.getElementById('blackBear').style.backgroundColor = "#d9043d"; 
	document.getElementById('Wolf').style.backgroundColor = "#d9043d"; 
	document.getElementById('Elk').style.backgroundColor = "#d9043d"; 		
})

Wolf.addEventListener('click',function(){
	/*pagetitle.innerHTML = "Wolf";*/
	console.log("Wolf");
	document.body.classList.remove("blackBear");
	document.body.classList.remove("Moose");
	document.body.classList.remove("Wolf");
	document.body.classList.remove("Elk");	
	document.body.classList.add('bighornSheep');
	document.getElementById('animals').src="wolf.webp";
	document.getElementById('animals').alt="wolf";
	document.getElementById('Wolf').style.backgroundColor = "#97bf04"; 
	document.getElementById('bighornSheep').style.backgroundColor = "#d9043d"; 
	document.getElementById('blackBear').style.backgroundColor = "#d9043d"; 
	document.getElementById('Moose').style.backgroundColor = "#d9043d"; 
	document.getElementById('Elk').style.backgroundColor = "#d9043d"; 	
})

Elk.addEventListener('click',function(){
	/*pagetitle.innerHTML = "Elk";*/
	console.log("Bighorn Sheep");
	document.body.classList.remove("blackBear");
	document.body.classList.remove("Moose");
	document.body.classList.remove("Wolf");
	document.body.classList.remove("Elk");	
	document.body.classList.add('bighornSheep');
	document.getElementById('animals').src="sheep.webp";
	document.getElementById('animals').alt="sheep";
	document.getElementById('Elk').style.backgroundColor = "#97bf04"; 
	document.getElementById('bighornSheep').style.backgroundColor = "#d9043d"; 
	document.getElementById('blackBear').style.backgroundColor = "#d9043d"; 
	document.getElementById('Moose').style.backgroundColor = "#d9043d"; 
	document.getElementById('Wolf').style.backgroundColor = "#d9043d"; 		
})




