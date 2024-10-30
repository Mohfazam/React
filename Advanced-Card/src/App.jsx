

function App() {


  return (
  <div>
    <Card innerContent={"Hi there"} />
  </div>
  );
}

function Card({ innerContent }){
  return(
    <span style={{backgroundColor: "black", borderRadius: 10, color: "white", margin: 10, padding: 10}}>
      {innerContent}
    </span>
  )
}

export default App;