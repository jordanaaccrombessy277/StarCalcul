

export function from_string_to_tab(entries){
  
  const tab = entries.split([' '])
  return tab;
 
}

export function calcul(tab){
   
  let calcul = tab[0].includes('.') ? parseFloat(tab[0]) : parseInt(tab[0])

  for(let i=1; i<tab.length-1;i++){

    let entry = tab[i].includes('.') ? parseFloat(tab[i]) : parseInt(tab[i])

    if (!isNaN(entry)){
       
      switch(tab[i-1]){

        case ('+'):
          calcul += entry
          console.log('Case + a été prise')
        break;
        case ('-'):
          calcul -= entry
          console.log('Case - a été prise')
        break;
        case ('/'):
          calcul /= entry
          console.log('Case / a été prise')
        break;
        case ('X'):
          calcul *= entry
          console.log('Case * a été prise')
        break;
        case ('%'):
          calcul %= entry
          console.log('Case % a été prise')
        break;
        default: 
         console.log('Erreur de calcul');
        break;

      }


    }
  }

  return calcul;
}






