
n=int(input())
s=set(map(int,input().split()))
cmd=int(input())
for _ in range(cmd):
    q=input().split()
    cmdd=q[0]
    if cmdd=="remove":
        s.remove(int(q[1]))
    elif cmdd=="discard":
        s.discard(int(q[1]))
        
    elif cmdd=="pop":
        s.pop()
        
print(sum(s))
    