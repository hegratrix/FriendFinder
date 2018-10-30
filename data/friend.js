let friends = require('../data/friendsArray.js')
let newFriend = []
let friendMatch = [{name: 'Hope', photo: 'pic', scores: [1, 2, 3, 4]}]

module.exports = {
    findMatch(survey) {
        newFriend = []
        let lowestIndex
        let lowestTotal = 100
        newFriend.push(survey)
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
        friendMatch = []
        friendMatch.push(friends[lowestIndex])
    },
    showMatch() {
        return friendMatch
    }
}