//find the user with max number of tweets
//print username total number of tweets in sorting order
var tweets=["sachin tweet1","sehwag tweet1","kohli tweet1","sachin tweet1","kohli tweet1"]
var obj={}
var arr=[]
for(word of tweets)
{
    if(word in obj)
    {
        obj[word]+=1
    }
    else
    {
        obj[word]=1
    }
}
console.log(obj)
for(key in obj)
{
    var num=obj[key]
    arr.push(num)
}
var srt=arr.sort((a,b)=>b-a)
var elem=srt[0]
for(key in obj)
{
    if(elem==obj[key])
    {
        console.log(key+" "+elem)
    }
}
console.log("sorting")
for(elements in srt)
{
    for(key in obj)
    {
        if(elements==obj[key])
        {
            console.log(key+" "+elements)
        }
    }
}