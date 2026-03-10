x1=0
x2=1
n=int(input())
i=1
while x2<n:
    f_next=x1+x2
    x1=x2
    x2=f_next
    i+=1
if x2==n:
    print(i)
else:
    print(-1)