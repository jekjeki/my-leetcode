/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
   let dist = Array.from({length: n}, ()=>Array(n).fill(Infinity))

   // membuat vertices 
   for(let i=0; i<n; i++){
        dist[i][i] = 0
   }

   for(const [from, to, weight] of edges){
    dist[from][to] = weight
    dist[to][from] = weight 
   }

    for(let k=0; k<n; k++){
        for(let i=0; i<n; i++){
            for(let j=0; j<n; j++){
                if(dist[i][k] + dist[k][j] < dist[i][j]){
                    dist[i][j] = dist[i][k] + dist[k][j]
                }
            }
        }
    }

    let resCity = -1
    let minReachCity = Infinity

    for(let i=0; i<n; i++){
        let reachCity = 0
        for(let j=0; j<n; j++){
            if(i !== j && dist[i][j] <= distanceThreshold){
                reachCity++
            }
        }

        if(reachCity < minReachCity){
            minReachCity = reachCity
            resCity = i
        }
        else if(reachCity == minReachCity){
            resCity = Math.max(resCity,i )
        }
    }

    return resCity

};