a, b = int(input()), int(input())

for i in range(a, b + 1):
    for k in range(2, int(i**(1/2)) + 1):
        if i == k**2:
            print(i, end=' ')
            break
