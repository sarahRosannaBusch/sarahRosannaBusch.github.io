function showP(p)
{
  if(document.getElementById(p).className === 'visible')
    document.getElementById(p).className = 'hidden';
  else
    document.getElementById(p).className = 'visible';
}
