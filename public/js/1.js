//list = list.slice(0,100)
//list = ["6six73fivetwonjbbxkccdgmlbpjoneightnlj"]
let arr = []
//let nums = []
let sums = [];
let sums2 = [];
let pairs = [];
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
    let firstNum
    let lastNum
    let curNums = []
    let numMap = {"one":1,"two":2,"three":3,"four":4,"five":5,"six":6,"seven":7,"eight":8,"nine":9}
    let text = list[i]
    var re = /(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)|([1-9])/gi
    var m, res = [];

    while (m = re.exec(text)) {
        res.push(m[0]);
        re.lastIndex = m.index + 1; // <- Important
    }
    console.log(res);
    let matches = res
    let firstNum2 = !isNaN(parseInt(matches[0], 10)) ? matches[0] : numMap[matches[0]]
    let lastNum2 = !isNaN(parseInt(matches[matches.length-1], 10)) ? matches[matches.length-1] : numMap[matches[matches.length-1]]  
    sums2.push(parseInt(firstNum2.toString()+lastNum2.toString(),10))
    pairs.push([firstNum2,lastNum2])
    document.getElementById("debug").innerHTML += text
    document.getElementById("debug").innerHTML += '   -   ' + firstNum2 +'   -   ' + lastNum2 
    document.getElementById("debug").innerHTML += "  - " + parseInt(firstNum2.toString()+lastNum2.toString(),10) + "<br>"


    let newText = ""
    for(var j=0; j<text.length; j++)
        {
            let char = text.charAt(j)
            newText += '<span ' + getStyle(char,curNums) + '>'+char+'</span>';
        }
    document.getElementById("p1").innerHTML = newText;
    lastNum = curNums.pop()
    let sum;
    if (typeof firstNum === 'undefined'){
        sum = 0
    } else {
    sum = parseInt(firstNum + lastNum.toString(),10)
    }
    sums.push(sum)
    document.getElementById("p1").innerHTML += '   -   <span style="color:red; font-weight:bold">' + sum + "</span>"
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
    console.log(sums2.length)
    document.getElementById("sums").innerHTML = "Part 2 Total: " + sums2.reduce((a,b)=> a+b)   
    //document.getElementById("sums").innerHTML += "<br> Part 2 series: " +sums2
    //document.getElementById("sums").innerHTML += "<br> Part 2 pairs: " +pairs
})

async function run_funcs(arr){
    for(var i=0;i<arr.length;i++)
      await arr[i]();
  }

  run_funcs(arr)

// 6six73fivetwonjbbxkccdgmlbpjoneightnlj 