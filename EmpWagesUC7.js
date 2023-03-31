//Calaulate wages till condition
const Is_Part_Time = 1;
const Is_Full_Time = 2;
const Part_Time_Hrs = 4;
const Full_Time_Hrs = 8;
const Emp_Wage_Per_Hour = 20;
const Max_Working_Days=20;
const Max_Working_Hours=100;
let EmpWage = 0;
let TotalWage=0;
let TotalHrs=0;
let day=1;
let empWageArray = new Array();

let empAttendanceCheck = Math.floor(Math.random() * 10) % 3;
function getworkingHours(empAttendanceCheck) {
    switch (empAttendanceCheck) {
        case Is_Full_Time:
            return Full_Time_Hrs;


        case Is_Part_Time:
            return Part_Time_Hrs;

        default:
            EmpHrs = 0;
            return EmpHrs;
    }
}
while(day<=Max_Working_Days && TotalHrs<=Max_Working_Hours)
{
    EmpHrs = getworkingHours(empAttendanceCheck);
    EmpWage = Emp_Wage_Per_Hour * EmpHrs;
    TotalWage = TotalWage + EmpWage;
    empWageArray.push(EmpWage);
    day=day+1;
    TotalHrs =TotalHrs+EmpHrs;
}
console.log("UC5-Total wage is:"+TotalWage +" for "+(day-1)+ " days and for hours "+TotalHrs);
console.log("UC6 - Daily wage Array:\n"+empWageArray);

let total=0
function getTotalWage(dailyWage)
{
  total = total+dailyWage;
}
empWageArray.forEach(getTotalWage);
console.log("UC7-A -UsingForeach helper function : "+total);

let dayCount=0;
function mapDayWithWageFunc(dailyWage)
{
    dayCount++;
    return "Day"+dayCount+":"+dailyWage;
}
mapDayAlongWithWage=empWageArray.map(mapDayWithWageFunc);
console.log("UC7B- Represent day along with wage using map helper function:\n"+mapDayAlongWithWage);

function getFullWorkingDays(dailyWage)
{
    if(dailyWage.includes("160"))
       return dailyWage; 
}
let FullTimeDays = mapDayAlongWithWage.filter(getFullWorkingDays);
console.log("UC7C- Show fullTime days using filter helper function:\n"+FullTimeDays);
console.log("UC7D-Show first occurence of Fulltimeday using find helper function:"+FullTimeDays.find(getFullWorkingDays));
console.log("UC7E-Show every element is FullTime or not?using every helper function:"+FullTimeDays.every(getFullWorkingDays));
let data=0;
function PartTimeDays(data)
{
   return data.includes("80");
}
console.log("UC7F-Show any element is parttime or not? using some helper function: "+mapDayAlongWithWage.some(PartTimeDays));
function NumberOfDays(total,dailyWage)
{
    if(dailyWage>0)
        return total=total+1
    else
        return total
}
console.log("UC7G- Number of working days using reduce helper function:"+empWageArray.reduce(NumberOfDays,0));
