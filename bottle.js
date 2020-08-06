//https://www.codewars.com/kata/59c287b16bddd291c700009a/train/javascript

//========================== iceBrickVolume ======================
//A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you.
// The bricks top and bottom are square with sides equal to the bottles diameter.
// The bricks fits snuggly up to the bottle neck/rim. Just for fun and also to impress the magician and people around,
// you decide to calculate the brick's volume. Write a function iceBrickVolume that accepts these parameters:
//
// radius - bottle's radius (always > 0);
// bottleLength - total bottle length (always > 0);
// rimLength - length from bottle top to brick (always < bottleLength);
// And return volume of ice brick that magician managed to put into a bottle.



function iceBrickVolume(radius, bottleLength, rimLength) {

    return (bottleLength - rimLength) * 2 * radius ** 2;

}

console.log(iceBrickVolume(1, 10, 2));//16