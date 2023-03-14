let t ="extravaganza"
console.log(t[8],t[9],t[10],t[11])
//insert the following string at the fourth index of the below variable;
//"eat"
//const food="The quik fox jumped over the lazy dog"

const r='eat'
const food=`The quik fox jumped ${r} over the lazy dog`
console.log(food)
//count how many times the following strings appear in the string variable;
//"the"
//"brown"

const story = "The quik brown fox jumped over the lazy dog"
const quik = (story.match(/the/g)).length;
const fox = (story.match(/brown/g)).length;
console.log(quik);
console.log(fox);

//Using javascript, find the folowing words from the following strings;
//1."are"
//const string1 ="The pupils are reading in the library"
//2."sitting"
//const string2 = "The child was sitting on the table before it fell"
 
const string1 = "The pupils are reading in the library"
const lean=string1.search("are")
console.log(lean)

const string2 ="The child are sitting on the table before it fell"
const shy=string2.search("sitting")
console.log(shy)

//convert the following strings into te specified format;
1.//uppercase:"wonderful"
2.//lowercase;"amazing""UndERneath"
3.//Titlecase:"A wonderful world"

const big="wonderful"
console.log(big.toUpperCase());

const small="amazing"
console.log(small.toLowerCase());

const tiny="UndERneath"
console.log(tiny.toLowerCase());

const title="A wonderful world"
console.log(title.toLocaleUpperCase());