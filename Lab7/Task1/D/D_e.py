n = int(input())
Arstr = input()
ar = list(map(int, Arstr.split()))
cnt = 0

for i in range(1, len(ar)):
    if ar[i - 1] < 0 and ar[i] < 0 or ar[i - 1] > 0 and ar[i] > 0:
        cnt += 1
        break
if cnt: print("YES")
else: print("NO")

