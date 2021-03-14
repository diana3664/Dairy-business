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
var monthlyProduction = [{
  month : "January"
  days : 31
}
{
  month : "February"
  days : 29
}
{
  month : "March"
  days : 31
}
{
  month : " April"
  days : 30
}
{
  month : "May"
  days : 31
}
{
  month : "june"
  days : 30
}
{
  month : "July"
  days : 31
}
]



