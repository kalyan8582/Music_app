import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [musicList, setMusicList] = useState([]);
  const [music, setMusic] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);

  // Fetch music list on component mount
  useEffect(() => {
    fetchMusicList();
  }, []);

  // Fetch all music metadata
  const fetchMusicList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/musics");
      setMusicList(response.data);
    } catch (error) {
      console.error("Error fetching music list:", error);
    }
  };

  // Handle input change for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMusic({ ...music, [name]: value });
  };

  // Handle image file upload
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Handle audio file upload
  const handleAudioChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  // Submit new music data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile || !audioFile) {
      alert("Please upload both image and audio files!");
      return;
    }

    const formData = new FormData();
    formData.append("music", new Blob([JSON.stringify(music)], { type: "application/json" }));
    formData.append("image", imageFile);
    formData.append("audio", audioFile);

    try {
      await axios.post("http://localhost:8080/api/AddMusic", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Music added successfully!");
      fetchMusicList(); // Refresh music list
    } catch (error) {
      console.error("Error adding music:", error);
    }
  };

  return (
    <div className="App">
     

      {/* Display Music List */}
      <h2>Music List</h2>
      <ul>
        {musicList.map((musicItem) => (
          <li key={musicItem.id}>
            <h3>{musicItem.title}</h3>
            <p>Artist: {musicItem.artist}</p>
            <p>Album: {musicItem.album}</p>
            <p>Genre: {musicItem.genre}</p>
            {/* Image Preview */}
            <img
              src={`http://localhost:8080/api/musics/${musicItem.id}/image`}
              alt={musicItem.title}
              style={{ width: "100px", height: "100px" }}
            />
            {/* Audio Preview */}
            <audio controls>
              <source
                src={`http://localhost:8080/api/musics/${musicItem.id}/audio`}
                type="audio/mpeg"
              />
              Your browser does not support the audio tag.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
