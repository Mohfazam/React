import { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  const PostComponents = posts.map((post) => (
    <PostComponent
      data={post.data}
      status={post.status}
      description={post.description}
      image={post.image}
      time={post.time}
    />
  ));

  function AddPost() {
    setPosts([...posts, {
      data: "Sarwar v4",
      status: "600 followers",
      description: "In depression due to Javascript",
      time: "22 mins ago",
      image: "../src/assets/image.png",
    },
    {
      data: "Sarwar v5",
      status: "290 followers",
      description: "In depression due to React",
      time: "10 min ago",
      image: "../src/assets/image.png",
    },
    {
      data: "Sarwar v6",
      status: "promoted",
      description: "In depression due to USESTATE",
    },
    {
      data: "Sarwar v7",
      status: "promoted",
      description: "In depression due to eveything",
    }])
    
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={AddPost}>Addpost</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
        {PostComponents}
        </div>
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
      <div style={{ display: "flex" }}>
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
          <div>{props.status}</div>
          {props.time !== undefined && (
            <div style={{ display: "flex" }}>
              <div>{props.time}</div>
              <img
                src="../src/assets/clock-icon.svg"
                style={{ width: 12, height: 12, marginLeft: 3 }}
              />
            </div>
          )}
        </div>
      </div>
      <div style={{ fontSize: 12 }}>{props.description}</div>
    </div>
  );
}

export default App;
