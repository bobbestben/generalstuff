# range in loops
# range is non-inclusive
# returns a list
# range(5) = [0,1,2,3,4]

colours_list = ['red','green','blue','indigo','violet','pink',]
for color in colours_list:
    
    print(color)

for index in range(len(colours_list)):
    colours_list[index] = len(colours_list[index])
print(colours_list)

myrange = range(10)

print(myrange)