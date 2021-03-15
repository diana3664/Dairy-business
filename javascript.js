//declearing the value of a as 510
var a = 510;
//declearing the value of b as 308
var b = 308;
// declearing the value of c as 486
var c = 486;
// declearing the value of d as 572
var d = 572;
// declearing the production of each shed
var production = [a, b ,c ,d];
var i=0;
 while (i<production.length){
  var shed = ["A" , "B" , "C" , "D"];
  console.log("Your production in shed " + shed[i] + " " + "is" +" "+production[i] + "liters per day")
  i++;
}
//declare a new variable
var totalProduction = a+b+c+d;{
  console.log("The total production is" + " " + totalProduction + " "+"liters per day")
  document.getElementById("totals").innerHTML = "<p>The total production is " +totalProduction + " litres per day</p>"
};
var incomeOvertime = 45;
{
    console.log("Your weekly income will be ksh" + " " +incomeOvertime * totalProduction * 7)
    console.log("Your yearly income will be ksh" + " " +incomeOvertime * totalProduction * 366)
}
var month = ["January", "Febuary", "march", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = [31, 29 , 31, 30 , 31, 30, 31, 31, 30, 31, 30, 31];

var i = 0;
while(i < month.length ){
  var month = ["January", "Febuary", "march", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log("Your income for " + month[i] + " is " + days[i] * incomeOvertime * totalProduction )
console.log(days[i]);
console.log(incomeOvertime);
console.log(totalProduction);
i++; 
};

function triangle() {
  //create an array to store the sides
  var shades = [];
  //push all the sides into the array
  shades.push(document.getElementById("cow1").value);
  shades.push(document.getElementById("cow2").value);
  shades.push(document.getElementById("cow3").value);
  shades.push(document.getElementById("cow4").value);
  //assign the values of the array to variables a,b,c
  var [a,b,c,d] = shades;
  var display = document.getElementById("display");
  var explanation = document.getElementById("explanation");
  if(a.length === 0 || b.length === 0 || c.length === 0 ) {
    //check whether the user has typed something
    display.innerHTML = "<p>Please <span class='fill'>FILL</span> all the fields</p>" 
  } else {
    //convert the strings to numbers
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    //track the triangle
    track(a,b,c);
  }
}

