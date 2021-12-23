import {HMAc, Key } from "./classList.mjs";
import {getWinner, giveWaysToUsers} from './functions.mjs'
import process from "node:process";

const str = process.argv.slice(2)



if ((str.length - 1) % 2 == 0 && str.length > 1){
  const inputValue = str;
  const computerChoise = Math.ceil(Math.random() * inputValue.length).toString();
  main(computerChoise, inputValue);
} else {
  console.log('enter odd number of strings')
}


function main (computerChoise, inputValue){

  const firstHmac = new HMAc(computerChoise);
  const key = firstHmac.getKey();

  firstHmac.getHmac()

  giveWaysToUsers(inputValue);

  getWinner(inputValue, computerChoise, key)
};













