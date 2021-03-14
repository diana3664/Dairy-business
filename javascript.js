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
};
var incomeOvertime = 45;{
    console.log("Your weekly income will be ksh" + " " +incomeOvertime * totalProduction * 7)
    console.log("Your yearly income will be ksh" + " " +incomeOvertime * totalProduction * 366)
}
var month = ["January", "Febuary", "march", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = [31, 29 , 31, 30 , 31, 30, 31, 31, 30, 31, 30, 31]
while(i < month.length ,days.length){
console.log("Your income for " + month[i] + "is" + days[i] * incomeOvertime * totalProduction )
i++;
};
