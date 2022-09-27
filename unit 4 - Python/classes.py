class Dog:
    #class variable - variable that can be tracked for ALL classes
    total_dogs = 0

    #__init__ = constructor()
    #self here defines an instance, you create a class with a unqiue instance
    #self = "this.method"
    def __init__(self, name="", age=0):
        # Note the optional parameters and defaults.
        self.name = name  # All dogs have a name.
        self.age = age  # All dogs have an age.
        Dog.total_dogs +=1
    
    def bark_hello(self):
        print("Woof I am", self.name)

print(Dog.total_dogs) # = 0

#creating instance of dog
my_dog = Dog("Woofy", 10)

print(Dog.total_dogs) # = 1

my_dog.bark_hello()

class Band:
    number_of_bands = 0

    def __init__(self, band_name, genre, albums_released=0):
        self.band_name = band_name
        self.albums_released = albums_released
        self.genre = genre

        Band.number_of_bands += 1
        print(Band.number_of_bands)
        self.print_stats()

    def print_stats(self):
        print(f'The {self.genre} band {self.band_name} has {self.albums_released} albums')

my_band = Band(band_name="Queen", albums_released= 15, genre="rock")

class Bank:
    total_money = 0

    def __init__(self, accountType="", balance=0):
        self.accountType = accountType
        self.balance = balance
        Bank.total_money += balance
    
    def withdraw(self, amount):
        Bank.total_money -= amount
        self.balance -= amount
        print("Total money:", Bank.total_money)
        print(f"My {self.accountType} bank balance:", self.balance)

    def deposit(self, amount):
        Bank.total_money += amount
        self.balance += amount
        print("Total money:", Bank.total_money)
        print(f"My {self.accountType} bank balance:", self.balance)

ben_account = Bank(accountType="savings", balance = 1000)
ben_account.withdraw(500)
ben_account.deposit(500)

