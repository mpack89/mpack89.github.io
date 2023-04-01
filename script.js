

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


function calculate(event) // event tells it to wait for something to happen before running 

{
    var form= document.getElementById('form')
    // form.addEventListener('submit',function(event)

    event.preventDefault()// must add when using an event so it doesnt auto run
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var num3 = document.getElementById("num3").value
    var num4 = document.getElementById("num4").value
    var num5 = document.getElementById("num5").value
    var num6 = document.getElementById("num6").value
    var num7 = document.getElementById("num7").value
    var num8 = document.getElementById("num8").value
    var num9 = document.getElementById("num9").value
    var num10 = document.getElementById("num10").value
    var num11 = document.getElementById("num11").value
    var num12 = document.getElementById("num12").value
    
    console.log(num1,num2,num3,num4, num5, num6, num7, num8, num9, num10, num11, num12)

    var valuearray = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12];


    var sorted = valuearray.sort((a,b) => {
        return a - b;});
    
    var low = (sorted.slice(0,6));
    
    

    console.log(low)
    
    var handicap = low.reduce((acc, curVal) => {
        return Number(acc) + Number(curVal);
      });
    
    console.log(handicap)
    
    var sum = (handicap / 6)

    document.getElementById("txtSum").value =(sum)
}