def reverse3(nums):
  mid=len(nums)//2
  nums[0],nums[-1]=nums[-1],nums[0]
  return nums

print(reverse3([1, 2, 3]))