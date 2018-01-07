var button = document.getElementById("butt");
console.log(button);

var transmit = function(e){
    var input = document.getElementById("input").value;

    $.ajax({
	url: "/foo", // sends to foo page
	type: "GET", // GET/POST request
	data: {"text":input}, //sends {"text": input} - text is a new var
	success: function(d){
	    /*
	    d = JSON.parse(d);
	    console.log(d["uc"]);
	    document.getElementById("h2").innerHTML = d["uc"];
	    */
	    console.log(d);
	    button.innerHTML = d;
	} //end success callback
    }); // end ajax call
}

var interval = 1000 * 5; //5 seconds

//button.addEventListener('click', transmit);

setInterval(transmit, interval);
