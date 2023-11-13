from datetime import datetime, timedelta

# Given start time
start_time = datetime(2020, 1, 1, 6, 52)  

# Calculate the time for each part of the journey
easy_pace_time = timedelta(minutes=8, seconds=15)  
tempo_pace_time = timedelta(minutes=7, seconds=12) 

# total time of the journey
total_running_time = (easy_pace_time * 2) + (tempo_pace_time * 3)

# Calculate the end time
end_time = start_time + total_running_time

# Print the time you get home for breakfast
print("Time you get home for breakfast:", end_time.strftime("%I:%M %p"))
