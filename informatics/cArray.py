n=int(input())
s=0
arr=list(map(int,input().split()))
for i in range(n):
    if arr[i]>0:
        s+=1
print(s)