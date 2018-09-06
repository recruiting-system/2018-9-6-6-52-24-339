function create_updated_collection(collectionA, objectB) {
  let a=deepCopy(collectionA);
  for(let item of a){
    if(objectB.value.includes(item.key)){
      let cnt=Math.floor(item.count/3);
      item.count-=cnt;
    }
  }
  return a;
}

function deepCopy(a){
    let ans=Array.isArray(a)?[]:{};
    for(let i in a){
        if(typeof(a[i])=="object"){
            ans[i]=deepCopy(a[i]);
        }else{
            ans[i]=a[i];
        }
    }
    return ans;
}


module.exports = create_updated_collection;
