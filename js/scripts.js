$(function(){
  window.flashcards = [
   ["JavaScript", "A powerful browser based scripting language"],
   ["Modulo", "%, the remainder of x/y"],
   ["Operators", "Mathematical operators, such as, +, -, /, *, %, ^, and =="],
   ["NaN", "Not a Number, but it is a type of number!"],
   ["Camel Capitalization", "aWayToNameVariables withoutSpacesBut capitalizingTheFirst letterOfEvery word"],
   ["+=", "Add the right to the left, instead of = which replaces the left with the right"],
   ["Function", "A fancy way to say 'Run this block of text'"],
   ["Method", "A piece of code performed on an object"],
   ["Argument", "Information input into a method or function"],
   ["String", "a group of alphanumeric characters contained in quotation marks"],
   ["Chaining methods", "performing multiple methods on the same object in a single expression"],
   ["Escape", "a character that causes JavaScript to ignore special characters"],
   ["Alert", "a function that creates a dialogue box containing a string from an argument"],
   ["Commenting code", "specially marked lines, ignored by the compiler, that make it easier for code to be read by humans"],
   ["Booleans", "variable type that is true or false"],
   ["Undefined", "When a variable has not been assigned a value"],
   ["Parameter", "the names of the arguments in a function"],
   ["Return", "the value provided back to the user after a function is performed"]
 ];
 window.cardNum = 0;
 window.answer = 0;
 $(".flashcard p").text(window.flashcards[0][0]);
 $(".flashcard").click(function() {
  if(window.answer == 0) {
    answer++;
    $(".flashcard p").css("font-size", "2em");
  } else {
    $(".flashcard p").css("font-size", "3em");
    answer = 0;
    if( cardNum >= window.flashcards.length -1)
        cardNum = 0;
      else
        cardNum++;
  }
  $(".flashcard p").text(window.flashcards[cardNum][answer]);
});
});
