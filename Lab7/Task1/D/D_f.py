n = int(input())
Arstr = input()
ar = list(map(int, Arstr.split()))
cnt = 0

for i in range(1, len(ar) - 1):
    if ar[i] > ar[i - 1] and ar[i] > ar[i + 1]: cnt += 1
print(cnt)