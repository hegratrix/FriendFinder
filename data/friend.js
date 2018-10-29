let friends = require('../data/friendsArray.js')
let newFriend = []

const submit = () => {
    event.preventDefault()
    fetch('/survey', {
        method: 'POST',
        headers: { 'Content-type' : 'application/json; charset=utf-8'},
        body: JSON.stringify ({
            name: document.querySelector('#InputName').value,
            photo: document.querySelector('#InputPhoto').value,
            scores: [
                parseInt(document.querySelector('#q1').value), 
                parseInt(document.querySelector('#q2').value), 
                parseInt(document.querySelector('#q3').value),
                parseInt(document.querySelector('#q4').value)
                // parseInt(document.querySelector('#q5').value),
                // parseInt(document.querySelector('#q6').value),
                // parseInt(document.querySelector('#q7').value),
                // parseInt(document.querySelector('#q8').value),
                // parseInt(document.querySelector('#q9').value),
                // parseInt(document.querySelector('#q10').value)
            ]
        })
    })
    .then(r => {
        console.log(r)
    })
    .catch (e => console.error(e))
}

module.exports = {
    findMatch(survey) {
        newFriend.push(survey)
        console.log('friends')
        console.log(friends)
        console.log('newFriend')
        console.log(newFriend)
        findFriend()
    }
}

function findFriend() {
    let lowestTotal = 100
    let lowestIndex 
    for (let i=0; i < friends.length; i++) {
        let total = 0
        let diffArray = []
        let diff = newFriend[0].scores.map(function(item, index) {
            diffArray.push(Math.abs(item - friends[i].scores[index]))
        })
        for (let i=0; i < diffArray.length; i++) {
            total += diffArray[i]
        }
        if (total < lowestTotal) {
            lowestTotal = total
            lowestIndex = i
        }
    }
    bestMatch(lowestIndex)
}

function bestMatch (index) {
    let name = friends[index].name
    let photo = friends[index].photo
    console.log(name)
    console.log(photo)
    // document.querySelector('#bestMatchModal').append(`
    //     <div>
    //         <span class="close">&times;</span>
    //     </div>
    //     <h1 id="modal-title">Best Match</h1>
    //     <hr>
    //     <h2 id="match-name">${name}</h2>
    //     <img id="match-pic" src=${photo}>
    // `)
    // document.querySelector('.modal').style.display = "block"
}