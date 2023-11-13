start_time_in_min = (6*60) + 52
easy_pace_for_2miles = ((8*60)+ 15)*2
tempo_for_3miles = ((7*60)+ 12)*3 

total_time_spent =   easy_pace_for_2miles + tempo_for_3miles
time_in_min = total_time_spent // 60
time_in_sec = total_time_spent % 60
#print(f'({time_in_min} : {time_in_sec})')
returned_hour = (start_time_in_min + time_in_min) // 60
returned_min = (start_time_in_min + time_in_min) % 60
print(f'({returned_hour} : {returned_min} : {time_in_sec})')
