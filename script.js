const quoteContainer=document.querySelector('.quote');
const quoteNumber=document.querySelector('.quote-number');
const dice=document.querySelector('.dice');

const getAdvice=async()=>{
    const request=await fetch('https://api.adviceslip.com/advice');
    const response=await request.json();

    quoteNumber.innerText=`#${response.slip.id}`;
    quoteContainer.innerText=`🙶${response.slip.advice}🙷`;
}
getAdvice();
dice.onclick=getAdvice;
// fetch('https://api.adviceslip.com/advice')
// .then(response =>{
//     return response.json()
// })
// .then(adviceData=>{
//     quoteNumber.innerText=`#${adviceData.slip.id}` ;
//     quoteContainer.innerText=`🙶${adviceData.slip.advice}🙷`;
// })