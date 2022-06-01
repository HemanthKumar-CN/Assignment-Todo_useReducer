


arr=[{"a":true},{"a":2},{"a":3}];

ht=arr.map(li=> {
    if(li.a==true)
    {
         return{...li, a: false}
    }
    else
    {
        return {...li}
    }
})


console.log(ht)