def power(a,b):
    if b==0:
        return 1
    else:
        return a**b

a,b=map(int,input().split())
print(power(a,b))