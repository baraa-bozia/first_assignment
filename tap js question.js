// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
const arr=[2,7,11,15];
var target=18;
function fun(arr,target){
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
            // var str="["+i+","+j+"]";

            console.log("["+i+","+j+"]");
            return ;
        }
    }
}

}
fun(arr,target);
