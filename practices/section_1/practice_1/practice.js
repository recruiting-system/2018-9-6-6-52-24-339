function collect_same_elements(collection_a, collection_b) {
  let ret=[];
  for(let i=0;i<collection_a.length;i++){
      if(collection_b.includes(collection_a[i])){
          ret.push(collection_a[i]);
      }
  }
  return ret;
}

module.exports = collect_same_elements;
