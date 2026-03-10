def sum67(nums):
    total = 0
    recording = True
    
    for n in nums:
        if n == 6:
            recording = False
            
        if recording:
            total += n
       
        if not recording and n == 7:
            recording = True
            
    return total

print(sum67([1, 2, 2, 6, 99, 99, 7]))