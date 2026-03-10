x=int(input())
limit=int(x**0.5)+1
for i in range(2,limit):
    if x%i==0:
        print(i)
        break
else:
    print(x)