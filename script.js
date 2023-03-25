

function reset()

{
    document.getElementById("txtNum1").value = "0";
    document.getElementById("txtNum2").value = "0";
    document.getElementById("txtNum3").value = "0";
    document.getElementById("txtNum4").value = "0";
    document.getElementById("txtNum5").value = "0";
    document.getElementById("txtNum6").value = "0";
    document.getElementById("txtNum7").value = "0";
    document.getElementById("txtNum8").value = "0";
    document.getElementById("txtNum9").value = "0";
    document.getElementById("txtNum10").value = "0";
    document.getElementById("txtNum11").value = "0";
    document.getElementById("txtNum12").value = "0";
    document.getElementById("txtSum").value = "0";
}

function calculate()
{
    var num1 = Number(document.getElementById("txtNum1").value);
    var num2 = Number(document.getElementById("txtNum2").value);
    var num3 = Number(document.getElementById("txtNum3").value);
    var num4 = Number(document.getElementById("txtNum4").value);
    var num5 = Number(document.getElementById("txtNum5").value);
    var num6 = Number(document.getElementById("txtNum6").value);
    var num7 = Number(document.getElementById("txtNum7").value);
    var num8 = Number(document.getElementById("txtNum8").value);
    var num9 = Number(document.getElementById("txtNum9").value);
    var num10 = Number(document.getElementById("txtNum10").value);
    var num11 = Number(document.getElementById("txtNum11").value);
    var num12 = Number(document.getElementById("txtNum12").value);
    var sum = num1 + num2 + num3;
    document.getElementById("txtSum").value = String(sum);
}

