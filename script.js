//Lesson 1
function lesson1(){
            document.getElementById("heading1").innerHTML="This is JavaScript!";
                document.getElementById("text1").innerHTML="How are you?";

        }
//Lesson 2 
        function lesson2() {
            var message1 = "Hello everyone!";
            var message2 ="I love JavaScript!";
            var message3 = "It's awesome!";

            document.getElementById("heading2").innerHTML= message1;
            document.getElementById("text2").innerHTML= message2 + " "+ message3;
        

            
        }
//Lesson 3
        function lesson3() {
            var num1 = 15;
            var num2 = 35;
            document.getElementById("math").innerHTML= num1 + " x " + num2 + " = " + (num1 * num2);
            
        }
//Lesson 4
function lesson4() {
    

   var userPassword = document.getElementById("password").value;
   
   if (userPassword == "007"){
document.getElementById("result4").innerHTML="Correct Password, you are logged in!";
   } else {
document.getElementById("result4").innerHTML="Wrong Password, please try again.";
   }
   

   }
//Lesson 6
   function toggleText() {
    var toggle = document.getElementById("toggle");
    if (toggle.innerHTML == "JavaScript"){
        toggle.innerHTML="Is awesome!";

    } else {
        toggle.innerHTML="JavaScript";
    }
   }
//Lesson 7
   function addNumbers(num1, num2) {
    document.getElementById("addition7").innerHTML = num1 + " + " + num2 + " = " + (num1 + num2);
    
   }
//Lesson 8
   function runLesson8() {
    document.getElementById("addition8").innerHTML= "10 + 7 = " + addNumbersReturn(10, 7);
   }

   function addNumbersReturn(num1, num2) {
    return num1 + num2 ;

    
   }
   //Lesson 9
var globalVariable = "I am a global variable";
    
   function demonstrateScope() {
    var localVariable = "I am a local variable";
    document.getElementById("scopeOutput").innerHTML = 
    "Global: "+ globalVariable + "      " +
    "Local: " + localVariable +"     " +
    "Local variables only exist inside their function!";
    
   }

   function demonstrateLocalScope() {
    document.getElementById("scopeOutput").innerHTML = localVariable;
    
   }

   function verifyUser() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("pw").value;

      checkUserCreds(username, password);
   }

   function checkUserCreds(username, password) {
      var systemUsername = "Thiyane";
      var systemPw = "007";
      if(username == systemUsername && password == systemPw){
         document.getElementById("message").innerHTML="Correct, you are logged in";

      }
      else{
         document.getElementById("message").innerHTML="Wrong details, please try again";
      }
   }

   function btnPressed() {
      var weatherSelected = document.getElementById("weather").value;
      var advice;

      switch(weatherSelected){
         case "sunny" :
            advice = "Wear your sunglasses";
            break;
         case "windy" :
            advice = "Wear a jacket";
            break;
            case "rainy" :
               advice ="Take your umbrella";
               break;
            case "snowy" :
               advice ="Dress warm clothes";
               break;
            case "cloudy" :
               advice = "Beware of the weather";
               break;
      }
      document.getElementById("outputText").innerHTML="Weather advice : " + advice;
   }

   var text1 ="4";
   var text2 = "3";
   var num1 = stringToNumber(text1);
   var num2 = stringToNumber(text2);
   document.getElementById("output").innerHTML= num1 + num2;

   function stringToNumber(text) {
      return parseInt(text);
   }