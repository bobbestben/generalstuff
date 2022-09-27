# Dictionaries = just a list/object of items, may contain duplicates
# Sets - is a list without duplicates, can create manually or use set()
# Note that sets method does not preserve the order of array/list

clothing_list = ['aa','bb','cc','dd','ee','aa','bb']
clothing_set = set(clothing_list)

for index,element in enumerate(clothing_list):
    print('list',index,element)

# Notice the index here constantly changes
# Hence cannot pop() anyhow!
# use .remove('aa') instead
for item,element in enumerate(clothing_set):
    print('sets',index,element)

clothing_list.append("red")
print(clothing_list)

# adding a duplicate - nothing happens, no error
clothing_set.add("aa")
print(clothing_set)


# Tuples
seasons = ("fall","winter","spring","summer")

for index,element in enumerate(seasons):
    print( index, element)

# These operations won't work as tuple is immutable
# seasons.append("asdas")
# seasons.pop()
# seasons[1]="asd"
print(seasons[1])