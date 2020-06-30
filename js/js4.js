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