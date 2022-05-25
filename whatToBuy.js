const checkbutton = document.querySelector('.button');
const cupcakeElement = document.querySelector('.cupcake_price');
const muffinElement = document.querySelector('.muffin_price');
const message = document.querySelector('.message')


// this function compares the price of a muffin & a cupcake
function whatToBuy(){
	var cupcakeValue = Number(cupcakeElement.value);
	var muffinValue = Number(muffinElement.value)

	if(muffinValue < cupcakeValue){
		var giveMuffin = "Buy a muffin";
		message.innerHTML = giveMuffin;
	}
	if(cupcakeValue < muffinValue ){
		var giveCupcake = "Buy a cupcake";
		message.innerHTML = giveCupcake;
	}
	// But a cupcake
}
checkbutton.addEventListener('click', whatToBuy)