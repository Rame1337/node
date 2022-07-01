let name = 'Julius'
let zahl = 5

let objekt = {
    firstname: prename = name,
    zahl: 5,
    test: 'Test'
};
console.log(objekt.firstname);

let arrray = [ prename, 2, 5, "Test"];
arrray.push(10);

console.log(arrray[4]);

function makeUpperCase(value) {
    console.log(value.toUpperCase())
}

function handleName(name, cb) { // callback function
    const fullName = name + ' smith'
    cb(fullName)
}

const example = async()=> {
    return 'hello there'
}

async function someFunc() {
    const result = await example();
    console.log(result)
}

// console.log(example())
someFunc()

handleName('peter', makeUpperCase);
// console.log(sum(1, 5));