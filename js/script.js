function validation(){
    var email = document.getElementById("myemail").value;
      


    if( myemail == ""){
        document.getElementById("addemail").innerHTML = ("Email Address is required");
        return false;
    }
    
    else{
        document.write(<h2>Form is submited</h2>);
    }
}