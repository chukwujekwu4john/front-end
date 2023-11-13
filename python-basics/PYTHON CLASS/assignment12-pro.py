# Given values
cover_price = 24.95  
discount_rate = 0.4  
shipping_cost_first_copy = 3  
shipping_cost_additional_copy = 0.75  
number_of_copies = 60

# Calculate the discounted price per copy
discounted_price_per_copy = cover_price * (1 - discount_rate)

# Calculate the total cost for all copies including shipping
total_cost = (discounted_price_per_copy + shipping_cost_first_copy) + (discounted_price_per_copy + shipping_cost_additional_copy) * (number_of_copies - 1)
#two different ways of outputing thr result
print("Total Wholesale Cost for the 60 Copies: ${:.2f}".format(total_cost))
print(f'(Total Wholesale Cost for the 60 Copies:${total_cost})')