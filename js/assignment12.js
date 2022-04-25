var counter=0;
async function getQuote(){
  console.log("quote button was clicked");//will only appear in element inspection
  try{//trying some code and seeing if there's an error
    const response = await fetch(endpoint);//see what happens when accessing url
    if (!response.ok){//if the response isn't ok
      throw Error(response.statusText)//get an error in console
    }
    const json = await response.json();//json = javascript operating notation, assign to variable json
    console.log(json);
    displayQuote(json.activity);
  } catch(err) {
    console.log(err)
    alert('Failed');
  }
  counter ++;
}

function counter(){
  return counter;
}

function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}
const endpoint = 'https://www.boredapi.com/api/activity';
const quoteButton = document.querySelector("#js-new-quote"); //quoteButton is a variable
quoteButton.addEventListener('click', getQuote);//click is the user input, getQuote is the function being called
quoteButton.addEventListener('click', counter);
