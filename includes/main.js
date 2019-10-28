/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	//'images/pexels-photo-132037.jpg',
	'images/pretty.jpg',
];

function initiateApp(){
	//advanced: add jquery sortable call rebuilds the images array into the new order
	$("#gallery").sortable();
	makeGallery(pictures);
	addModalCloseHandler();
}


//uses loops and jquery dom creation to make the html structure inside the #gallery section
function makeGallery(imageArray){
	//loop to goes through the images in the imageArray
	for (var imageArrayIndex = 0; imageArrayIndex < imageArray.length; imageArrayIndex++){

		//creates the elements needed for each picture and stores the elements in variable
		var picElements = $('<figure>', {
			class: "imageGallery col-xs-12 col-sm-6 col-md-4",
			style: "background-image:url('" + imageArray[imageArrayIndex] + "')"
		});

		var caption = $("figcaption").slice('images/');
		//click handler to  call the "displayImage" function.
		picElements.click(displayImage);

		//appends the element to the #gallery section
		$("#gallery").append(picElements);
	}
}
	// note: hard coded html in the index.html has been removed by commenting out


function displayImage(){
	//finds the url of the image by grabbing the background-image source, stores it in a variable
	var imgURL = $(this).css("background-image");

	//grabs the direct url of the image by getting rid of unneeded peices
	var x = (imgURL.lastIndexOf('images')+7);  //changed from images to pexels 10/5

	//end of one img is jpeg, not jpg.  Need to create a variable y that will go into slice(x,y)
	var y = (imgURL.lastIndexOf('jp')-1); //changed -2 to -1  10/5

	//grabs the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037. UseslastIndexOf method
	var imageName = imgURL.slice(x,y);
	//changes the modal-title text to the name above
	$(".modal-title").html(imageName);

	//changes the src of the image in the modal to the url of the image that was clicked on by slicing imgURL into the direct path
	var newX = imgURL.lastIndexOf('images');  //imgURL.lastOfIndex('images');
	var newY = imgURL.length-2;  //imgURL.length;
	var newURL = imgURL.slice(newX, newY);
	$(".modalPic").attr("src", newURL);

	//show the modal with JS.  Refer to https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
	$("#galleryModal").modal("show");
}

//click handler added to modal image to close modal when clicked
function closeTheModal() {
	$(".modal").modal("hide");
}
function addModalCloseHandler() {
	$("img").click(closeTheModal);
}
