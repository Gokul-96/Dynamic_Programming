// Question1:
// Two Sum

// Problem understanding:
// - Have an array 'nums' and integer 'target'
// - Need to find indices of two numbers in array and add up to 'target'
// - Two indices i and j simply say nums[i]+nums[j] = target
// - single element two form target not accepted I mean indes 0 + 0 to form elemnt not accepted

//Approach
//  - Use Hash table i mean map 

//solution:
let twoSum = function(nums,target) {
    // 1. create empty hash table 
  let map ={};
    // 2. Iterate nums array i -> 0 to n-1
for(let i=0; i<nums.length; i++)
//3. every num in nums array do 
//4. check if target-nums[i] exists in the hash table or not

    if(target-nums[i] in map){
        //5. if it does, then return the indices of i and map[target-nums[i]]
        return [map[target-nums[i]],i];
    }else {
        //6. else, if it done not exist, then we create new entry map[nums[i]] = i
        map[nums[i]] =i;
    }


}

//Time complexity o(n)
// solution 
//  input: [2,7,11,15]
//  output: 9



// Question 2: 

//Anagram is formed by rearranging the letters of a word to produce another word.

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