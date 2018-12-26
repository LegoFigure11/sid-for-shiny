var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function toPaddedHexString(num, len) {
    var str = num.toString(16);
    return "0".repeat(len - str.length) + str;
};

function toPaddedString(num, len) {
	var str = num.toString(10)
	return "0".repeat(len - str.length) + str;
};

rl.question("Input PID you wish to make Shiny: 0x", function(getpid) {
rl.question("TID: ", function(tid) {
  var decpid = parseInt("0x" + getpid, 16)
  var dectid = parseInt(tid + "", 10)

if (Number.isInteger(decpid) === false || getpid.length > 8) {
	  console.log(">> Invalid PID!\nPress Ctrl + C to exit...")
}
else {
if (Number.isInteger(dectid) === false || tid > 65535)  {
	  console.log(">> Invalid TID!\nPress Ctrl + C to exit...")
} 
else {
 
  var hexpid = toPaddedHexString(getpid, 8);
  var lpid = hexpid.substr(-4);
  var hpid = hexpid.substr(0, 4);
  var htid = toPaddedHexString(dectid.toString(16));
  var binpidh = toPaddedString(parseInt(hpid, 16).toString(2), 16).substr(0, 13).split("")
  var binpidl = toPaddedString(parseInt(lpid, 16).toString(2), 16).substr(0, 13).split("")
  var bintid = toPaddedString(parseInt(htid, 16).toString(2), 16).substr(0, 13).split("")
  
  // console.log("PID High: " + binpidh)
  // console.log("PID Low : " + binpidl)
  // console.log("TID     : " + bintid)
  
  var outarray = [];
  

  
  for (var i=0; i<=12; i++) {
  var total = (parseInt(binpidh[i]) + parseInt(binpidl[i]) + parseInt(bintid[i])) % 2;
  outarray.push(total)
}

  var binresult = outarray.toString().split(",").join("") + "000"
  var result = parseInt(binresult, 2)
  
  // console.log(binresult + "\n")
  
console.log("\nSID Range for Shiny: " + toPaddedString(result, 5) + " - " + toPaddedString(result + 7, 5) + "\nPress Ctrl + C to exit...")

}}})});