function grab(flag) {
 var index = process.argv.indexOf(flag);     
 return (index === -1) ? null : process.argv[index+1];
}

var user = grab('--user');

if(!user){
    console.log('you blew it');
} else {
    console.log(`welcome ${user}`);
}