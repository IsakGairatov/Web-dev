def plov(n, d):
    return n**d

c, d = tuple(map(int, input().split()))

print(plov(c, d))