const grayHeart = document.querySelector(".gray-heart");
const redHeart = document.querySelector(".red-heart");
const stopButton = document.querySelector(".button-stop");
var interval = 0;
grayHeart.addEventListener("click", () => {
	//console.log(redHeart.classList);
	redHeart.classList.add("animation");
	interval = setInterval(function()
	{
		setTimeout(function(){
			if(!grayHeart.classList.contains("fill-color"))
			{
				grayHeart.classList.add("fill-color");
			}
			if(redHeart.classList.contains("animation"))
			{
				redHeart.classList.remove("animation");
			}
			
		}, 500);
		redHeart.classList.add("animation");
		
	}, 1000);
  
});

stopButton.addEventListener("click", () => 
{
	clearInterval(interval);
	interval = 0;
	redHeart.classList.remove("animation");
	grayHeart.classList.remove("fill-color");
});