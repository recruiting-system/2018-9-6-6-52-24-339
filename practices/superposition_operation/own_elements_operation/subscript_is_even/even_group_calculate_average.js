'use strict';
function getLength(a){
    // let cnt=0
    // while(a){
    //     a=Math.floor(a/10);
    //     cnt++;
    // }
    // return cnt;
    a=a+'';
    return a.length;
}
var even_group_calculate_average = function(collection){
    let ans=[];
    let c=collection.filter(function(value,index,arr){//懒得改成箭头函数。。。
        return (index+1)%2==0&&value%2==0;
    }).sort(function(a,b){
        return a-b;
    });
    if(c.length==0){
        return [0];
    }
    let s=[];
    for(let i=0;i<=getLength(c[c.length-1]);i++){
        s.push([]);
    }
    for(let i of c){
        s[getLength(i)].push(i);
    }
    for(let i of s){
        if(i.length!=0){
            let sum=0;
            for(let j of i){
                sum+=j;
            }
            sum=sum/i.length;
            ans.push(sum);
        }
    }
    return ans;
};
module.exports = even_group_calculate_average;
