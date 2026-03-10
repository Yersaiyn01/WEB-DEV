def count_evens(nums):
  s=0
  for i in range(len(nums)):
    if nums[i]%2==0:
      s+=1
  return s

print(count_evens([2, 1, 2, 3, 4]))