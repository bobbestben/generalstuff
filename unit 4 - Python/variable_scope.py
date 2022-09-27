piranhas_hungry = True

def swing_vine_over_river():
  global piranhas_hungry
  piranhas_hungry = False
  print("Ahh! Piranhas got me!")

def jump_in_river():
  if piranhas_hungry == True:
    print("I'm not going in There! There are hungry piranhas")
  else:
    print("Piranhas are full! Swimming happily through the Amazon!")

jump_in_river()
swing_vine_over_river()
jump_in_river()



# Global variable x:
x = 1

# Only local x in this function:
def my_func1():
    x = 2  # This is a different, local x
    print(x)  # Print the local x


# Using global x:
def my_func2():
    global x  # We declare we'd like to use the global x.
    print(x)  # Print that global x.
    x = 3  # Change that global x.


my_func1()
my_func2()

# Print global variable x.
print(x)  # Did x get permanently changed by my_func2()? Yes, x= 3 after my_func2()