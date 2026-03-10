if __name__ == '__main__':
    students=[]
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name,score])
        
    scores=[s[1] for s in students]
    unique=sorted(list(set(scores)))
    second=unique[1]
    names=[s[0] for s in students if s[1]==second]
    
    names.sort()
    for name in names:
        print(name)
        