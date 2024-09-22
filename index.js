console.log("hello world");
let x="Devansh"
let y="Alok"
y="Gupta"
let z=27
let job=true
let n=undefined
console.log(x,y,z,job,n)
console.log(typeof(n)) // Javascript beauty-> undefined is a type as well a value

//Objects 
let person={ name:"devansh", age:27}
console.log(person)
person.name="james"
console.log(person.name)
person['name']="jon"
console.log(person)

//Arrays
let array=[1,2,3,4,5]
console.log(array)
console.log(array[0])
array[5]=6
console.log(array) // array is an object

//functions

function greet(a,l){
    console.log("hello " + a+ " "+l)
    
}
greet("devansh", "alok")
greet("john","doe")

function add (a,b){
    return a+b
}
``
console.log(add(2,3))

z++
console.log(z)
console.log(x[x.length-2])

function hello (a, b,c){
    console.log("hello "+a+" you are "+b+" years "+c.length+" is your age")
}

hello("devansh",26, "twenty")

//Array multiple

let g =['devansh', 26, 'san jose']
console.log(g[1])

let mul=[[1,2,3],'devansh']
console.log(mul[1][3])
console.log(mul)
t=mul.pop()
console.log(mul)
console.log(t)
mul.push("Alok")
console.log(mul)

console.log(mul[0][0]=='1') //equality (it converts the type)
console.log(mul[0][0]==='1') //strict equality (doesnot convert the type)

let myPlants=[{type:"flowers",list:['rose','tulip','yukon']}]

console.log(myPlants[0].list)

//Loops

let myArray =[]
let i=0

while (i<5){
    myArray.push(i)
    i++
}
console.log(myArray)

for(let j=0;j<10;j++){
    myArray.push(j)
}
console.log(myArray)

for (let z=10;z>0;z-=2){
    myArray.push(z)
}
console.log(myArray)

let prod=[[1,2,3],[5,6],[7,8,9,10]]
let product=1

for (let z=0;z<prod.length;z++){
    for (let t=0;t<prod[z].length;t++){
        product*=prod[z][t]
    }
}
console.log(product)

function convertToInteger(str){
    return parseInt(str)
}
d=convertToInteger("90")
console.log(d)


//ternary operator
let r=-987
console.log(r<0? 'postive': 'negative')

//arrow functions

magic = () => 2+3;
console.log(magic())

const myConcat=(arr1,arr2)=>arr1.concat(arr2)

console.log(myConcat([12,3,3],[6,7,8]))

const realNumberArray =[-9,8.89,7,2,3.6]

const sqaureList=(arr)=>{
    const squaredIntegers=arr.filter(num=>Number.isInteger(num) && num>0).map(x=>x*x)
    return squaredIntegers
}
console.log(sqaureList(realNumberArray))

//rest operator
const sum =(...args)=>{
    return args.concat(8)
}

console.log(sum(1,2,3))

//spread operator
arr=[...realNumberArray]
realNumberArray[0]=9876

console.log(arr)
console.log(realNumberArray)