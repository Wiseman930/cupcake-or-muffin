
// this function compares the price of a muffin & a cupcake
function whatToBuy(cupcake_price, muffin_price){

	if(cupcake_price > muffin_price){
		return "Buy a muffin"
	}
	// Buy a muffin

	else if(cupcake_price < muffin_price){
		return 'Buy a cupcake'
	}
	// But a cupcake

}

const checkbutton = document.querySelector('.button');
const cupcakeElement = document.querySelector('.cupcake_price');
const muffinElement = document.querySelector('.muffin_price');
const messageDisplay = document.querySelector('.message')


// this function compares the price of a muffin & a cupcake
function whatToBuy2(){
	var cupcake_price = Number(cupcakeElement.value);
	var muffin_price = Number(muffinElement.value)

	if(muffin_price < cupcake_price){
		messageDisplay.innerHTML = "Buy a muffin";
	}
	else if(cupcake_price < muffin_price ){
		messageDisplay.innerHTML = "Buy a cupcake";
	}
	// But a cupcake
}
checkbutton.addEventListener('click', whatToBuy2)