import "./App.css";

function App() {
  return (
    <div style={{background: "#dfe6e9", height: "100vh"}}>
      <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
      <br />
      <br />
      <PostComponent data="Sarwar v1" followers="100" description="In depression due to Javascript" time="2 mins ago"/>
      <br />
      <PostComponent data="Sarwar v2" followers="200" description="In depression due to React" time = "1 min ago"/>
      <br />
      <PostComponent data="Sarwar v3" followers="3470" description="In depression due to Express" time = "4 min ago"/>
      </div>
      
    </div>
  );
}

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 10,
  margin: 10,
};

function PostComponent(props) {
  return (
    <div style={style}>
      <div style={{display: "flex"}}>
        <img
          src={"../src/assets/image.png"}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            marginRight: 10,
            marginBottom: 10,
            objectFit: "cover",
          }}
        />

        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>{props.data}</b>
          <div>{props.followers} followers</div>
          <div>{props.time}</div>
        </div>
      </div>
      <div style={{ fontSize: 12 }}>{props.description}</div>
    </div>
  );
}

export default App;
