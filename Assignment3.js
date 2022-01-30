var a = prompt("Enter the first number");
var b = prompt("Enter the secount number");
var c = prompt("Enter the third number");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
if(a<b && a<c)
{
    alert(a);
}
else if(b<a && b<c)
{
    alert(b);
}
else
{
    alert(c);
}
