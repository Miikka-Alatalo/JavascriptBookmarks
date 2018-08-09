let shuffleTimes = 7;
let cut = 0; // Nothing: 0, Cut half: 1, Cut first third: 2, Cut last third: 3
let perfectShuffle = false;

let allCardsBackup = [
  {s:'S', v:'A'}, {s:'S', v:'2'}, {s:'S', v:'3'}, {s:'S', v:'4'}, {s:'S', v:'5'}, {s:'S', v:'6'}, {s:'S', v:'7'}, {s:'S', v:'8'}, {s:'S', v:'9'}, {s:'S', v:'10'}, {s:'S', v:'J'}, {s:'S', v:'Q'}, {s:'S', v:'K'},
  {s:'___H', v:'A'}, {s:'___H', v:'2'}, {s:'___H', v:'3'}, {s:'___H', v:'4'}, {s:'___H', v:'5'}, {s:'___H', v:'6'}, {s:'___H', v:'7'}, {s:'___H', v:'8'}, {s:'___H', v:'9'}, {s:'___H', v:'10'}, {s:'___H', v:'J'}, {s:'___H', v:'Q'}, {s:'___H', v:'K'},
  {s:'______C', v:'A'}, {s:'______C', v:'2'}, {s:'______C', v:'3'}, {s:'______C', v:'4'}, {s:'______C', v:'5'}, {s:'______C', v:'6'}, {s:'______C', v:'7'}, {s:'______C', v:'8'}, {s:'______C', v:'9'}, {s:'______C', v:'10'}, {s:'______C', v:'J'}, {s:'______C', v:'Q'}, {s:'______C', v:'K'},
  {s:'_________D', v:'A'}, {s:'_________D', v:'2'}, {s:'_________D', v:'3'}, {s:'_________D', v:'4'}, {s:'_________D', v:'5'}, {s:'_________D', v:'6'}, {s:'_________D', v:'7'}, {s:'_________D', v:'8'}, {s:'_________D', v:'9'}, {s:'_________D', v:'10'}, {s:'_________D', v:'J'}, {s:'_________D', v:'Q'}, {s:'_________D', v:'K'}
];

let allCards = [];

printAllCards = () => {
  console.log("---------------");
  for(card of allCards){
    console.log(card.s, card.v);
  }
  console.log("---------------");
}

shuffleCards = () => {
  let cards = allCards.slice();
  let halfCards = cards.splice(26);
  let cardArray = [];
  let randB = Math.random() >= 0.5;
  for(let i = 0; i < 26; i++){
    if (!perfectShuffle) randB = Math.random() >= 0.5;

    if(randB){
      cardArray.push(cards.shift());
      cardArray.push(halfCards.shift());
    } else {
      cardArray.push(halfCards.shift());
      cardArray.push(cards.shift());
    }
  }
  allCards = cardArray;
}

cutCards = () => {
  let cards = allCards.slice();
  let cutCs = [];
  if(cut === 0) return;
  else if (cut === 1) {
    cutCs = cards.splice(26);
    allCards = cutCs.concat(cards);
  } else if (cut === 2) {
    cutCs = cards.splice(0, 16)
    allCards = cards.concat(cutCs);
  } else if (cut === 3) {
    cutCs = cards.splice(cards.length-17, 16);
    allCards = cutCs.concat(cards);
  } else {
    console.log("Dunno this cut: "+cut);
  }

}

doYourThing = () => {
  allCards = allCardsBackup.slice();
  //printAllCards();
  for(let i = 0; i < shuffleTimes; i++){
    shuffleCards();
    cutCards();
  }
  printAllCards();
}

doYourThing();
