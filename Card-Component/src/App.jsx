function App() {
  return (
    <div style={{background: "#dfe6e9", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <PostComponent />
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

function PostComponent() {
  return (
    <div style={style}>
      <div style={{display: "flex"}}>
        <img
          src={"../src/assets/image.png"}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
        />

        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>Mohfazam</b>
          <div>100 followers</div>
          <div>20m</div>
        </div>
      </div>
      <div style={{ fontSize: 12 }}>In depression due to Javascript</div>
    </div>
  );
}

export default App;
