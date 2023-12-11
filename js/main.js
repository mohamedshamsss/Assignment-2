
var quote =[`“Be yourself; everyone else is already taken.”
― Oscar Wilde`,`“So many books, so little time.”
― Frank Zappa`,`“A room without books is like a body without a soul.”
― Marcus Tullius Cicero`,`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
― Bernard M. Baruch`,`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
― Dr. Seuss`,`“You only live once, but if you do it right, once is enough.”
― Mae West`,`“Be the change that you wish to see in the world.”
― Mahatma Gandhi`,`“If you tell the truth, you don't have to remember anything.”
― Mark Twain`,`“Without music, life would be a mistake.”
― Friedrich Nietzsche, Twilight of the Idols`,`“I am so clever that sometimes I don't understand a single word of what I am saying.”
― Oscar Wilde, The Happy Prince and Other Stories` ]




var lastquo=-1;
function add(){
   var quo = Math.floor(Math.random()*10)
   if (quo === lastquo) {
      quo = (quo + 1) % 10; 
   }
   lastquo = quo;
   document.getElementById("test").innerHTML=quote[quo]
}




