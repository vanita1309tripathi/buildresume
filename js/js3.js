document.getElementById("form-button").addEventListener("click", function callback() {
    event.preventDefault();
    var validation = validate();
    if (validation == true) {
       showInput();
    }
});
function validate() {
    var name = document.getElementById("user_input");
    var email = document.getElementById("user_input3");
    var add = document.getElementById("user_input2");
    var contact = document.getElementById("user_input4");
    var objective = document.getElementById("obj");
    var experience = document.getElementById("user_input12-1");

    if (name.value == "") {
        alert("please enter your name");
        return false;
    }
    else if (email.value == "") {
        alert("please enter your email");
        return false;
    }
    else if (add.value == "") {
        alert("please enter the address");
        return false;
    }
    else if (contact.value == "") {
        alert("please fill the contact");
        return false;
    }
    else if (objective.value == "") {
        alert("please fill the objective");
        return false;
    }

    else if (experience.value == "") {
        alert("please fill the experience");
        return false;
    }
    else {
        return true;
    }
}


function showInput() {
    // console.log("1st");
    document.getElementById('display').innerHTML = document.getElementById("user_input").value;

    // document.getElementById('display1').innerHTML = document.getElementById("user_input1").value;

    document.getElementById('display2').innerHTML = document.getElementById("user_input2").value;

    document.getElementById('display3').innerHTML = document.getElementById("user_input3").value;

    document.getElementById('display4').innerHTML = document.getElementById("user_input4").value;

    document.getElementById('displayobj').innerHTML = document.getElementById("obj").value;

    document.getElementById('display5').innerHTML = document.getElementById("user_input5").value;

    document.getElementById('display6').innerHTML = document.getElementById("user_input6").value;

    document.getElementById('display7').innerHTML = document.getElementById("user_input7").value;

    document.getElementById('display8').innerHTML = document.getElementById("user_input8").value;

    document.getElementById('display9').innerHTML = document.getElementById("user_input9").value;

    document.getElementById('display10').innerHTML = document.getElementById('user_input10').value;

    document.getElementById("displayyear1").innerHTML = document.getElementById("year1").value;
    document.getElementById("displaybu1").innerHTML = document.getElementById("bu1").value;
    document.getElementById("displayper1").innerHTML = document.getElementById('per1').value;


    document.getElementById("displayyear2").innerHTML = document.getElementById("year2").value;
    document.getElementById("displaybu2").innerHTML = document.getElementById("bu2").value;
    document.getElementById("displayper2").innerHTML = document.getElementById('per2').value;


    document.getElementById("displayyear3").innerHTML = document.getElementById("year3").value;
    document.getElementById("displaybu3").innerHTML = document.getElementById("bu3").value;
    document.getElementById("displayper3").innerHTML = document.getElementById('per3').value;


    document.getElementById('display12-1').innerHTML = document.getElementById('user_input12-1').value;
    document.getElementById('display12-2').innerHTML = document.getElementById('user_input12-2').value;
    // document.getElementById('display12-3').innerHTML = document.getElementById('user_input12-3').value;

    document.getElementById('display13').innerHTML = document.getElementById('user_input13').value;

    document.getElementById('display14').innerHTML = document.getElementById('user_input14').value;

    
}


function printDiv(divName) {

    var doc = new jsPDF();

    doc.setFontType("bold");
    doc.setTextColor(139, 62, 47);
    doc.setFontSize(30);
    doc.text(10, 27, document.getElementById("user_input").value);

    doc.setTextColor(205, 91, 69);
    doc.setFontType("normal");
    doc.setFontSize(12);

    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.setTextColor(131, 111, 255);
    doc.text(10, 40, "Contact");
    doc.setFontType("normal");

    doc.setTextColor(131, 111, 255);
    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.text(10, 80, "Objective");

    doc.setFontType("normal");
    doc.setTextColor(47, 79, 79);
    doc.setFontSize(12);
    var ob1 = doc.splitTextToSize(document.getElementById("obj").value, 190);
    doc.text(ob1, 10, 87);


    doc.setTextColor(47, 79, 79);
    doc.setFontType("normal");
    doc.setFontSize(12);
    doc.text(10, 50, "+91: " + document.getElementById("user_input4").value);
    doc.text(10, 56, document.getElementById("user_input3").value);
    doc.text(10, 62, document.getElementById("user_input2").value);

    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.setTextColor(131, 111, 255);
    doc.text(10, 162, "Technical Skills");

    doc.setTextColor(47, 79, 79);
    doc.setFontType("normal");
    doc.setFontSize(12);
    var ob2 = doc.splitTextToSize(document.getElementById("user_input5").value, 25);
    doc.text(ob2, 10, 168);

    doc.setTextColor(47, 79, 79);
    doc.setFontType("normal");
    doc.setFontSize(12);
    var ob2 = doc.splitTextToSize(document.getElementById("user_input6").value, 25);
    doc.text(ob2, 10, 174);

    doc.setTextColor(47, 79, 79);
    doc.setFontType("normal");
    doc.setFontSize(12);
    var ob2 = doc.splitTextToSize(document.getElementById("user_input7").value, 25);
    doc.text(ob2, 60, 168);

    doc.setTextColor(47, 79, 79);
    doc.setFontType("normal");
    doc.setFontSize(12);
    var ob2 = doc.splitTextToSize(document.getElementById("user_input8").value, 25);
    doc.text(ob2, 60, 174);

    doc.setTextColor(47, 79, 79);
    doc.setFontType("normal");
    doc.setFontSize(12);
    var ob2 = doc.splitTextToSize(document.getElementById("user_input9").value, 25);
    doc.text(ob2, 110, 168);

    doc.setTextColor(47, 79, 79);
    doc.setFontType("normal");
    doc.setFontSize(12);
    var ob2 = doc.splitTextToSize(document.getElementById("user_input10").value, 25);
    doc.text(ob2, 110, 174);

    doc.setTextColor(131, 111, 255);
    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.text(10, 106, "Qualification");

    doc.setTextColor(0, 204, 255);
    doc.setFontSize(14);
    doc.text(10, 112, document.getElementById("year1").value);
    doc.setFontSize(12);
    doc.setTextColor(47, 79, 79);
    doc.text(10, 118, "Graduation              :" + document.getElementById("bu1").value + " University    " + document.getElementById("per1").value + "%");

    doc.setTextColor(0, 204, 255);
    doc.setFontSize(14);
    doc.text(10, 126, document.getElementById("year2").value);
    doc.setFontSize(12);
    doc.setTextColor(47, 79, 79);
    doc.text(10, 130, "12th                         :" + document.getElementById("bu2").value + " Board   " + document.getElementById("per2").value + "%");

    doc.setTextColor(0, 204, 255);
    doc.setFontSize(14);
    doc.text(10, 138, document.getElementById("year3").value);
    doc.setFontSize(12);
    doc.setTextColor(47, 79, 79);
    doc.text(10, 144, "10th                         :" + document.getElementById("bu3").value + " Board    " + document.getElementById("per3").value + "%");

    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.setTextColor(131, 111, 255);
    doc.text(10, 184, "Experience/Projects");

    doc.setTextColor(47, 79, 79);
    doc.setFontType("normal");
    doc.setFontSize(12);
    var ob3 = doc.splitTextToSize(document.getElementById("user_input12-1").value, 190);
    doc.text(ob3, 10, 190);

    doc.setTextColor(47, 79, 79);
    doc.setFontType("normal");
    doc.setFontSize(12);
    var ob10 = doc.splitTextToSize(document.getElementById("user_input12-2").value, 190);
    doc.text(ob10, 10, 214);


    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.setTextColor(131, 111, 255);
    doc.text(10, 251, "Hobbies/Area of Interest");

    doc.setTextColor(47, 79, 79);
    doc.setFontType("normal");
    doc.setFontSize(12);
    var ob4 = doc.splitTextToSize(document.getElementById("user_input13").value, 190);
    doc.text(ob4, 10, 257);

    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.setTextColor(131, 111, 255);
    doc.text(10, 277, "Certifications");

    doc.setTextColor(47, 79, 79);
    doc.setFontType("normal");
    doc.setFontSize(12);
    var ob5 = doc.splitTextToSize(document.getElementById("user_input14").value, 190);
    doc.text(ob5, 10, 283);
    // doc.text(10, 256, document.getElementById("cer").value);

    doc.save("Resume.pdf");

    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    // window.print();
    document.body.innerHTML = originalContents;
}


