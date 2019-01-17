#this method will return the gcd of two numbers

#recursive
def gcd(x ,y)
    z=x%y
    if(z==0)
       return y;
    end
    
    #return is not neccsarry
    gcd(y,z)
end

#loop
def gcdd(x,y)
   while(x>0)
        z=x%y
        y=x
        x=z
   end
    #return are not need if its not recursive
    y
end
puts "this gcd of the 121 and 11 is #{gcd(121,22)}"
