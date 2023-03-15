
#? check if the lenth of sides can make a triangle
def is_triangle(a, b, c):
    if a > 0 and b > 0 and c > 0:
        if (a + b) > c and (b + c) > a and (c + a) > b:
            return True
        else: 
            return False 
    else:
        return False

#? Remove vowels from a string 
def disemvowel(string):
    noTroll = ''
    vowels = ['a','e','i','o','u','y','A','E','I','O','U','Y']
    for i in string:
        if i not in vowels:
            noTroll += i
    return noTroll
disemvowel("This website is for losers LOL!")

#? Take two numbers out and add a _ between 
#* My Answer 
def solution(s):
    if len(s) == 0:
        return []
    else:
        takeTwo = [s[i:i + 2] for i in range(0, len(s), 2)]
    if len(takeTwo[-1]) == 1:
        takeTwo[-1] = takeTwo[-1] + '_'
        return takeTwo
    else:
        return takeTwo
solution('alkjflkdsaj')
solution('adfsda')

#! Better Answer 
def solution2(s):
    result = []
    if len(s) % 2:
        s += '_'
    for i in range(0, len(s), 2):
        result.append(s[i:i+2])
    return result
#! And 
def solution3(s):
    return [s[x:x+2] if x < len(s) - 1 else s[-1] + "_" for x in range(0, len(s), 2)]

#? Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed 
#? (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
#? Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
#? spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
#* My Answer  
def spin_words(sentence):
    breakup = list(sentence.split())
    result = []
    for i in breakup:
        if len(i) >= 5:
            result.append(i[::-1])
        else: 
            result.append(i)
    return ' '.join(result)
spin_words("Welcome hello world cant")

#! Better Answers 
def spin_words1(sentence):
    words = [word for word in sentence.split(" ")]
    words = [word if len(word) < 5 else word[::-1] for word in words]
    return " ".join(words)

#! And 
def spin_words2(sentence):
    return " ".join([x[::-1] if len(x) >= 5 else x for x in sentence.split(" ")])

#?sort numbers and them filter them out 
def remove_smallest(numbers):
    sortnum = numbers
    for num in sortnum:
        if num == min(sortnum):
            sortnum.remove(num)
            return sortnum

#? take in a number and make it bigger. 830921 would be 983210 
#* My Answer 
def descending_order(num):
    myList = ([int(x) for x in str(num)])
    theList = sorted(myList)
    reeMyList = theList[::-1]
    results = [str(i) for i in reeMyList]
    str1 = ''.join(results)
    return int(str1) 

#! Better Answer 
def Descending_Order(num):
    return int("".join(sorted(str(num), reverse=True)))

#? to turn a word into a hash tag. 
#* My Answer
def generate_hashtag(s):
    if len(s) == 0 or s == '#':
        return False
    else:
        caps = []
        x = s.split()
        for i in x:
            caps.append(i.capitalize())
        t = ''.join(caps)
        if len(t) + 1 < 140:
            return '#' + t
        else:
            return False

#! Better Answer 
def generate_hashtag2(s):
    ans = '#'+ str(s.title().replace(' ',''))
    return s and not len(ans)>140 and ans or False

def generate_hashtag3(s):
    ans = '#'+ str(s.title().replace(' ',''))
    return s and not len(ans)>140 and ans or False

#? dumplicate count 
#! how people did it online! they are so good and clean
def duplicate_count2(s):
    return len([c for c in set(s.lower()) if s.lower().count(c)>1])

def duplicate_count5(text):
    count = 0
    for c in set(text.lower()):
        if text.lower().count(c) > 1:
            count += 1
    return count

#? how to cap one letter and lower the next
def myfunc(st):
    index = 0
    mystring = []
    for i in st:
        if index % 2 == 0:
            mystring.append(st[index].lower())
        else:
            mystring.append(st[index].upper())
        index = index + 1
    return ''.join(mystring)

myfunc("hahahah")