var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (name in names)
{ 

   if (names[name].charAt(0).toLowerCase() == 'j' ) {
      
        goodBye(names[name]);
    } else {
      
        Hello(names[name]);

    }
}