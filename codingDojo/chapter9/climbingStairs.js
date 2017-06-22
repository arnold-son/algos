function climbingStairs(num){
  var wrapper = []
  function stairs(num, arr, wrapper)
  {
      if(sum(arr) === num)
      {
        wrapper.push(arr)
        // console.log(arr)
        return
      }
      if(sum(arr) === num - 1){
        arr.push(1)
        // console.log(arr)
        wrapper.push(arr)
        return
      }
      var copy = Object.assign([],arr)
      arr.push(1)
      copy.push(2)
      stairs(num, arr, wrapper)
      stairs(num, copy, wrapper)
  }
  stairs(num,[],wrapper)
  return wrapper
}

console.log(climbingStairs(5))


function sum(arr)
{
  var total =0;
  for (var i =0; i < arr.length; i++)
  {
    total = total+arr[i];
  }
  return total;
}
