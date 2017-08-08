//Edge List Exercise 1:
//
// Graph A:
//
// [[A,B]]
//
// Graph B:
//
// [[A,B],[B,A],[B,C],[C,A]]
//
// Graph C:
//
// [[A,B],[A,C],[A,H],[B,D],[B,E],[C,A],[C,D],[D,E],[F,E],[G,F],[G,H],[H,G],[H,F]]

function Vertex(val){
    if(!(this instanceof Vertex)){
        return new Vertex();
    }
    this.val = val;
    this.visited = false;
}

function ELGraph(){
    if(!(this instanceof ELGraph)){
        return new ELGraph();
    }
    this.newID = 0;
    this.vertList = {};
    this.edgeList = [];
    this.addVertex = function(val){
        var id = this.newID;
        this.vertList[id] = Vertex(val);
        this.newID++;
        return id;
    }
    this.getVertexValue = function(vertexID){
        return this.vertList[vertexID].val;
    }
    this.setVertexValue = function(vertexID, val){
        if(!this.vertList[vertexID]){
            return false;
        }
        this.vertList[vertexID].val = val;
        return true;
    }
    this.removeVertex = function(vertexID){
        if(!this.vertList[vertexID]){
            return false;
        }
        delete this.vertList[vertexID];
        for (var i = this.edgeList.length-1; i >= 0; i--) {
            if(this.edgeList[i][0] === vertexID || this.edgeList[i][1] === vertexID){
                this.edgeList.splice(i,1);
            }
        }
        return true;
    }
    this.addEdge = function(vertexID1, vertexID2, val){
        for (var i = 0; i < this.edgeList.length; i++) {
            if(this.edgeList[i][0] === vertexID1 && this.edgeList[i][1] === vertexID2){
                return false;
            }
        }
        this.edgeList.push([vertexID1,vertexID2,val]);
        return true;
    }
    this.removeEdge = function(vertexID1,vertexID2){
        for (var i = 0; i < this.edgeList.length; i++) {
            if(this.edgeList[i][0] === vertexID1 && this.edgeList[i][1] === vertexID2){
                this.edgeList.splice(i,1);
                return true;
            }
        }
        return false;
    }
    this.getEdgeValue = function(vertexID1,vertexID2){
        for (var i = 0; i < this.edgeList.length; i++) {
            if(this.edgeList[i][0] === vertexID1 && this.edgeList[i][1] === vertexID2){
                return this.edgeList[i][2] === undefined ? null : this.edgeList[i][2];
            }
        }
        return null;
    }
    this.setEdgeValue = function(vertexID1,vertexID2,val){
        for (var i = 0; i < this.edgeList.length; i++) {
            if(this.edgeList[i][0] === vertexID1 && this.edgeList[i][1] === vertexID2){
                this.edgeList[i][2] = val;
                return true;
            }
        }
        return false;
    }
    this.adjacent = function(vertexID1,vertexID2){
        for (var i = 0; i < this.edgeList.length; i++) {
            if(this.edgeList[i][0] == vertexID1 && this.edgeList[i][1] == vertexID2){
                return true;
            }
        }
        return false;
    }
    this.neighbors = function(vertexID){
        var neighbors = [];
        for (var i = 0; i < this.edgeList.length; i++) {
            if(this.edgeList[i][0] === vertexID){
                neighbors.push(this.edgeList[i][1]);
            }
        }
        return neighbors;
    }
    this.reset = function(){
        for (var vertex in this.vertList) {
            vertex.visited = false;
        }
    }
    this.isReachable = function(vertexID1,vertexID2){
        var path = [vertexID1];
        this.vertList[vertexID1].visited = true;
        while(path.length > 0){
            var lastVertex = path[path.length-1];
            var neighbors = this.neighbors(lastVertex);
            var endOfPath = true;
            for (var i = 0; i < neighbors.length; i++) {
                var neighborID = neighbors[i];
                if(neighborID === vertexID2){
                    this.reset();
                    return true;
                }
                if(!this.vertList[neighborID].visited){
                    path.push(neighborID);
                    this.vertList[neighborID].visited = true;
                    endOfPath = false;
                }
            }
            if(endOfPath)
            { path.pop(); }
        }
        this.reset();
        return false;
    }
}

var myGraph = ELGraph();
myGraph.addVertex("a");
myGraph.addVertex("b");
myGraph.addVertex("c");
myGraph.addVertex("d");
myGraph.addVertex("e");
myGraph.addVertex("f");
myGraph.addVertex("g");
myGraph.addVertex("h");
myGraph.addEdge(0,1);
myGraph.addEdge(0,2);
myGraph.addEdge(0,7);
myGraph.addEdge(1,3);
myGraph.addEdge(1,4);
myGraph.addEdge(2,1);
myGraph.addEdge(2,3);
myGraph.addEdge(3,4);
myGraph.addEdge(5,4);
myGraph.addEdge(6,5);
myGraph.addEdge(6,7);
myGraph.addEdge(7,6);
myGraph.addEdge(7,5);
// console.log(myGraph.neighbors(7))
console.log(myGraph.isReachable(0,4 ))
