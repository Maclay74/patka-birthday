import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "normalize.css/normalize.css";
import "./index.scss";
import { SoundProvider } from "./hooks/useSound.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(

    <SoundProvider>
      <App />
    </SoundProvider>
  ,
);
