
regex

import re

number = '98101'
string = 'mariam'
phone_number = '234-567-8901'

five_digit_expression = r'\d{5}'
print('because it is 5 digit number in a row')
print(re.search(five_digit_expression, number))
print('because it is string')
print(re.search(five_digit_expression, string))
print('because it is 3 digit number in a row')
print(re.search(five_digit_expression, phone_number))

slicing and capitalize

# ----------------------------------captelize method -----------------------------------

first_name = 'mariam'
last_name = 'eissa'

first_name_cap = first_name.capitalize()
last_name_cap = last_name.capitalize()

print(first_name_cap)
print(last_name_cap)
# ------------------------------------slice notation-----------------------------------
note = 'student at mansoura university'

# use find method to define the position of first char
award_location = note.find('student at ')
# by using slice notation we get here the rest of note string (mansoura university)
award_text = note[11:]

print(award_location)
print(award_text)

# ---------------------------------- convertor miles to kilometers program ---------------------------------------------

miles = input('Enter a distance in miles: ')
# convert the input value into float to do math on it
miles_value = float(miles)
# doing the math using the formula to convert kilometers to mile
kilometers_value = miles_value * 1.609344
# print the message
print(f'this is kilometers value = {kilometers_value} for miles = {miles}')





