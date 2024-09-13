def check_exam(arr1,arr2):
    count = 0
    score = 0
    for num in arr1:
        if arr1[count] == arr2[count] and arr2[count] != "":
            score += 4
        if arr1[count] != arr2[count] and arr2[count] != "":
            score -= 1
        count += 1
    return score if score > 0 else 0
  

