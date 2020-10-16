
	function mufun(){
		var a = document.getElementById("password").value;
		var b = document.getElementById("pass").value;
		
		if(a.lenth < 5){
			document.getElementById("message-box").innerHTML="Password lenth must be greater than 5 character";
			return false;
		}
		
		if(a.lenth > 25){
			document.getElementById("message-box").innerHTML="Password lenth must be lesser than 25 character";
			return false;
		}
		
		if(a!=b){
			document.getElementById("message-box").innerHTML="Password not much";
			return false;
		}
	}
