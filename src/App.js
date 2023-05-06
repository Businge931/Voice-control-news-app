import { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  useEffect(() => {
    alanBtn({
      key: "4e0b71b4bcc3b812827b97141c3d9b102e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
        }
      },
    });
  }, []);

  return <div className="App">Alan ai</div>;
}

export default App;
