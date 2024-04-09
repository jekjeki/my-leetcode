/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let n = tickets.length - 1
    let i = 0
    let sec = 0
    while(tickets[k] != 0 ){
        if(tickets[k] == 0) break 

        if(tickets[i] != 0){
            tickets[i] -= 1
            sec++
        } 

        if(i == n){
            i = 0
        }
        else{
            i++
        }
    }
    return sec
};