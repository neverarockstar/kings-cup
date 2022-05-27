let deckId = ''

let numOfKings = 0

document.querySelector('h3').innerText = `The Rules`

fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        deckId = data.deck_id
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


document.querySelector('button').addEventListener('click', drawAndDrink)

function drawAndDrink(){

  document.querySelector('h3').innerText = `Kings Drawn: ${numOfKings}`
  document.getElementById("theRules").style.display = "none"; 
  
  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#yourCard').src = data.cards[0].image 
      
        let drawnCard = data.cards[0].value
        switch (drawnCard){
          case '2':
            document.querySelector('h2').innerText = 'You';
            document.getElementById('cardRules').innerText = 'Pick someone to take two drinks.';
            break;
          case '3':
            document.querySelector('h2').innerText = 'Me'
            document.getElementById('cardRules').innerText = 'Take two drinks.';
            break;
          case '4':
            document.querySelector('h2').innerText = 'Give 2, Take 2'
            document.getElementById('cardRules').innerText = 'Give two drinks and take two yourself.';
            break;
          case '5':
            document.querySelector('h2').innerText = 'Never Have I Ever'
            document.getElementById('cardRules').innerText = 'Each player puts up 3-5 fingers. The person who picked the five starts with saying something they have never done. If you have done it, you put a finger down. The first person to put down all their fingers, loses and drinks.';
            break;
          case '6':
            document.querySelector('h2').innerText = 'Make a Rule'
            document.getElementById('cardRules').innerText = 'It can be anything you want! For the rest of the game, whoever breaks the rule drinks.';
            break;
          case '7':
            document.querySelector('h2').innerText = 'Heaven'
            document.getElementById('cardRules').innerText = 'Put your hands in the air like you just don\'t care! Last person to raise their hands drinks.';
            break;
          case '8':
            document.querySelector('h2').innerText = 'Mate'
            document.getElementById('cardRules').innerText = 'Pick another player to be your mate. Whenever you drink, they drink.';
            break;
          case '9':
            document.querySelector('h2').innerText = 'Truth or Drink'
            document.getElementById('cardRules').innerText = 'Ask someone a question; if they decline to answer, they drink.';
            break;
          case '10':
            document.querySelector('h2').innerText = 'Categories'
            document.getElementById('cardRules').innerText = 'Come up with a category (breakfast foods, countries, colors, etc.) going counter clockwise, each player says something in the category. The first person who can\'t come up with something in the category drinks.';
            break;
          case 'JACK':
            document.querySelector('h2').innerText = 'Jacks'
            document.getElementById('cardRules').innerText = 'Guys drink';
            break;
          case 'QUEEN':
            document.querySelector('h2').innerText = 'Queens'
            document.getElementById('cardRules').innerText = 'Ladies drink';
            break;
          case 'KING':
            document.querySelector('h2').innerText = 'King\'s Cup!'
            document.getElementById('cardRules').innerText = 'Pour some of your drink into the King\'s Cup.';
            howManyKings();
            if (numOfKings === 4){
              document.querySelector('h3').innerText = 'Congrats, Your Highness!'
              document.getElementById('cardRules').innerText = 'You have the honor of drinking the King\'s cup! Refresh the page to start a new game.'
            }
            break;
          case 'ACE':
            document.querySelector('h2').innerText = 'Waterfall'
            document.getElementById('cardRules').innerText = 'Everyone starts chugging their drink. The person who picked the card can stop when they want; this allows the person to their right to stop drinking whenever. When that person stops drinking, the person to their right can stop. This goes on until everyone is no longer drinking.';  
            break;
        }
        
      })

      .catch(err => {
          alert(`Out of Cards, refresh the page to play again!`)
      });
}

function howManyKings(){
  numOfKings ++
  document.querySelector('h3').innerText = `Kings Drawn: ${numOfKings}`
}
//Display card rule
