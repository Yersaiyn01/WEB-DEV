def max_end3(nums):
  if (nums[0]>nums[2]):
    max=nums[0]
    return [max,max,max]
  else:
    max=nums[2]
    return [max,max,max]
  
print(max_end3([1, 2, 3]))