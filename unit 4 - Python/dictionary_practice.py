my_name = {
  'b': 1,
  'e': 2,
  'n': 2,
  't': 2
}

for key in my_name:
  print(f"The letter {key} in my name {my_name[key]} times")


words = ["hello","water","hello",'aaa','hello','bbb']
def mostPopularWord(word_list):
  hashmap = {}
  for word in word_list:
    if word in hashmap:
      hashmap[word]+=1
    else:
      hashmap[word] = 1
  hashmap_keys = list(hashmap.keys())
  hashmap_values = list(hashmap.values())
  index = hashmap_values.index(
    max(hashmap_values)
  )
  popular_word = hashmap_keys[index]
  # popular_word = max(hashmap, key=hashmap.get)
  print(f"Most popular word is {popular_word} and it appears {hashmap[popular_word]} times!")
  
mostPopularWord(words)

  

# for key in my_dictionary.keys
# for key in my_dictionary.value
# for key,value in my_dictionary.items

# dict = {
#     "a" : 1,
#     "b" : 2,
#     "c" : 3,
#     "d" : 4,
# }
# for key, value in dict.items():
#     print(('key: {} value: {}').format(key, value))
#     # print("key: " + key + " value: " + str(value))

# # key: a value: 1
# # key: b value: 2
# # key: c value: 3
# # key: d value: 4

# Kiong's Answers

# name = 'kionnggg'
# name_dict = {}

# for char in name:
#   if not char in name_dict:
#     name_dict[char] = 1
#   else:
#     name_dict[char] += 1

# for char, count in name_dict.items():
#   if count == 1:
#     times = 'once'
#   elif count == 2:
#     times = 'twice'
#   else:
#     times = f'{count} times'

#   print(f'The letter {char} appears in my name {times}')

# words = [
#   "hello",
#   "water",
#   "hello"
# ]

# def mostPopularWord(words):
#   words_dict = {}
#   for word in words:
#     if word not in words_dict:
#       words_dict[word] = 1
#     else:
#       words_dict[word] += 1

#   words_dict_keys = list(words_dict.keys())
#   words_dict_vals = list(words_dict.values())
#   index = words_dict_vals.index(
#     max(words_dict_vals)
#   )

#   return words_dict_keys[index]

# print(mostPopularWord(words))