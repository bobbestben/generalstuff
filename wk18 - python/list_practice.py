list = [2,4,6,8]
print_message = f"my max is {max(list)}"
print(print_message)

pop = list.pop()
print('list after pop is :', list)

list.insert(2, pop)
print('list after insert :', list)

list.pop(1)
print('list after pop at index 1 :', list)

list.append(3)
print('list after append :', list)

average = sum(list) / len(list)
print('average is :', average)

