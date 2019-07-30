const stdin = process.stdin;
const stdout = process.stdout;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding("utf8");

////////////
// Event Handling for User Input
////////////

stdin.on("data", key => {
  if (key === 'b') {
    stdout.write('.')
  } else if (key > 0 && key < 10){
    stdout.write(`\nsetting timer for ${key} seconds...\n`)
    setTimeout(() => {stdout.write('.')
    }, key * 1000) 
  } else if (key === "\u0003") {
    stdout.write(`\nThanks for using me, ciao!\n`)
    setTimeout(() => {process.exit()
  }, 1000) 
  }
});

console.log("timer function");
