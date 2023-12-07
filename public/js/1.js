let arr = []
//let nums = []
let firstNum;
let lastNum;
let sums = [];
const getStyle = (c,curNums) => {
    if(!isNaN(parseInt(c, 10))){
        if (curNums.length===0){
            firstNum = c
            curNums.push(parseInt(c, 10))
            return 'style="color:blue;font-weight:bold"'
        }
        curNums.push(parseInt(c, 10))
        return 'style="color:aqua"'
    }
    else{
        return 'style="color:black"'
    }
}

for (let i=0; i<list.length; i++){
arr.push( () => {
return new Promise(resolve => {
setTimeout(function(list){
    let curNums = []
    let text = list[i]
    let newText = ""
    for(var j=0; j<text.length; j++)
        {
            let char = text.charAt(j)
            newText += '<span ' + getStyle(char,curNums) + '>'+char+'</span>';
        }
    document.getElementById("p1").innerHTML = newText;
    lastNum = curNums.pop()
    let sum = parseInt(firstNum + lastNum.toString(),10)
    sums.push(sum)
    document.getElementById("p1").innerHTML += '<span style="color:red; font-weight:bold">' + sum + "</span>"
    resolve(true)
}
, 1,list);
})
}
)
}

arr.push(() => {
    let sum = sums.reduce((a,b)=>a+b)
    let text = '<span style="color:red; font-weight:bold">' + sum + "</span>"
    document.getElementById("total").innerHTML = text;    
})

async function run_funcs(arr){
    for(var i=0;i<arr.length;i++)
      await arr[i]();
  }

  run_funcs(arr)