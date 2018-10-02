 const User = function (name) {
   this.name = name;
   this.chatroom = null;
 }

 User.prototype = {
   send: function (message, to) {
     this.chatroom.send(message, this, to);
   },
   receive: function (message, from) {
     console.log(
       `${from.name} to ${this.name}: ${message}`
     )
   }
 }

 const Chatroom = function () {
   //  * list of users
   let users = {};

   return {
     register: function (user) {
       users[user.name] = user;
       user.chatroom = this;
     },
     send: function (message, from, to) {
       if (to) {
         //  Single user message
         to.receive(message, from);
       } else {
         // Mass message
         for (key in users) {
           if (users[key] != from) {
             users[key].receive(message, from);
           }
         }
       }
     }
   }
 }

 const
   jax = new User("Jax"),
   brian = new User("Brian"),
   ck = new User("Ck"),
   boyd = new User("Boyd"),
   chat = new Chatroom();

 chat.register(jax);
 chat.register(brian);
 chat.register(ck);
 chat.register(boyd);
 chat.register(jax);

 jax.send("Hello Jeff", jax)