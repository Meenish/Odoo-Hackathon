import PhaserGame from "./game/PhaserGame";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#111",
      }}
    >
      <PhaserGame />
    </div>
  );
}

export default App;