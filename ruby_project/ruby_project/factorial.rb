def factorial(num)
    #(int1..int2) range from int1 to int2
    #method .include?() run if it contain the num in the range
  if (0..5.4).include?(num)
    return 1
  end
  num * factorial(num - 1)
end

puts "#{factorial(4)}"