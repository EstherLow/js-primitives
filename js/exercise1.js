// ------Qn 1
var friends = [
  'Moe',
  'Larry',
  'Curly',
  'Jane',
  'Emma',
  'Elizabeth',
  'Elinor',
  'Mary',
  'Darcy',
  'Grey',
  'Lydia',
  'Harriet'
];

var friend = friends.length -1;
console.log('The last name is ' + friends[friend]);

//----Question2
var sortedFriends = friends.sort();
console.log('This is qn2 ' + sortedFriends);

//------Question3
var friendsArray = newFriends.split(','); //must feed the notation to use to demarcate between values
var sortedList = friendsArray.sort();
console.log('This is qn3 ' + sortedList);

//-----Question4
console.log('This is qn4 ' + sortedList.reverse());

//------Question5
var myFriends = [
  'Rickon',
  'Meera',
  'Hodor',
  'Jojen',
  'Osha',
  'Rickard',
  'Maester',
  'Rodrik',
  'Jory',
  'Septa',
  'Jon'
];

var yourFriends = [
  'Bilbo',
  'Boromir',
  'Elrond',
  'Faramir',
  'Frodo',
  'Gandalf',
  'Legolas',
  'Pippin'
];

var ourFriends = myFriends.concat(yourFriends);
console.log('This is question 5 ' + ourFriends.sort());

//-------Question 6
var foods = [
  'Popcorn',
  'Potato chips',
  'Shrimp',
  'Chicken rice',
  'Poutine',
  'Tacos',
  'Toast',
  'French Toast',
  'Crab',
  'Pho',
  'Lasagna',
  'Brownie',
  'Lobster',
  'Donuts',
  'Ice cream',
  'Hamburger',
  'Sushi',
  'Chocolate',
  'Pizza'
];

var rankOfPho = foods.indexOf('Pho')
console.log('The rank of Pho is ' + (rankOfPho + 1));

//---------Question7
var indexDonuts = foods.indexOf('Donuts');  //get index of donuts
var newFavFood = foods.splice(indexDonuts, 1); //splice
console.log('New fave food list ' + foods); //if newFavFood is logged, donuts will be returned

//-------Question8
console.log('5th to 10th favorite food ' + foods.slice(4,10));

//-------Question9
var friendsAge = {
    'Moe': 18,
    'Larry': 19,
    'Curly': 20,
    'Jane': 20,
    'Emma': 21,
    'Elizabeth': 18,
    'Elinor': 23,
    'Mary': 25,
    'Darcy': 24,
    'Grey': 18,
    'Lydia': 24,
    'Harriet': 18 };
console.log('This is the new object ');
console.log(friendsAge);

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

function sortNumber(a,b) {  // result of function is to compare the array based on values
    return a - b;
  }
var sortedAges = ages.sort(sortNumber);
var indexOfMedianAge = Math.round((sortedAges.length/2));
console.log(sortedAges[indexOfMedianAge]);
//find the length of the array ages.length()
//sort the array
//index number of median age is ages.length/2 + 1
