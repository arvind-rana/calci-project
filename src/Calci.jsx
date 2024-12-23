import React from 'react';

function add(a,b)
{
    let sum = a+b;
    return sum;
}
function sub(a,b)
{
    let sub = a-b;
    return sub;
}
function multi(a,b)
{
    let multi = a*b;
    return multi;
}
function divi(a,b)
{
    let divi = a/b;
    divi = divi.toFixed(2);
    return divi;
}
export {add,sub,multi,divi};
