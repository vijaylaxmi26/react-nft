import "./App.css";
import CollectionCard from "./Components/CollectionCard";
import Header from "./Components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"punk"}
        traits={[{ value: 7 }]}
        image="https://ipfs.thirdweb.com/ipfs/QmYJXUCPzfiMvNW5NvNtGLVZoVoe1cpWCELyhhjqJpmE5N/0.jpg"
      />
    </div>
  );
}

export default App;
