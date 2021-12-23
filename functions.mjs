import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'process';
import {OutputHelp, Winner} from './classList.mjs'


export function giveWaysToUsers (inputValue) {

    console.log('Available moves:')
  
    inputValue.forEach((move,i) => {
      console.log(`${i+1} - ${move}`)
    });
  
    console.log('? - help \n0 - exit')
}

const getAnswer = (rl, arr, computerChoise, key) => new Promise((resolve) => {

    rl.question('Enter your move: ', (answer) => {
           
        if (answer == '?'){
            new OutputHelp().getTable();
            rl.close();
            getWinner(arr, computerChoise, key);
            
        } else
        if (answer > arr.length || answer < 0 || isNaN(answer) ) {
            rl.close();
            giveWaysToUsers(arr)
            getWinner(arr, computerChoise, key);
            
        } else 
        if(answer == 0){
            rl.close();
            return
        }  else {
            console.log(`Your move: ${answer}`);
            resolve(answer)
            rl.close();
        }
    });

})

export const getWinner= (arr, computerChoise, key) => {

    const rl = readline.createInterface({ input, output });

    getAnswer(rl, arr, computerChoise, key)
        .then(value => compareChoise(value, computerChoise, arr))
        .then(() => console.log(key))
}


function compareChoise (userChoise, computerChoise, inputValue){
    console.log(`Computer choise: ${computerChoise}`);
    const winner = new Winner(userChoise, computerChoise, inputValue)
                    .findWinner();
}










//const inputvalue = process.argv.slice(2);
//console.log(inputvalue)


// function outputHelp(){

//     const rock = {'rock': 'draw', 'paper':'win', 'spock':'win', 'scissors': 'lose', 'lizard': 'lose'};
//     const paper = {'rock': 'lose', 'paper':'draw', 'spock':'win', 'scissors': 'win', 'lizard': 'lose'};
//     const spock = {'rock': 'lose', 'paper':'lose', 'spock':'draw', 'scissors': 'win', 'lizard': 'win'};
//     const scissors = {'rock': 'win', 'paper':'lose', 'spock':'lose', 'scissors': 'draw', 'lizard': 'win'};
//     const lizard = {'rock': 'win', 'paper':'win', 'spock':'lose', 'scissors': 'lose', 'lizard': 'draw'};

//     console.table({rock, paper, spock, scissors, lizard})
// }


// function findWinner (userChoise, computerChoise, inputValue) {

//     const step = Math.floor(inputValue.length / 2);

//     if(userChoise === computerChoise){

//         console.log('draw')

//     } else

//     if(((userChoise - computerChoise) <= step) && ((userChoise - computerChoise) = -step)){

//         console.log('Computer WIN')

//     } else {

//         console.log('USER WIN')
//     }

// }




   
    

//   if (err) throw err;

//   let msgArray = [];

//   files.forEach(file => {
    
//     readFile(`./files/${file}`, (err, data) => {
//             if (err) throw err;

//             //const hash = new SHA3(256);

//             const hash = new Keccak('256')

//             let res = hash.update(data)
//                           .digest('hex')

            
//             //console.log(res)

//              msgArray.push(res);

//              msgArray.sort()
//           });

//   })




//    setTimeout(() => {

//     let res =  msgArray.join('')

//     let final = res + 'ekaterinaefremenko123@gmail.com'

    

//     console.log(final)
//   } , 3000)

  

// });





















