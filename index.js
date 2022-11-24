// code your solution here
const record = [
    { year: "2015", result: "w"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
];
function superbowlWin(collection){
   for (const game of collection){
    if (game.result === "W"){
        return game.year
    }
   }
};