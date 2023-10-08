
let input = "796115110113721110141108"
let inp = [...input].reverse()
let i = 0;
let out = ""
while(i < inp.length)
{
    x = inp[i] + inp[i+1]
   
    console.log("x: "+x)
    if (x == 32)
    {
        out+=" "
    }
    else if((97<=parseInt(x)) && (parseInt(x)<=122))
    {
        console.log(typeof(parseInt(x)))
        out+=String.fromCharCode(parseInt(x))
        console.log("if2 x :" + out)
       i++
    }
    else if((65<=parseInt(x)) && (parseInt(x)<=90))
    {
        out+=String.fromCharCode(parseInt(x))
        console.log("if3 x :" + out)
       i++
    }
    else if(i+2 < inp.length)
    {
        x += inp[i+2];
        console.log("if4 x :" + x)
        out+=String.fromCharCode(parseInt(x))
        console.log("if4 out :" + out)
        i=i+2
        
    }
    i++
}
console.log(out)
