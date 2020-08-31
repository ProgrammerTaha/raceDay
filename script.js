/*

! a program that will register runners for the race and give them instructions on race day.

? https://s3.amazonaws.com/codecademy-content/projects/introduction-to-javascript/learn-javascript-control-flow/race-day/raceday-timeline.svg

% adult runners (over 18 years of age)

% youth runners (under 18 years of age)

% register early or late

% Runners are assigned a race number and start time based on their age and registration.

todo: Race number:
* Early adults receive a race number at or above 1000.
* All others receive a number below 1000.

todo: Start time:
* Adult registrants run at 9:30 am or 11:00 am.
* Early adults run at 9:30 am.
* Late adults run at 11:00 am.
* Youth registrants run at 12:30 pm (regardless of registration).

todo: plan for runners that are exactly 18

*/

//for choosing between runners
let raceNumber = Math.floor(Math.random() * 1000);

//to sure that if someone registered early or not
const registeredEarly = true;

//the age of runner
const age = 24;

//
if (age > 18 && registeredEarly === true) {
  raceNumber += 1000;
} 
if (age > 18 && registeredEarly === true) {
  console.log(`Your race at 9:30 am. because your race number is ${raceNumber}`);
} else if (age > 18 && registeredEarly === false) {
  console.log(`Your race at 11:00 am. because your race number is ${raceNumber}`);
} else if (age < 18) {
  console.log(`Your race at 12:30 pm. because your race number is ${raceNumber}`);
} else {
  console.log('You should see the registration desk');
}