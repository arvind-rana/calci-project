import React from 'react';
import {add,sub,multi,divi} from './Calci';
 
function App()
{ return(
    <>
<ul>
  <li>sum of two number is {add(30,5)}</li>
  <li>substraction of two number is {sub(46,5)}</li>
  <li>  multiplication of two number is {multi(31,5)}</li>
  <li> divison sum of two number is {divi(33,5)}</li>
 </ul>
 </>
 );
}
export default App;