# Write a Python program to display the current date and time.
# Sample Output :
# Current date and time :
# 2014-07-05 14:34:14


from datetime import datetime
current_date_and_time = datetime.now()
current_date_and_time2 = current_date_and_time.strftime("%Y-%m-%d %H :%M :%S")
#print(current_date_and_time)
print(current_date_and_time2)