const skills = [
    {id: 1, skill: 'Water', done: true},
    {id: 2, skill: 'Air', done: true},
    {id: 3, skill: 'Fire', done: false},
    {id: 4, skill: 'Earth', done: false}
]

module.exports = {
    getAll,
    // getOne,
    // create,
    // deleteOne,
    // update
}

function getAll() {
    return skills;
}
