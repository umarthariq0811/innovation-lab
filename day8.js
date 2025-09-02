let currenttime=new Date();
console.log(currenttime);
let local=currenttime.toString();
console.log(local);
let hours=currenttime.getHours();
console.log(hours)
let minits=currenttime.getMinutes();
console.log(minits);
let Day=currenttime.getDay();
console.log(Day)


class Exam{
    constructor(personname){
        this.personname=personname;
        console.log(personname);
    }
}
let result=new Exam