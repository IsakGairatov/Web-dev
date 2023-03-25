
# Complete the solve function below.
def solve(s):
    a = s.split()
    s2 = ''
    for i in a:
        s2 += i[0].upper() + i[1:]
        s2 += ' '
    return s2



s = input()

result = solve(s)

print(result)