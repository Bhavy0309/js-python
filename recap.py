

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

