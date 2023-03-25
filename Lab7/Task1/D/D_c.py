n = int(input())
Arstr = input()
ar = list(map(int, Arstr.split()))
cnt = 0
for i in ar:
    if i > 0: cnt += 1
print(cnt)