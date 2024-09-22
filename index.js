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
