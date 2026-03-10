n=int(input())
s=0
arr=list(map(int,input().split()))
for i in range(n-1):
    if arr[i]<arr[i+1]:
        s+=1
print(s)