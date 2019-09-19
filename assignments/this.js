/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  "this" is used to describe something eithin an object.
* 2.  It can focus the scope of a callback.
* 3.  Can only be used within objects or functions.
* 4.  Makes methods work within classes.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

window.number = 27
function num () {
  console.log(`My age is ${this.number}`)
}
num()


// Principle 2
// code example for Implicit Binding

const me = {
    name: 'Edwin',
    greet() {
      console.log(`Hello, my name is ${this.name}`)
    }
  }
  me.greet();


// Principle 3
// code example for New Binding

function newUser (name, age) {
    this.name = name
    this.age = age
  }
  
  const person = new newUser('Edwin', 25)
  console.log(person)


// Principle 4
// code example for Explicit Binding

function greeting () {
    console.log(`Hello, my name is ${this.name}`)
  }
  const me = {
    name: 'Edwin',
  }
  greeting.call(me)