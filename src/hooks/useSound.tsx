import { createContext, useCallback, useContext, useState } from "react";
import question from "../assets/sounds/question.mp3";
import wrong from "../assets/sounds/lose.mp3";
import correct from "../assets/sounds/win.mp3";
import selected from "../assets/sounds/answered.mp3";
import victory from "../assets/sounds/victory.mp3";
import mainMenu from "../assets/sounds/mainMenu.mp3";

type SoundName =
  | "question"
  | "selected"
  | "correct"
  | "wrong"
  | "victory"
  | "mainMenu";

const sounds: Record<SoundName, string> = {
  question,
  selected,
  correct,
  wrong,
  victory,
  mainMenu,
};

interface SoundContextValue {
  play: (soundName: SoundName, loop?: boolean) => void;
}

const SoundContext = createContext<SoundContextValue | undefined>(undefined);

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSoundContext must be used within a SoundProvider");
  }
  return context.play;
}

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [, setCurrentSound] = useState<HTMLAudioElement | null>(
    null,
  );

  const play = useCallback(
    (soundName: SoundName, loop: boolean = true) => {
      setCurrentSound((current) => {
        current?.pause();
        const newSound = new Audio(sounds[soundName]);
        newSound.loop = loop;
        newSound.currentTime = 0;
        newSound.play();
        return newSound;
      });
    },
    [],
  );

  const contextValue: SoundContextValue = { play };

  return (
    <SoundContext.Provider value={contextValue}>
      {children}
    </SoundContext.Provider>
  );
}
