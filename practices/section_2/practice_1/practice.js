function count_same_elements(collection) {
	let map=new Map();
	let ans=[];
	for(let i of collection){
		map.set(i,map.has(i)?map.get(i)+1:1);
	}
	for(let item of map){
		ans.push({key:item[0],count:item[1]})
	}
	return ans;
}

module.exports = count_same_elements;
