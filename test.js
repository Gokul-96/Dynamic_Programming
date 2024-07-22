function Anagrams(strs) {
    //create hash map
        const map ={};
    
        for (let str of strs){
    //sort characters
            const sortedStr = str.split('').sort().join('');
             
        

  

if (!map[sortedStr]) {
    map[sortedStr] = [];
}

map[sortedStr].push(str);
}

// Return the values of the hash map which are the groups of anagrams
return Object.values(map);
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = Anagrams(strs);
console.log(result);