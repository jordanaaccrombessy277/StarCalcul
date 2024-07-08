import {from_string_to_tab, calcul} from './libs/functions.js'


const signs = ['+','-','/','%','x', '=']
const signs_calcul = ['+','-','/','%', 'x']
const numbers = ['0','1','2','3','4','5','6','7','8','9']
const others = ['C','=','Hist']

const input = document.querySelector('#input');
const elements = document.querySelectorAll('#entries_buttons div');

elements.forEach(element => {
    element.classList.add('cursor-pointer', 'select-none')
    element.addEventListener('click', function(e){
      console.log(e.target.innerText)
      let contentInput = input.innerText
      input.innerHTML += signs.includes(e.target.innerText) || isNaN(contentInput[contentInput.length-1]) === true && contentInput[contentInput.length-1] !=='.' ? ' '+ e.target.innerText : e.target.innerText
  
          if(others.includes(e.target.innerText)){
            const element = e.target.innerText;
              switch (element){
  
                case ("C"):
                  // function de reset
                  console.log('C')
                  input.innerHTML = '0'
                break;
                case ("="):
                  // function de calcul
                  console.log('________Calcul________');
                  console.log(from_string_to_tab(input.innerText))
                  let result = calcul(from_string_to_tab(input.innerText))
                  input.innerHTML= result
                break;
                case ("Hist"):
                  // function de
                  console.log('Hist')
                break;
                default:
                  console.log('Ce caractère est erroné')
  
            }
        }
  
    })
  });
  