//print triplets satisfying a*a+b*b=c*c
var arr=[3,1,4,6,5]
var len=arr.length-1
for(i=0;i<=len;i++)
{
    for(j=i+1;j<=len;j++)
    {
        for(k=j+1;k<=len;k++)
        {
            if((arr[i]*arr[i])+(arr[j]*arr[j])==(arr[k]*arr[k]))
            {
                console.log("["+arr[i]+","+arr[j]+","+arr[k]+"]")
            }

        }
    }
}

