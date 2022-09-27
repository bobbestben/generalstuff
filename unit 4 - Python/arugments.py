#Advanced Function Arguments

# Args
def sum_everything(*my_arguments):
    sum = 0
    for num in my_arguments:
        sum += num
    print(sum)

sum_everything(1,2,3,4,5)

# Keyword Arguments - Kwargs
# specifying the parameter and value in argument
# divide(second=2, third=1, first=10)

# **kwargs
# *args is a list
# **args is a dictionary

def yogurt_land(drink, spoon, **kwargs):
  if spoon:
    print("Here is your spoon!")

  else:
    print("No spoon, no worries")

  print("Here is your", drink)

  for keyword, flavor in kwargs.items():
    print("My", keyword, "is a", flavor)


yogurt_land("water", "large", first_froyo="vanilla", second_froyo="chocolate", third_froyo="banana")