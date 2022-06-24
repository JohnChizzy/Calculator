// function calculator(){
//     var a = parseInt(prompt("Enter number", ));
//     var b = parseInt(prompt("Enter second number", ));
//     var operator = prompt("type in a maths operator:+ for addition- for subtraction* for multiplication/ for division% for modulus");
    
//     if (operator == "+") {
//         var result = a + b;
//     } else if(operator == "-"){
//         var result = a - b;
//     } else if(operator == "*"){
//         var result = a * b;
//     } else if(operator == "/"){
//         var result = a / b;
//     } else if(operator == "%"){
//         var result = a % b;
//     }   
    
//     return alert(result);
// }

function calculator(){
    let operator = prompt("Enter Operator(e.g + / - or *): ");
    let firstNumber = parseFloat(prompt("Enter First Number: "));
    let secondNumber = parseFloat(prompt("Enter Second Number: ",));

    
         
    let result = null;


    if (isNaN(firstNumber) || isNaN(secondNumber)){
         alert("Invalid Input")
         calculator();
      }
      else{
         if (operator == '+'){
               result = firstNumber + secondNumber;
         }
         else if(operator == '/'){
               result = firstNumber / secondNumber;
         }
         else if(operator == '-'){
               result = firstNumber - secondNumber;
         }
         else if(operator == '*'){
          result = firstNumber * secondNumber;
         }
      
      }
      
      alert('Result is ' + result);
   }
   
   calculator();

// calculator();