d = 0
sums = 0
num = input()
for i in num[::-1]:
    sums += int(i) * 2**d
    d += 1

print(sums)