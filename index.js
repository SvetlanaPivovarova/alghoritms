const secondaryId = Symbol()

const user = {
    'id': 193,
    'name': 'Ольга',
    [secondaryId]: 'olga-1'
}

for (const prop in user) {
    console.log(prop, user[prop])
}
// id 193
// name Ольга

console.log(user[secondaryId])
// olga-1