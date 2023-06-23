const quoteContainer=document.querySelector('.quote');
const quoteNumber=document.querySelector('.quote-number');
const dice=document.querySelector('.dice');

const getAdvice=()=>{
    fetch('https://api.adviceslip.com/advice')
    .then(response =>{
        return response.json()
    })
    .then(adviceData=>{
        quoteNumber.innerText=`#${adviceData.slip.id}` ;
        quoteContainer.innerText=`🙶${adviceData.slip.advice}🙷`;
    })
}
getAdvice();
dice.onclick=getAdvice;