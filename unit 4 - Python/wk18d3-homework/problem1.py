# Problem 1: IOU
"""
If the name contains a "u," print out the name plus "U are so Uniquely U!"
Otherwise if the name contains an "i," print out the name plus "I bet you're Impressively Intelligent!"
Otherwise if the name contains an "o," print out the name plus "O My! How Original!"
Otherwise, print the name plus "Ehh, a's and e's are so ordinary."
"""
disney_characters = ["simba", "ariel", "pumba", "flounder", "nala", "ursula", "scar", "flotsam", "timon"]
for i in range(len(disney_characters)):
    if "u" in disney_characters[i]:
        print(disney_characters[i],"U are so Uniquely U!")
        continue
    if "i" in disney_characters[i]:
        print(disney_characters[i],"I bet you're Impressively Intelligent!")
        continue
    if "o" in disney_characters[i]:
        print(disney_characters[i],"O My! How Original!")
        continue
    print(disney_characters[i],"Ehh, a's and e's are so ordinary.")


