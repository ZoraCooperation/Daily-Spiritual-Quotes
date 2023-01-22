import React from "react";
import {useState} from "react";
import ImageGrid from "./components/ImageGrid";
import Model from "./components/Model";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
      <div className="App">
        <Title />
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
      </div>
  );
}

export default App;