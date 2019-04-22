'use strict'

const loop = ((times = 0, callback = null) =>
    { 
        if(callback) {
          for (let i = 1; i <= times; i++){
            callback(i); 
        }
        }
    })
console.group('Loop');
loop(2);
loop (3,(i)=>console.log('Строка', i))
console.groupEnd();

