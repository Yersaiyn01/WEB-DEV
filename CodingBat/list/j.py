def sum2(nums):
  if len(nums)<2 and len(nums)>0:
    return(nums[0])
  elif len(nums)==0:
    return 0
  else:
    return nums[0]+nums[1]

print(sum2([1, 2, 3]))