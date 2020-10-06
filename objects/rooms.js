//==================== Grasshopper - Create the rooms ===================
//
//You are creating an "Escape the room" game. The first step is to create a hash table
// called rooms that contains all of the rooms of the game.
// There should be at least 3 rooms inside it, each being a hash table with
// at least three properties (e.g. name, description, completed).


const rooms = {
    1 : {
        name : 'Anush',
        description: 'JS dev.',
        competed: true,
    },
    2  : {
        age : 'Aram',
        description: 'Java dev.',
        competed: false,

    },
    3 : {
        age : 'Araqs',
        description: 'Python dev.',
        competed: true,

    }
}
console.log(rooms)

