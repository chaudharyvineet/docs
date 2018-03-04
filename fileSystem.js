var fs= require('fs');

fs.writeFileSync("vi.txt", " hey, this is vineet here");
console.log(fs.readFileSync("vi.txt").toString());
console.log('yo');