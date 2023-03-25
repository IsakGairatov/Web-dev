n = int(input())
i = 1
ch = 1
while i <= n:

    if i == n:
        print("YES")
        ch = 0
    i = i * 2
if ch: print("NO")
