if __name__ == '__main__':
    n = int(input().strip())
    if(n%2==0 and 5>=n and 2<=n):
        print("Not Weird")
    elif(n%2==0 and 20>=n and 6<=n):
        print("Weird")
    elif(n%2==0 and n>20):
        print("Not Weird")
    elif(n%2!=0):
        print("Weird")
