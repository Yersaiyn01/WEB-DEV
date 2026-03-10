if __name__ == '__main__':
    N = int(input())
    s=[]
    for _ in range(N):
        command=input().split()
        if command[0]=="append":
            s.append(int(command[1]))
        elif command[0]=="insert":
            s.insert(int(command[1]),int(command[2]))
        elif command[0]=="remove":
            s.remove(int(command[1]))
        elif command[0]=="pop":
            s.pop()
        elif command[0]=="reverse":
            s.reverse()
        elif command[0]=="sort":
            s.sort()
        elif command[0]=="print":
            print(s)

        
