def my_func1():
    x = 1  # This is a LOCAL variable.
    print(x)  # 1


def my_func2():
    x = 5  # This is a DIFFERENT local variable.
    print(x)  # 5


print(x)  # x is OUT OF SCOPE - no x exists here!

##########################################

x = 2


def my_func1():
    x = 1
    print(x)  # 1 - Python checks local scopes first.


def my_func2():
    x = 5
    print(x)  # 5 - Python checks local scopes first.


my_func1()
my_func2()

print(x)  # 2 - Python found no local scope; prints global variable.

#########################################


foo = 5


def incrementFoo():
    #global variables can only read, if want to update, need declare "global"
    global foo
    foo += 1


print(foo)  # prints 5
incrementFoo()
print(foo)  # prints 6!