print("Hello World!")

ask = input("Enter y if you want to use the calculator, Enter n to skip the calculator ")
if ask == 'y' or ask == "Y" or ask == "yes" or ask == "YES" or ask == "Yes":
    print("redericting you to the calculator...")
    print()
    print()
    print()
    print()
    print()
    print()
    print()
    print()
    print()
    print()
elif ask == "n" or ask == "N" or ask == "no" or ask == "No" or ask == "NO":
    print('LOL you cannot do this action')
    print()
    print()
    print()
    print()
    print()
    print()
    print()
    print()
    print()
    print()
    print("redericting you to the calculator...")
    print()
    print()
    print()
    print()
    print()
    print()
    print()
    print()
    print()
    print()
def  multiplier():
    a=int(input("Enter A number "))
    b=input("What do you want to choose * / + - ")
    c=int(input("Enter another number "))
    if b=="*":
        print(f"this will be the format {a} {b} {c}")
        want=input("Want to continue? enter y for yes. Enter n to not ")
        if ask == 'y' or ask == "Y" or ask == "yes" or ask == "YES" or ask == "Yes":
            print("Ok")
            print(" ")
        elif ask == "n" or ask == "N" or ask == "no" or ask == "No" or ask == "NO" or ask == "not":
            print("Ok")
            multiplier()
        
    elif b=="/":
        print(f"this will be the format {a} {b} {c}")
        print(a/c)
    elif b=='-':
        print(f"this will be the format {a} {b} {c}")
        print(a-c)
    elif b=="+":
        print(f"this will be the format {a} {b} {c}")
        print(a+c)
    elif a == "" or a!= int:
        print("Invalid format please try Again!!")
        multiplier()
    elif b == "" or b == int:
        print("Invalid format please try Again!!")
        multiplier()
    elif c == "" or c!= int:
        print("Invalid format please try Again!!")
        multiplier()



multiplier()

def numbertypechecker():
    number1 = int(input("Enter any type of number positive or negitive "))
    if number1 > 0:
        print("This is a Positive number")
    elif number1 < 0:
        print("this is a Negitive number")
    elif number1 == 0:
        print("This is a nuetral number(zero 0)")
    else :
        print("invalid")
        numbertypechecker()
### this function was made because of useage of else to check...
### Calling the function bellow
numbertypechecker()

numbers = 20
for i in range(0,21):
    print(i)


def revers():
    animals = ['lion','tiger','bull',"cow", "cat", "dog"]
    print(animals[0])
    print(animals[1])
    print(animals[2])
    print(animals[3])
    print(animals[4])
    print(animals[5])
    ### next part
    print(animals[5])
    print(animals[4])
    print(animals[3])
    print(animals[2])
    print(animals[1])
    print(animals[0])
revers()

list = [1,2,3,4,5,6,77]
print(list[6])
### why 1 
def check():
    word="how"
    if word == "how":
        word = 'who'
    if word == 'who':
        print(f"This word {word} is a palindrome.")
        print(f'the palindrome of {word} is how')
    else:
        print(word)
check()
def find():
    import random
    randomNumber = random.randint(1,50)
    print(randomNumber)
find


### 1.60934 = kilometer, kilometer = miles * 1.60934
def convert():
    checkNumber=int(input("Enter an number, and IT should be positive, because you number will be turning in from kilometer(s) into mile(s)"))
    if checkNumber != int or checkNumber == "" :
        print("Invalid form or value")
        convert()
    elif checkNumber == int and checkNumber != "":
        print(f"Please confirm if this was your number {checkNumber}")
        confirm = input("Y/N")
        if confirm == "Y" or confirm == "y" or confirm == "yes" or confirm == "YES" or confirm == "Yes":
            print("Thankyou for confirming")
            print("Redericting you to the server")
            print()
            print()
            print()
            print()
            print()
            print()
            print()
            print()
            print(checkNumber*1.60934," miles")
        elif confirm == "n" or confirm == "N" or confirm == "no" or confirm == "NO" or confirm == "No":
            print("thanks")
            print("Redericting you to the server")
            print()
            print()
            print()
            print()
            print()
            print()
            print()
            print()
            convert()
convert()

def dictionary():
    name = "jhon"
    age = 12
    country = 'USA'
    
    askagain = input("Would you like to print the name the age the country of someone's/youres, y/n")
    if askagain == "Y" or askagain == "y" or askagain == "Yes" or askagain == "yEs" or askagain == "yeS" or askagain == "YES":
        ask2 = input("Who you or someone else, y/s")
        if ask2 == "Y" or ask2 == "y" or ask2 == "yes" or ask2 == "YES" or ask2 == "me" or ask2 == "ME" or ask2 == "Me" or ask2 == "You" or ask2 == "YOU":
            askname = input("What is your name?")
            askage = int(input("What is your age?"))
            askcountry = input("What country do you live in?")
            if name == askname:
                if age == askage:    
                    if country == askcountry:
                        print(f"Name:{name} Age: {age} Country:{country}")
            else:       
                print(f"Name:{askname} Age: {askage} Country:{askcountry}")
        else:
            print(f"Name:{name} Age: {age} Country:{country}")
    else:
        print("ok")
dictionary()

# Summing numbers from 1 to 50 using while loop
total = 0
num = 1

while num <= 50:
    total += num
    num += 1

print("Sum of numbers from 1 to 50 is:", total)

def count_consonants(s):
    vowels = 'aeiouAEIOU'
    count = 0
    for char in s:
        if char.isalpha() and char not in vowels:
            count += 1
    return count

text = input("write a word or anything")
print("Number of consonants:", count_consonants(text))
count_consonants()

# 15. Check if a number is prime
def is_prime(n):
    if n <= 1:
        print(False)
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            print(False)
    print(True)
is_prime(6)


 #16. Sort a list in descending order
def sort_descending(lst):
    print(sorted(lst, reverse=True))
sort_descending([1,23,54,-10])


# 17. Remove duplicates from a list
def remove_duplicates(lst):
    print(list(set(lst)))
remove_duplicates([1,1,222,333,222,333,4,5])


# 18. Print a multiplication table (1 to 10)
def print_multiplication_table():
    print("Multiplication Table (1 to 10):")
    for i in range(1, 11):
        for j in range(1, 11):
            print(f"{i} x {j} = {i*j}", end='\t')
        print()
print_multiplication_table()


# 19. Check voting eligibility
def check_voting_eligibility():
   age = int(input("What is your age"))
   if age >= 18:
       print("not eligible to vote")
   else:
       print("elligible to vote")
       
     
check_voting_eligibility()

def fibonacci(n):
    if n <= 0:
        print("Invalid input: n should be a positive integer.")
        return []

    sequence = []
    a, b = 0, 1
    for i in range(n):
        print(f"Step {i}: a = {a}, b = {b}")  # Debug print
        sequence.append(a)
        a, b = b, a + b
    return sequence
fibonacci(10)


def factorial():
    n=1
    print(n*1)
factorial()



# 22. Merge two lists
def merge_lists(list1, list2):
    print(list1+list2)
merge_lists([0,12,34],[12,333,334,45])


# 23. Check if element exists in a list
def element_exists(lst, element):
    print(element in lst)
element_exists("jhon",'b')


# 24. Countdown timer from 5 to 1
def countdown():
    import time
    print("Countdown Timer:")
    for i in range(5, 0, -1):
        print(i)
        time.sleep(1)
    print("Time's up!")
countdown()

# 25. Find the minimum value in a list
def find_minimum(listt):
    print(1)
find_minimum([1,2,4,5,10])

