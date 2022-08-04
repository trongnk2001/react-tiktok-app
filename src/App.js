import { useEffect, useState} from "react";

import "./App.css";
import Video from "./components/Video";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    console.log("check",db);
    db.collection('videos').get().then((querySnapshot) => {
        querySnapshot.forEach((doc)=>{
          console.log(doc.id, "=>",doc.data());
        })
        setVideos(querySnapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div
      id="focus"
      tabIndex="1"
      className="flex flex-col items-center snap-y snap-mandatory overflow-scroll h-screen overflow-x-hidden"
    >
      {videos.map((video) => (
        <Video data={video} />
      ))}
    </div>
  );
}



export default App;