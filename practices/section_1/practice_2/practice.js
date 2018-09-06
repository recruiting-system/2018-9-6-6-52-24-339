function collect_same_elements(collection_a, collection_b) {
    let ans=[];
    let b=flatten(collection_b);
    for(let i of collection_a){
        if(b.includes(i)){
            ans.push(i);
        }
    }
    return ans;
}
function flatten(collection){
    let ans=[];
    for(let j of collection){
        if(Array.isArray(j)){
            ans=ans.concat(flatten(j));
        }else{
            ans.push(j);
        }
    }
    return ans;
}
module.exports = collect_same_elements;
