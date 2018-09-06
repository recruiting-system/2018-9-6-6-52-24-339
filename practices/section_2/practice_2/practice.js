function count_same_elements(collection) {
	let map=new Map();
	let ans=[];
	for(let i of collection){
		let ii=i.split('-');
		let cnt=ii.length>1?ii[1]*1:1;
		map.set(ii[0],map.has(ii[0])?map.get(ii[0])+cnt:cnt);
	}
	for(let item of map){
		ans.push({key:item[0],count:item[1]})
	}
	return ans;
}

module.exports = count_same_elements;
