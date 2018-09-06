function count_same_elements(collection) {
	let map=new Map();
	let ans=[];
	for(let i of collection){
		let ii=i,cnt=1;
		if(i.length>1){
			let c=i[1];
			if(c=="-"||c==":"){
				ii=i.split(c);
				cnt=ii[1]*1;
				ii=ii[0];
			}else if(c=="["){
				ii=i.split('[');
				cnt=ii[1].split(']')[0]*1;
				ii=ii[0];
			}
		}
		map.set(ii,map.has(ii)?map.get(ii)+cnt:cnt);
	}
	for(let item of map){
		ans.push({name:item[0],summary:item[1]})
	}
	return ans;
}

module.exports = count_same_elements;