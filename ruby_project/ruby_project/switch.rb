key = 1

if !key
    puts "123123"
end


case numbers # a_variable is the variable we want to compare
when 1    #compare to 1
  puts "it was 1" 
when 2    #compare to 2
  puts "it was 2"
else #default
  puts "it was something else"
end

name = gets.chomp
case name
when "Alice"
puts "Welcome Alice"
when /[qrz].+/i
puts "Your name begins with Q, R or Z, you're not welcome here!"
else
puts "Welcome stranger!"
end