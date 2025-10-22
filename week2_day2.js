let data = "Playwright"
let rev=""
for(let i=data.length;i>=0;i--){
    rev=rev+data.charAt(i)
}
console.log(rev) 

let string= "javascript"
let count1=0
let count2=0
for (let i=0;i<string.length;i++){
    if(string.charAt(i)=="a"){
        count1++
    }
    else if(string.charAt(i)=="s"){
            count2++
        }
    
}
console.log(`total count of:a= ${count1}and s= ${count2}`)