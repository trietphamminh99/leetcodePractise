var isAnagram = function(s, t) {
    const s1 = s.split('').sort()
    const t1 = t.split('').sort()
   console.log(s1)
   console.log(t1)
    return s1 == t1
};
let s ="anagram"
let t ="nagaram"
console.log(isAnagram(s,t))