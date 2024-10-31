
function App() {
  return(
    <div>
      {[
        <Todo key={2} title={"Eat Food"} done={false} />,
        <Todo key={1} title={"Go to Gym"} done={true} />,
      ]}
    </div>
  );
}

function Todo({title, done}){
  return(
    <div>
      {title.length === 0 ? "Invalid Todo" : `Title: ${title}`} - {done ? "Done" : "Not Done"}
    </div>
  )
}
  export default App;