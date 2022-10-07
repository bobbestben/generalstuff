# class Movie:
#     def __init__(self, movie_data): #movie_data = dictionary { title: ..., rating: ... }
#         self.movie_data = movie_data
    
#     def get_movie_title(self):
#         print(self.movie_data["title"])

#     def get_movie_rating(self):
#         print(self.movie_data["rating"])

# def return_single_movie_object(movie_title, movie_rating):
#     return { 
#        "title": movie_title,
#        "rating": movie_rating 
#     }


# # Create a variable called search_or_ratings, set to "1".
# # You should be able to change this between "1", "2", and "3" to change what your program prints.
# search_or_ratings = 2

# def list_search_results(movie_titles):
#     # Loop through the list of titles and print them (indented with four spaces).
#     for title in movie_titles:
#         print("    " + title)

# def print_single_movie_rating(movie_query):
#     movie_object = return_single_movie_object(movie_query, 7)
#     print('movie_object',movie_object)
    
#     my_movie = Movie(movie_object)
#     my_movie.get_movie_title()
#     my_movie.get_movie_rating()

# def print_all_ratings(movie_list):
#     # Print all great ratings for a movie list.
#     for movie in movie_list:
#         print("The movie", movie, "has a great rating!")


# # Create one main function that will call everything else.
# def main():

#     # A hard-coded movie list with which to test.
#     default_movie_list = ["Back to the Future", "Blade", "Spirited Away"]

#     # Let's test: Call a print_all_ratings() function and pass it the default_movie_list as a parameter.
#     print_all_ratings(default_movie_list)

#     if search_or_ratings == 1:
#         # If search_or_ratings is "1", call list_search_results().
#         list_search_results(default_movie_list)
#     elif search_or_ratings == 2:
#         # If search_or_ratings is "2", call print_movie_rating().
#         print_single_movie_rating("Moana")
#     else:
#         # If search_or_ratings is "3", call print_single_movie_rating().
#         print("Error: Your input must be 1 or 2!")

# # This line tells Python to run main() when it first opens.
# if __name__ == "__main__":
#     main()

class Movie:
    def __init__(self, movie_data):
        self.movie_data = movie_data

    def get_movie_title(self) -> str:
        return self.movie_data["title"]

    def get_movie_rating(self):
        return self.movie_data.["rating"]
        
def return_single_movie_object(title, rating):
    return Movie({"title": title, "rating": rating})

# Create a variable called search_or_ratings, set to "1".
# You should be able to change this between "1", "2", and "3" to change what your program prints.
search_or_ratings = 3

a_movie = return_single_movie_object("Back to the Future", 8)

def list_search_results(movie_list):
    # Loop through the list of titles and print them (indented with four spaces).
    for movie in movie_list:
        print("    " + movie.get_movie_title())

def print_single_movie_rating():
    # Print the whole formatted string.
    print("The rating for", a_movie.get_movie_title(), "is", a_movie.get_movie_rating())

def print_all_ratings(movie_list):
    # Print all great ratings for a movie list.
    for movie in movie_list:
        print("The movie", movie.get_movie_rating(), "has a great rating!")


# Create one main function that will call everything else.
def main():

    movies = [
        return_single_movie_object("Back to the Future", 10),
        return_single_movie_object("Blade", 3),
        return_single_movie_object("Spirited Away", 6),
    ]

    # Let's test: Call a print_all_ratings() function and pass it the default_movie_list as a parameter.
    print_all_ratings(movies)

    if search_or_ratings == 1:
        # If search_or_ratings is "1", call list_search_results().
        list_search_results(movies)
    elif search_or_ratings == 2:
        print_single_movie_rating()
        pass
    else:
        print("Error: Your input must be 1 or 2!")

# This line tells Python to run main() when it first opens.
if __name__ == "__main__":
    main()