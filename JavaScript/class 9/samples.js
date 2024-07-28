function resolveAfterNSeconds(n, x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, n);
    });
}

(function () {
    let a = resolveAfterNSeconds(1000, 1)
    a.then(async function (x) {
        let y = await resolveAfterNSeconds(2000, 2)
        let z = await resolveAfterNSeconds(1000, 3)
        let p = resolveAfterNSeconds(2000, 4)
        let q = resolveAfterNSeconds(1000, 5);
        console.log(x + y + z + await p + await q);
    })
})()
/* 
async function fetchData() {
    console.log("Fetching data...");
    let result = await fetch('https://api.example.com/data');
    let data = await result.json();
    console.log("Data fetched:", data);
    return data;
}
async function processData() {
    console.log("Processing data...");
    let data = await fetchData();
    console.log("Data processed:", data);
    return data;
}

processData().then((result) => {
    console.log("Process complete:", result);
}).catch((error) => {
    console.error("Error:", error);
}); */

/* const createPromise = () => Promise.resolve(1)

function func1() {
  createPromise().then(console.log)
  console.log(2)
}

async function func2() {
  await createPromise()
  console.log(3)
}

console.log(4)
func1()
func2() */
/* 
function greet(country) {

    return 'Hello, ' + this.name + ' from '+ country;
    }
    
    const person = {
    name: 'John',
    };
    
    const result = applyPolyfill(greet, person, ['India']);
    console.log(result);

    function applyPolyfill(fn, context, args) {
        // Write your solution here ========================
         context[fn] = fn;
        const result = context[fn](args);
        return result;
    } */const promise = new Promise((resolve, reject) => {
  resolve("Promise resolved");
});
/* 
promise
  .then(result => {
    console.log(result); // "Promise resolved"
    throw new Error("Error in then block");
  })
  .catch(error => {
    console.error(error.message); // "Error in then block"
    throw new Error("Error in catch block");
  })
  .finally(() => {
    console.log("Finally block executed");
    throw new Error("Error in finally block");
  })
  .then(result => {
    console.log("Success:", result); // This will not execute
  })
  .catch(error => {
    console.error("Caught error:", error.message); // "Error in finally block"
  }); */

//  Promise.reject(1).then(()=>2).then(3).then(a=>console.log(a*3)).catch(console.log);
/* 
function* f(...a) {
    let s = new Set();
    for (x in a) {
      s.add(a[x]);
      yield a[x];
    }
    yield s;
  }
  
  let f1 = f(3, 2, 1);
  
  while (true) {
    let yv = f1.next().value;
    if (typeof yv == "object") {
      console.log(yv);
      yv.add(3);
      console.log(yv);
      break;
    }
  }


  function* generators(){
    yield 1;
    yield 2;
  }
  
  const s=generators();
  console.log(s.next().value); */

/* var x=20;
var y="sadsad";
  function outer(){
    console.log('y',y);
    var y=10;
    function inner(){
      console.log(x);
    }
    var x=10;
    inner();
  }
outer(); */

/* var x=10;

function foo(){console.log(x)}

(function ie(){ var x=23; foo();})(); */
 
/* function Person(name){this.name=name}

Person.prototype.greet=function(){ console.log("hello", this.name)}

let person1 = new Person("abc");
let person2=Object.create(Person.prototype);

person2.name="Bob=";
person1.greet();
person2.greet(); 

var person ={name:"suganya", greet:function(){ console.log(this.name)}}
person.greet();

function greet1(a,b){console.log('safsd', a+b)}


setTimeout(() => greet1(4,5,9),1000); */

/* var TimeLimitedCache = function() {
  this.cache = {};
   this.showView =function(){
    console.log(this.cache);
   }


};

TimeLimitedCache.prototype.set = function(key, value, duration) {
if (this.cache[key] && this.cache[key].timer) {
  clearTimeout(this.cache[key].timer);
  this.cache[key].value = value;
  this.cache[key].timer = setTimeout(() => {
    this.remove(key);
  }, duration);
  return true;
} else {
  this.cache[key] = {
    value: value,
    timer: setTimeout(() => {
      this.remove(key);
    }, duration)
  };
  return false;
}
};

/** 
* @param {number} key
* @return {number} value associated with key
*/
/*TimeLimitedCache.prototype.get = function(key) {
if (this.cache[key] && this.cache[key].timer) {
  return this.cache[key].value;
} else {
  return -1;
}
};

TimeLimitedCache.prototype.count = function() {
let count = 0;
for (const key in this.cache) {
  if (this.cache[key].timer) {
    count++;
  }
}
return count;
};

TimeLimitedCache.prototype.remove = function(key) {
delete this.cache[key];
};

const inst = new TimeLimitedCache();
inst.set('hello',100,1000);
//console.log(inst.get("hello"));
inst.count();
inst.set("kk",34,90);
inst.showView();
setTimeout(()=>{
  inst.set('kk','changed',200);
  console.log("set", inst)
  inst.get('kk')
},10000);
 */


var promiseAll = function(functions) {

  return new Promise((resolve,reject) => {
      let results = new Array(functions.length);
      let count=0;
      functions.forEach((fn,i) => { console.log(fn)
          //fn is a promise
          fn().then((data)=>{
            results[i]=data;
            count++;
              if(count === functions.length) resolve(results);
          })
          .catch((err) =>{
              reject(err);
      });
  });
  });
  
};

const promise1 = promiseAll([() => new Promise(res => res(42))])
 promise1.then(console.log); // [42]

