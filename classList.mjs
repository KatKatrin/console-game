import {randomBytes, createHmac} from 'crypto';


export class Key {
  constructor(){
    this.key = randomBytes(256).toString('hex');
    this.algoritm = 'sha256';
  }
}


export class HMAc extends Key{
  constructor(computerChoise){
    super();
    this.computerChoise = computerChoise
  }

  getHmac = () => {
    const hash = createHmac(this.algoritm, this.key)
              .update(this.computerChoise)
              .digest('hex');

    console.log(`HMAC: ${hash}`)

    return hash
  }
 
  getKey = () => {
    return(`Key: ${this.key}`)
  }
}


export class OutputHelp {
  constructor(){
    this.rock = {'rock': 'draw', 'paper':'win', 'spock':'win', 'scissors': 'lose', 'lizard': 'lose'};
    this.paper = {'rock': 'lose', 'paper':'draw', 'spock':'win', 'scissors': 'win', 'lizard': 'lose'};
    this.spock = {'rock': 'lose', 'paper':'lose', 'spock':'draw', 'scissors': 'win', 'lizard': 'win'};
    this.scissors = {'rock': 'win', 'paper':'lose', 'spock':'lose', 'scissors': 'draw', 'lizard': 'win'};
    this.lizard = {'rock': 'win', 'paper':'win', 'spock':'lose', 'scissors': 'lose', 'lizard': 'draw'}
  }

  getTable = () => {
    console.table({rock:this.rock, paper:this.paper, spock:this.spock, scissors:this.scissors, lizard:this.lizard})
  }
}


export class Winner {
  constructor (userChoise, computerChoise, inputValue){
    this.userChoise = userChoise;
    this.computerChoise = computerChoise;
    this.inputValue = inputValue
  }

  findWinner = () => {
    const step = Math.floor(this.inputValue.length / 2);

      if(this.userChoise === this.computerChoise){
          console.log('draw')
      } else
      if (this.userChoise > this.computerChoise) {
        this.userChoise - this.computerChoise <= step ? console.log('USER WIN') : console.log('Computer WIN')
      } else {
        this.computerChoise - this.userChoise <= step ? console.log('Computer WIN') : console.log('USER WIN')
      }
   }
}

