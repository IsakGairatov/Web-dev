str = input()
str2 = ''

for i in range(len(str) - 1, -1, -1):
    if str2 == '' and str[i] =='0': pass
    else: str2 += str[i]

print(str2)