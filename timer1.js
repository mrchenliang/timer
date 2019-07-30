const args = process.argv.slice(2).map(value => Number(value));
  for (i = 0; i < args.length; i++) {
    if(args[i] >= 0) {
    setTimeout(() => {process.stdout.write('.')
    }, args[i] * 1000);
  }
}
