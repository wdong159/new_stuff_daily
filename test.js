function(){
    //literal notation
    //create one hotel object
    var hotel = {
        name: 'nihao',
        room: 20,
        booked: 9,
        type: [single,double,king],
        checkAvailability: function(){
          return this.room - this.booked;
        }
    };
    //add new properties to it
    hotel.gym = false;

    //object constructor notation
    var hotel1 = new Object();
    hotel1.name = 'star';


    // the following code are equalevnt
    var hotelname = hotel.name;
    var hotelname = hotel['name'];

    //remove a variables
    delete hotel.name;
    hotel.name = 'hello';

    var oneHotel = new Hotel('one',40,20);
}

//object constructor notation
//function can multiple object
function Hotel(name,rooms,booked){
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
}
