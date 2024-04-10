/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    let n = deck.length 
    deck.sort((a,b)=> a-b)
    const reveal = []
    reveal.unshift(deck[n-1])
    for(let i=n-2; i >= 0; i--){
        reveal.unshift(reveal.pop())
        reveal.unshift(deck[i])
        console.log(reveal)
    }
    return reveal
};