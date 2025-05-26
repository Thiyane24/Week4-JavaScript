 function lesson1(){
            document.getElementById("heading1").innerHTML="This is JavaScript!";
                document.getElementById("text1").innerHTML="How are you?";

        }

        function lesson2() {
            var message1 = "Hello everyone!";
            var message2 ="I love JavaScript!";
            var message3 = "It's awesome!";

            document.getElementById("heading2").innerHTML= message1;
            document.getElementById("text2").innerHTML= message2 + " "+ message3;
        

            
        }

        function lesson3() {
            var num1 = 15;
            var num2 = 35;
            document.getElementById("math").innerHTML= num1 + " x " + num2 + " = " + (num1 * num2);
            
        }
function lesson4() {
    

   var userPassword = document.getElementById("password").value;
   
   if (userPassword == "007"){
document.getElementById("result4").innerHTML="Correct Password, you are logged in!";
   } else {
document.getElementById("result4").innerHTML="Wrong Password, please try again.";
   }
   

   }

   function toggleText() {
    var toggle = document.getElementById("toggle");
    if (toggle.innerHTML == "JavaScript"){
        toggle.innerHTML="Is awesome!";

    } else {
        toggle.innerHTML="JavaScript";
    }
   }

   function addNumbers(num1, num2) {
    document.getElementById("addition7").innerHTML = num1 + " + " + num2 + " = " + (num1 + num2);
    
   }

   function runLesson8() {
    document.getElementById("addition8").innerHTML= "10 + 7 = " + addNumbersReturn(10, 7);
   }

   function addNumbersReturn(num1, num2) {
    return num1 + num2 ;

    
   }
var globalVariable = "I am a global variable";
    
   function demonstrateScope() {
    var localVariable = "I am a local variable";
    document.getElementById("scopeOutput").innerHTML = 
    "Global: "+ globalVariable + "  " +
    "Local: " + localVariable +"  " +
    "Local variables only exist inside their function!";
    
   }

   function demonstrateLocalScope() {
    document.getElementById("scopeOutput").innerHTML = localVariable;
    
   }