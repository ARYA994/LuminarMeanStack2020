//nth power lies in the range[min,max]
var n=2
var min=49
var max=65
for(i=1;i<=20;i++)
{
    var pow = i**n
    if(pow>=min && pow<=max)
    {
        console.log(pow+"("+i+"^"+n+")")
    }
}