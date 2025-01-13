M=int(input("enter the first input :"))
a= set(map(int,input().split()))
N= int(input("inter the second input:"))
b= set(map(int,input().split()))
c = a.symmetric_difference(b)

for num in sorted(c):
    print(num)