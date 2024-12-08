import axios from "axios";
import { useState, useEffect, createContext } from "react";

const AppContext = createContext({
  musics: [],
  isError: "",
  refreshData: () => {},
  playMusic: (musicId) => {},
  stopMusic: () => {},
  currentMusic: null,
});

export const AppProvider = ({ children }) => {
  const [musics, setMusics] = useState([]);
  const [isError, setIsError] = useState("");
  const [currentMusic, setCurrentMusic] = useState(null); // For playing a selected song

  const refreshData = async () => {
    try {
      const response = await axios.get("/musics"); // Update the API endpoint as needed
      setMusics(response.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  const playMusic = (musicId) => {
    const musicToPlay = musics.find((music) => music.id === musicId);
    setCurrentMusic(musicToPlay);
  };

  const stopMusic = () => {
    setCurrentMusic(null);
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        musics,
        isError,
        refreshData,
        playMusic,
        stopMusic,
        currentMusic,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
