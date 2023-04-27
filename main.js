yearOfbirth = prompt( 'Enter your year of birth?');
userCity = prompt( ' Enter the city where you live? ');
userSport = prompt( 'What is your favourite type of sport?');
if(!yearOfbirth){
userAge = 'It/`s sorry you didn/`t want to include your date of birth';
}
else{
    carentYear = new Date().getFullYear();
    userAge = carentYear  - yearOfbirth; 
    userAge = `Your are ${userAge} years old!`;
}
if(!userCity){
    city = 'It/`s sorry you didn/`t want to include your city';
}
 else if(userCity.toLowerCase().indexOf('Київ'.toLowerCase()) !== -1 || userCity.toLowerCase().indexOf('Лондон'.toLowerCase()) !==-1 || userCity.toLowerCase().indexOf('Вашингтон'.toLowerCase()) !==-1  )  {
    city =`Your citi is  ${userCity}    Congratulations, you live in the capital!` ; 
 }
 else{
    city =`Your citi is  ${userCity} ` ;  
 }
if( !userSport ){
   sport = 'It/`s sorry you didn/`t want to include your Sport';
}
else if(userSport.toLowerCase().indexOf('Бокс'.toLowerCase()) !== -1   )  {
    sport =`Your Sport is  ${userSport}! Do you want to be like Muhammad Ali? ` ; 
 }
 else if(userSport.toLowerCase().indexOf('Теніс'.toLowerCase()) !== -1   )  {
    sport =`Your Sport is  ${userSport}! Do you want to be like Novak Djocovch? ` ; 
 }
 else if(userSport.toLowerCase().indexOf('Футбол'.toLowerCase()) !== -1   )  {
    sport =`Your Sport is  ${userSport}! Do you want to be like Harry Kane? ` ; 
 }
 else{
    sport =`Your Sport is  ${userSport}!`;
 }
 alert(`
${userAge}
${city}
${sport}  
 `); //тут в кінці абзаци залишу бо так зручніше  читати коли результат виводиться. 

