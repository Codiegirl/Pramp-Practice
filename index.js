function getCheapestCost(rootNode) {
  
  //for (let elem of rootNode) {
    if (rootNode.children == []){
      return rootNode.cost// your code goes here
} else {
  // We need to first find out the smallest path cost among all children
  // minCost is where we store the minimum cost we've seen so far
  // if a child's cost is smaller than minCost, we will update minCost to be 
  // that child's cost
    let minCost = MAX_INT//10000
    for(let elem of rootNode.children){
      // what is the cost from elem to the customer?
      // the cost is getCheapestCost(elem)
      const currentCost = getCheapestCost(elem)
    if (currentCost < minCost) {
      minCost = currentCost
    }
  }
      
      return minCost + rootNode.cost
    
    // find minimum cost among all the children
    // we know we can get the minimum cost of one child
    // by calling this function getCheapestCost(rootNode.children[i])
}
  
}

/******************************************
 * Use the helper code below to implement *
 * and test your function above           *
 ******************************************/ 

// Constructor to create a new Node
function Node(cost) {
  this.cost = cost;
  this.children = [];
}
