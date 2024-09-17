function checkExam(array1, array2){
    let score = 0;
    let count = 0;
    for(let num of array1){
      if(array1[count] == array2[count] && array2[count] != ""){
        score += 4
      }
      if(array1[count] != array2[count] && array2[count] != ""){
        score -= 1
      }
      count++
    }
    return score >= 0 ? score : 0
}



console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) // score = 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])) // score = 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])) // score = 16
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])) // score = 0