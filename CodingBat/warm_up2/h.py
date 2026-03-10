def array_count9(nums):
  s=0
  for i in range(len(nums)):
    if nums[i]==9:
      s+=1
  return s
      

print(array_count9([1, 9, 9, 3, 9]))