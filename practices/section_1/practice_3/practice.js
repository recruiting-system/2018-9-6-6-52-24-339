function collect_same_elements(collection_a, object_b) {
  let ret=[];
  for(let i of collection_a){
      if(object_b.value.includes(i)){
          ret.push(i);
      }
  }
  return ret;
}

module.exports = collect_same_elements;
