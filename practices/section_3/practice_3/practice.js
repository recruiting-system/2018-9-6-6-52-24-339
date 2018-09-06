function create_updated_collection(collectionA, objectB) {
  let map=new Map();
  for(let i of collectionA){
    map.set(i,map.has(i)?map.get(i)+1:1);
  }
  for(let item of map){
    if(objectB.value.includes(item[0])){
      let cnt=Math.floor(item[1]/3);
      map.set(item[0],item[1]-cnt);
    }
  }
  let ret=[];
  for(let item of map){
    ret.push({key:item[0],count:item[1]});
  }
  return ret;
}

module.exports = create_updated_collection;
