

def split_and_join(line):
    ar = line.split()
    return "-".join(ar)

line = input()
result = split_and_join(line)
print(result)