/*enum days {
    Monday = "Sunny Weather" ,
    Tuesday = "Rainy weather",
    Wednesday = "Dry weather",
}
console.log(days.Monday);*/




//homework enum & constenum






//type casting
let data :unknown
let abc :boolean = data as boolean
let abs :unknown
let data1 : number = abs as number
console.log(data)

let traficlight:string [] 
=["green","red","yellow"]



//tuples
let tuples:[string,boolean,number]
=["abc",true,5]
tuples.push(12)




// function default parameter
function greet(name:string, ... teacherName:string[]){
    console.log(`hello ${name},${teacherName}`);
}
greet("okasha","ubaid","naeem",)



function hallo(message:string):string
function hallo(message:number):number
function hallo(message:any){
    return message;
}
hallo("true")







