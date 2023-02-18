// Typescript setup and Everyday Type

/*Specifying Types*/
string boolean  number regex array object

In typescript you have to specify the type of the variable
//string
let userName : string ="khodijah";
//boolean
let hasLoggedIn: boolean = true;
userName += "Lawal";
console.log(userName)
//number
let myNumber:number = 6
//regex
let myRegex: RegExp =/foo/
//array
const names: string[] = userName.split(" ");
const numbers: Array<number> =["a"] // Type string is not assignable to the Type number
const numbers: Array<number> =[2, 3, 4]
//object
const myPerson :{
    firstname: string;
    lastname: string;
} = {
   firstname:"Khodijah";
   lastname: "Lawal"
}
//Defining it once in a reuser way

interface person{
   firstname: string;
    lastname: string;
  
}
const myPerson:person{
   firstname:"Khodijah";
   lastname: "Lawal";
}

//using object as maps
const ids:{
    30 ="a";
    40 ="b";

}
ids[50] ="c"