def centered_average(nums):
  total=sum(nums)
  smallest=min(nums)
  largest=max(nums)
  centered=total-smallest-largest
  return centered//(len(nums)-2)
