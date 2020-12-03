const skills = [
    {id: 1, skill: 'Water', done: true},
    {id: 2, skill: 'Air', done: true},
    {id: 3, skill: 'Fire', done: false},
    {id: 4, skill: 'Earth', done: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id))
}

function create(skill) {
    skill.id = Date.now()*1000000
    skill.done = false
    skills.push(skill)
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills.splice(idx, 1)
}

function update(id, newSkill) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills[idx].skill = newSkill.skill
    skills[idx].done = newSkill.done === 'on' ? true : false
}
