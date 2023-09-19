//PascalCasing  first letter of every word capital
function Message(){
  //jsx in the next line 
  //javascript x html
  const name = 'Jyotir'  //if this is empty string the function will return "Hello World" as default
  if(name)
    return <h1>Hello {name}</h1>
  return <h1>Hello World</h1>
}

export default Message;