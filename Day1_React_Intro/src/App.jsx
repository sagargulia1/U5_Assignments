
import './App.css';

function App() {
  var data=[
    {
    head:"Mobile Operating System",
    types:[ 'Android',
            'Blackberry',
            'iPhone',
            'Windows Phone']
  },
  {
    head:"Mobile Manufacturers",
    types:["Samsung","HTC","Micromax","Apple"]
  }]
  var options=["Services","Projects","About"]
  
//   return (
//     <div>
//       {
//         data.map((items)=>(
//  <mapComponents head={items.head} types={items.types} />
//         ))
//       }
//     </div>
//   );
return <div>
<nav className='nav' >
<h1>LOGOBAKERY</h1>
<span className='span'>{
  options.map((links)=>{
    return <a href="/">{links}</a>
  })
  }</span>
<button>Contact</button>
</nav>
  {data.map((user)=>
  mapComponents(user)
)}</div>
}
function mapComponents({head,types}){
  console.log(head)
  return(

 <div>
   <ul>
   <h1>{head}</h1>
   {types.map((list)=>{
      return <li>{list}</li> 
   })}
   </ul>
   
 </div>
 
  )
}
export default App;
