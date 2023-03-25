n = int(input())
Arstr = input()
ar = list(map(int, Arstr.split()))

for i in ar:
    if i % 2 == 0: print(i, end=' ')