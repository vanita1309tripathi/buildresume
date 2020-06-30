document.getElementById("form-button").addEventListener("click", function callback() {
    event.preventDefault();
    var validation = validate();
    if (validation == true) {
        printDiv('printableArea')
    }
});
function validate() {
    var name = document.getElementById("user_input");
    var email = document.getElementById("user_input3");
    var add = document.getElementById("user_input2");
    var contact = document.getElementById("user_input4");
    var education = document.getElementById("user_input11-1");
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
    else if (education.value == "") {
        alert("please fill your Qualifications");
        return false;
    }

    else if (experience.value == "") {
        alert("please fill your experience");
        return false;
    }
    else {
        return true;
    }
}


function showInput() {
    document.getElementById('display').innerHTML = document.getElementById("user_input").value;

    document.getElementById('display1').innerHTML = document.getElementById("user_input1").value;

    document.getElementById('display2').innerHTML = document.getElementById("user_input2").value;

    document.getElementById('display3').innerHTML = document.getElementById("user_input3").value;

    document.getElementById('display4').innerHTML = document.getElementById("user_input4").value;

    document.getElementById('display5').innerHTML = document.getElementById("user_input5").value;

    document.getElementById('display6').innerHTML = document.getElementById("user_input6").value;

    document.getElementById('display7').innerHTML = document.getElementById("user_input7").value;

    document.getElementById('display8').innerHTML = document.getElementById("user_input8").value;

    document.getElementById('display9').innerHTML = document.getElementById("user_input9").value;

    document.getElementById('display10').innerHTML = document.getElementById('user_input10').value;

    document.getElementById('display11-1').innerHTML = document.getElementById('user_input11-1').value;
    document.getElementById('display11-2').innerHTML = document.getElementById('user_input11-2').value;
    document.getElementById('display11-3').innerHTML = document.getElementById('user_input11-3').value;

    document.getElementById('display12-1').innerHTML = document.getElementById('user_input12-1').value;
    document.getElementById('display12-2').innerHTML = document.getElementById('user_input12-2').value;
    document.getElementById('display12-3').innerHTML = document.getElementById('user_input12-3').value;

    document.getElementById('display13').innerHTML = document.getElementById('user_input13').value;

    document.getElementById('display14').innerHTML = document.getElementById('user_input14').value;


    var preview = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;

    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "Image/img3.jpg";
    }
}

function printDiv(divName) {

    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}