function createGreetMessage(name: string): string {
  return `Hi, ${name}`;
}

function greet(name: string): void {
  console.log(createGreetMessage(name));
}

console.log(greet("kazu"));
