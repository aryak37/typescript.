/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let totalscores = 0;
let goldmedakwinner = 0;
let silvermedalwinner = 0;
let bronzemedalwinner = 0;
let nomedal = 0;

for (const score of scores){
    totalscores += score;

    if (score >= 95)
        goldmedakwinner++;
    if (score >= 85)
        silvermedalwinner++;
    if (score >= 75)
        bronzemedalwinner++;
    if (score < 75)
        nomedal
}

const averageScore = scores.length > 0 ? totalscores / scores.length : 0;

console.log(`Number of Gold Medal winners : ${goldmedakwinner}`)
console.log(`Number of Silver Medal winners : ${silvermedalwinner}`)
console.log(`Number of Bronze Medal winners : ${bronzemedalwinner}`)
console.log(`Number of students without medals : ${nomedal}`)
console.log(`Average Competition Score : ${averageScore}`)