
/*document.getElementById("Celcius-Farenheit").onclick = function() {
 input = document.getElementById("input").value;
 output = input * 9/5 + 32
 document.getElementById("output").innerHTML = output
}
*/

const input = document.getElementById("input")
const celciusTo = document.getElementById("celciusTo")
const farenheitTo = document.getElementById("farenheitTo")
const output = document.getElementById("output")

function convert() {
    if(celciusTo.checked){
        temp = Number(input.value);
        temp = temp * 9/5 + 32
       output.textContent = temp + "F"
    }

    else if(farenheitTo.checked){
        temp = Number(input.value)
        temp = (temp -32) * (5/9)
        output.textContent = temp + C   
    }

    else{
        output.textContent = "Select a unit";
    }

}



