var output = {}

var letters = "abcdefgh"


function countLetters(str){


for (var i = 0; i < str.length; i++){
  output[str[i]] += 1
}
console.log(output)

}