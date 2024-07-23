const form = document.querySelector('form')
form.onsubmit = checkDetails

function checkDetails(e) {
    e.preventDefault()

    var fname = document.querySelector(".fname").value;
    var lname = document.querySelector(".lname").value;
    var pass = document.querySelector(".pass").value;
    var passC = document.querySelector(".passC").value;
    var email = document.querySelector(".email").value;
    var number = document.querySelector(".number").value;

    //First name
    if (fname == '' || fname.length > 15) {
        document.querySelector(".fname-massage").style.display = "block";
    } else {
        document.querySelector(".fname-massage").style.display = "none";
    }

    if (lname == '' || lname.length > 10) {
        document.querySelector(".fname-massage1").style.display = "block";
    }
    else {
        document.querySelector(".fname-massage1").style.display = "none";
    }

    //Password
    if (pass == '' || pass.length < 8) {
        document.querySelector(".fname-massage2").style.display = "block";
    }
    else {
        document.querySelector(".fname-massage2").style.display = "none";
    }

    //Confirm Password
    if (passC == '' || passC != pass) {
        document.querySelector(".fname-massage6").style.display = "block";
    }
    else {
        document.querySelector(".fname-massage6").style.display = "none";
    }

//Email
    if(email == '')
    {
        document.querySelector(".fname-massage4").style.display = "block";
    }
    else{
        document.querySelector(".fname-massage4").style.display = "none";
    }

//Phone Number
    if(number == '' || number.length>11)
    {
        document.querySelector(".fname-massage5").style.display = "block";
    }
    else{
        document.querySelector(".fname-massage5").style.display = "none";
    }

}