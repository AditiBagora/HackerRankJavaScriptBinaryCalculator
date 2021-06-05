var a=0;
var b=0;
var op='+';
var res=document.getElementById("res").innerHTML;
function add0(){
     document.getElementById("res").innerHTML=document.getElementById("res").innerHTML+'0';
}
function add1(){
    document.getElementById("res").innerHTML=document.getElementById("res").innerHTML+'1';
}
function clr(){
    document.getElementById("res").innerHTML='';
}
function Eql(){
    var r=0
    var tmp=document.getElementById("res").innerHTML.split(op);
    b=bin2dec(parseInt(tmp[tmp.length-1]));
    document.getElementById("res").innerHTML=dec2bin(calc(parseInt(a),parseInt(b)));
               
}
function calc(a,b){
    var r=0;
   try{
       if(op=='+')
          r=a+b;
       if(op=='*')
          r=a*b;
       if(op=='/')
           r=a/b;
       if(op=='-')
            r=a-b;
       
    } 
    catch(err){
        document.getElementById("res").innerHTML=err.message;
    }
    return r;
}
function add(){
    a=bin2dec(document.getElementById("res").innerHTML);
    op='+'
   document.getElementById("res").innerHTML=document.getElementById("res").innerHTML+'+';
}
function sub(){
    a=bin2dec(document.getElementById("res").innerHTML);
    op='-'
document.getElementById("res").innerHTML=document.getElementById("res").innerHTML+'-'; 
}
function mul(){
    a=bin2dec(document.getElementById("res").innerHTML);
    op='*'
   document.getElementById("res").innerHTML=document.getElementById("res").innerHTML+'*'; 
}
function div(){
    a=bin2dec(document.getElementById("res").innerHTML);
    op='/'
   document.getElementById("res").innerHTML=document.getElementById("res").innerHTML+'/'; 
}
function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}
