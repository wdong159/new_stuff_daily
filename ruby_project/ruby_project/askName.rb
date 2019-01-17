#interact with user

puts "what is your first name"
first = gets.chomp

puts "what is your last name"
last = gets.chomp

puts "your first name is: #{first} and your last name is#{last}"
puts "your full name is #{first+" "+last}"
puts "your reverse name is #{(first+" "+last).reverse}"
puts "your name total character is #{(first+last).length}"
