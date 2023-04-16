//TASK # 08;
//You have an array of that contains the name of Pakistani Teams Player selected for WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with India, So make an array of final team players (11 Players) that will be playing in tomorrows match from the WorldCup Squad array(Hint: Make sure it should not disturb the array that contains 15 players instead you have to make a copy of this array)
let WorldCupSquad =['Babar Azam ', 'Shadab Khan', 'Asif Ali ', 'Haider Ali', 'Haris Rauf ', 'Iftikhar Ahmed ', 'Khushdil Shah', 'Mohammad Hasnain ', 'Mohammad Nawaz', 'Mohammad Rizwan ', 'Mohammad Wasim Junior', 'Naseem Shah ', 'Shaheen Shah Afridi ', 'Shan Masood','Usman Qadir '];
// select 11 players for tomorrow's match against India
var finalTeamPlayers=WorldCupSquad.slice(0,11);
console.log("final team players (11 Players) that will be playing in tomorrows match are: \n"+finalTeamPlayers );