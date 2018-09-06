function create_updated_collection(collection_a, object_b) {
  //let a=Array.from(collection_a);//其实collection_a还是会修改，因为是collection_a里面是对象
  //后来我看了一下对象如何复制，现在改一改这个问题
  let a=deepCopy(collection_a);
  for(let item of a){
    if(object_b.value.includes(item.key)){
      item.count--;
    }
  }
  return a;
}
//对象的深复制，所以结果不会影响的到collection_a
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
