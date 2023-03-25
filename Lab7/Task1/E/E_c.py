def Xor(a, b):
    if a == 1 and b == 0 or a == 0 and b == 1: return 1
    else: return 0

c, d = tuple(map(int, input().split()))


print(Xor(c, d))