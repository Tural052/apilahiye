const number1 = document.getElementById("number1");
const number2 = document.getElementById('number2');
const selectBox1 = document.getElementById('value1')
const selectBox2 = document.getElementById('value2')
const input1 = document.getElementById('number1')
eventListers();

function eventListers(){
    input1.addEventListener("keyup",selectBoxcatagory1)
    selectBox2.addEventListener('change',selectBoxcatagory1)
}


function selectBoxcatagory1(){
    let value1 = parseFloat(number1.value.trim());
    let value2 = number2;
    let catagory = selectBox1.value;
    let catagory2 = selectBox2.value;
    if(catagory === 'RUB'){
        if(catagory2 === 'USD'){
        number2.value = value1*0.016;
        }else if(catagory2 === 'EUR'){
            number2.value = value1*0.016;
        }else if(catagory2 === 'GBP'){
            number2.value = value1*0.014;

        }else{
            number2.value = value1
        }
    }
}

