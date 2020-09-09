function createGreetMessage(name) {
  return `Hi, ${name}`;
}

function greet(name) {
  console.log(createGreetMessage(name));
}

console.log(greet("kazu"));
