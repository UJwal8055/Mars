canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var background_imgTag =  new Image();

// 4. Add the size for the rover:
rover_width =  80;
rover_height =  70 ;

background_image = "mars.jpg";

rover_image = "COOL_ROVER.png";

// 5. Add the position on x and y for the rover:
rover_x = 10;
rover_y = 10;

// 6. Define the add function:
   function add (){
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	  rover_imgTag = new Image();//defining a variable with a new image for the rover
	 rover_imgTag.onload = uploadrover;// setting a function, onloading this variable
     rover_imgTag.src= rover_image;// load the rover image
}


// 8. Declare the function uploadBackground
 function uploadBackground(){
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e){

	// 10. Set e.keyCode as the value for this variable to get the value of the key the user is pressing on: 
	keyPressed =  e.keyCode ;

	console.log(keyPressed);

		// 11. Complete the ASCII values for each IF Statement: 
		if(keyPressed == '38'){
			up();
			console.log("up");
		}

		if(keyPressed == '40' ){
			down();
			console.log("down");
			 
		}

		if( keyPressed == '37' ){
			left();
			 console.log("left");
		}

		if( keyPressed =='39'  ){
			right();
			console.log("right");
		}
}

function up(){
	if(rover_y>=0){
	rover_y= rover_y - 10;
	uploadBackground();
	uploadrover();
	}
}

function down(){
	if(rover_y<=520){
	rover_y= rover_y + 12
	uploadBackground();
	uploadrover();
	}
}

function left (){
	if(rover_x>=0){
	rover_x = rover_x - 9
	uploadBackground();
	uploadrover();
	}
}

function right(){
	if(rover_x<=720){
	rover_x=rover_x + 9
	uploadBackground();
	uploadrover();
	}
}








