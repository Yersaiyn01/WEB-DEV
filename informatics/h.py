x1=0
x2=1
n=int(input())
i=2
while i<=n:
    f_next=x1+x2
    x1=x2
    x2=f_next
    i+=1
print(x2)