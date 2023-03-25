N = int(input())
ar = []
for i in range(N):
    cmn, *line = input().split()
    if cmn == 'insert':
        ar.insert(int(line[0]), int(line[1]))
    elif cmn == 'print':
        print('[', end='')
        for i in ar[:len(ar) - 1]:
            print(i, end=', ')
        print(ar[len(ar) - 1], end='')
        print(']')
    elif cmn == 'remove':
        try:
            ar.remove(int(line[0]))
        except:
            pass
    elif cmn == 'append':
        ar.append(int(line[0]))
    elif cmn == 'sort':
        ar.sort()
    elif cmn == 'pop':
        ar.pop()
    elif cmn == 'reverse':
        ar.reverse()