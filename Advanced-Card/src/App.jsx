

function App() {


  return (
  <div style={{display: "flex"}}>

    <Card>
    
      What do you want to do?
      <br />
      <input type="text" />
    </Card>
    
  </div>
  );
}

function Card({ innerContent }){
  return(
    <span style={{backgroundColor: "blue", borderRadius: 10, color: "white", margin: 10, padding: 10}}>
      {innerContent}
    </span>
  )
}

export default App;