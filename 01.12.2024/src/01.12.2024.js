function createHelloWorld() {
    return function(...args) {
        return "Hello World";
    };
}

const f = createHelloWorld();
console.log(f({}, null, 42)); // Output: "Hello World"