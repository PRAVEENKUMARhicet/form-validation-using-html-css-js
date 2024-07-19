function check(){
    var firstname=document.validate.fname.value;
    var lastname=document.validate.lname.value;
    var city=document.validate.city.value;
    var number=document.validate.phone.value;
    if(firstname==null || firstname==""){
        alert("enter validate name");
        return false;
    }
    else if(lastname==null || lastname==""){
        alert("enter validate last name");
        return false;
    }
    else if(city==null || city==""){
        alert("enter a city name");
        return false;
    }
    else if(number.length!=10){
        alert("enter a 10 digit number");
        return false;
    }
}