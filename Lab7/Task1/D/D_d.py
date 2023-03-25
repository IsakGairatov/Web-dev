n = int(input())
Arstr = input()
ar = list(map(int, Arstr.split()))
cnt = 0

for i in range(1, len(ar)):
    if ar[i - 1] < ar[i]: cnt += 1
print(cnt)