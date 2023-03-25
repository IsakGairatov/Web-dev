def min1(a, b, c, d):
    ar = [a, b, c, d]
    min = a
    for i in ar:
        if i < min: min = i
    return min


a, b, c, d = tuple(map(int, input().split()))

print(min1(a, b, c ,d))