//The Seattle Coding Dojo wants to send excess water to the Burbank Coding Dojo,
//so it landscapes its rooftop with a set of unusual elevated terraces. The
//terraces are all the same width, but have varying heights. When it rains, water
//gathers in the low terraces that are surrounded by taller ones. For example,
//if we have terraces with heights [3,1,1,4,2], then as much as 4 units of water
//could be gathered, because water would pool 2-deep on two different terraces
//(both of the 1-high terraces: between the 3-high and 4-high terraces). Water
//on the other terraces just runs off the sides. Given an array of terrace heights,
//return the maximum amount of water that is trapped when rains come.

function getRain(arr) {
    var vol = 0;
    var LBound;
    var RBound;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i+1] < arr[i] && !LBound) {
            LBound = i;
            for(var j = i + 2; j < arr.length; j++) {
                if(arr[j] >= arr[LBound]) {
                    RBound = j;
                    break;
                } else if (arr[j] > arr[j-1]) {
                    if(!RBound) {
                        RBound = j;
                    } else if (arr[j] > arr[RBound]) {
                        RBound = j;
                    }
                }
            }
            if(!RBound) {
                return vol;
            }
            var smBound = Math.min(arr[LBound], arr[RBound]);
            for(var k = LBound + 1; k < RBound; k++) {
                vol += smBound - arr[k];
            }
            i = RBound - 1;
            LBound = null;
            RBound = null;
        }
    }
    return vol;
}
console.log(getRain([9,5,4,0,9,6,7,3,0]));
