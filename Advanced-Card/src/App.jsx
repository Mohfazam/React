

function App() {


  return (
  <div style={{display: "flex"}}>
    <Card innerContent={"Hi there"} />
    <Card innerContent={<div style={{color: "green"}}>Hi there</div>} />
    <Card innerContent={<div style={{color: "red"}}>
      What do you want to do?
      <br />
      <input type="text" />
    </div>} />
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