x=int(input())
p=int(input())
y=int(input())
s=0
while x<=y:
    x=x*p/100+x
    s+=1

print(s)
