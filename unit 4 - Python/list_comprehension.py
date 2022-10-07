old_list = [1, 2, 3, 4, 5, 6]

squares_1 = []

# new_list = [modification  old_list  [condition]]

squares = [i ** 2 for i in old_list]

# Even squares: The condition is the `if` statement!
squares_even = [i ** 2 for i in old_list if i % 2 == 0]