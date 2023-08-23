import { ComponentType, useState } from "react";
import MainMenu from "./pages/main-menu.tsx";
import Gameplay from "./pages/gameplay.tsx";
import Win from "./pages/win.tsx";
import Lose from "./pages/lose.tsx";

type Stage = "mainMenu" | "gameplay" | "win" | "lose";

export type StageProps = {
  setStage: (stage: Stage) => void;
};

type StageComponents = Record<Stage, ComponentType<StageProps>>;

const stages: StageComponents = {
  mainMenu: MainMenu,
  gameplay: Gameplay,
  win: Win,
  lose: Lose,
};

const App = () => {
  const [stage, setStage] = useState<Stage>("mainMenu");
  const Page = stages[stage];

  return (
    <main>
      <Page setStage={setStage} />
    </main>
  );
};

export default App;
