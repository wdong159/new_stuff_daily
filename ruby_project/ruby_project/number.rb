puts 1 + 2

puts "2" * 2 #output "22"

puts "-" * 20
20.times{print "-"}

puts rand

20.times{print "-"}

#20.times{puts rand(10).to_f}

x = "5".to_i
x = x.to_f
# if conver a string to number using to_i it return zero

puts "enter a number"
num_1 = gets.chomp.to_i
puts num_1

puts 10%2

puts 20.odd? #return false or true

puts 10.eql?(10.0) #.eql? compare types so it return false