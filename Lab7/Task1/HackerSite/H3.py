n = int(input())
student_marks = {}
for _ in range(n):
    name, *line = input().split()
    scores = list(map(float, line))
    student_marks[name] = scores
query_name = input()
avr = 0
for i in student_marks[query_name]:
    avr += i
print("{}0".format(avr / 3))