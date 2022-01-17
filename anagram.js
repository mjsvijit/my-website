var a = "listen";

var b= "silent";
var arr=a.split('');
var shorted=arr.sort();
var c=shorted.join('');
var arr1=b.split('');
var shorted1=arr1.sort();
var d=shorted1.join('');
if(c==d){
    console.log("True")
}
else{
    console.log("False")
}