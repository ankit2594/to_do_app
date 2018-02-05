export var selected=(a)=>
{
    console.log("hrdfr");
  var x=document.getElementById(a).value;
  if(x=='0')
  {
      document.getElementById(a+'_span').style.color='red';
      document.getElementById(a+'_span').innerText='not started..';
  }
  else if(x=='1')
  {
      document.getElementById(a+'_span').style.color='blue';
      document.getElementById(a+'_span').innerText='in progress..';
  }
  else if(x=='2')
  {
      document.getElementById(a+'_span').style.color='green';
      document.getElementById(a+'_span').innerText='completed..';
  }
}