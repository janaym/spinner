

const spin = () => {
  const spinPhases = ['\r|   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', "\n"];
  process.stdout.write(`|   `);
  let i = 0;
  for(const phase of spinPhases) {
    setTimeout((phase) => {
      process.stdout.write(`${phase}`);
    }, 200*i, phase);
    i++; 
  }
}

spin();