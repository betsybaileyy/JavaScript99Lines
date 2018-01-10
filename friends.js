
let friends = ["Peyton", "Chris", "WillB", "Bess", "Monty"];

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
       for (let j = 99; j > 1; j--) {
           console.log(j + ' lines of code in the file ' + j + ' lines of code; ' +friends[i]+ ' strikes one out, clears it all out, ' + ' lines of code in the file.');
       } 
    console.log('1 line of code in the file, 1 line of code; ' +friends[i]+ ' strikes one out, clears it all out, no more lines of code in the file')
    
}