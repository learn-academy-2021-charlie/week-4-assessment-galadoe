# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

#crea a method - letter
#argument - arr
#iterate through and checks for 'o' && 't'
#if its 'o' return just the words with o
#else if its 't' return just the word with t
def letter_o arr
    arr.each.select do |value|
      if value.include?'o'
        value
      end
    end
end
p letter_o beverages_array

 #I decided to create diff function b/c this was the only I was able to get both of the outputs back. If I had another option, I wouldv'e created a class and inside that class create two separate functions to return what I need

def letter_t arr
  arr.select do |value|
    if value.include?'t'
      value
    end
  end
end
p letter_t beverages_array
#when I create an if/else statement, it returns everything but juice
#when I do two ifs statements, it returns one array, but its the first conditon, but the second one. If I write
# if value.include?'o'
#   value
# end
# if value.include?'t'
#   value
# end
#only the condition for 't' is being returned
#This was the best I could do with this problem in the meantime

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'
def noVowel str
  str.delete "aeiouAEIOU"
end
p noVowel album1
p noVowel album2
p noVowel album3


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
  attr_accessor :model, :wheels, :current_speed

  def initialize model
    @model = model
    @wheels = 2
    @current_speed = 0
  end

  def pedal_faster speed
      @current_speed = speed
  end

  def brake speed
    if speed >= @current_speed
      @current_speed = 0
    elsif speed < @current_speed
      @current_speed -= speed
    end
  end

  def get_info
    "The #{@model} has #{@wheels} wheels and is going #{@current_speed} mph"
  end
end

type = Bike.new("Trek Bike")
p type.get_info



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

my_bike = Bike.new("Trek Bike")
p my_bike.pedal_faster 10
p my_bike.brake 15

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
