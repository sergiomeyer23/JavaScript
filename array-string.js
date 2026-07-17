var sentence = "The quick brown fox jumped over lazy dog"
var words = sentence.split(" ");
for(var i = 0; i < words.length; ++i){
    console.log("word "+i+": "+ words[i]);
}