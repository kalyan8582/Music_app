import React, { useState } from "react";
import axios from "axios";
import './AddMusic.css';

const AddMusic = () => {
  const [music, setMusic] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });

  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMusic({ ...music, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    // setProduct({...product, image: e.target.files[0]})
  };
  const handleAudioChange = (e) => {
    setAudio(e.target.files[0]);
    // setProduct({...product, image: e.target.files[0]})
  };
  
  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
  
    // Append image and audio files
    formData.append("image", image);
    formData.append("audio", audio);
  
    // Append the music JSON object
    formData.append(
      "music",
      new Blob([JSON.stringify(music)], { type: "application/json" })
    );
  
    axios
      .post("http://localhost:8080/api/AddMusic", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Music added successfully:", response.data);
        alert("Music added successfully");
      })
      .catch((error) => {
        console.error("Error adding Music:", error);
        alert("Error adding Music");
      });
  };
  
  

  return (
    <div className="container">
      <div className="center-container">
        {/* Add Image */}
        <div className="image-container">
          <img src="path-to-your-image.jpg" alt="Music Icon" className="music-image" />
        </div>

        <form className="row g-3 pt-5" onSubmit={submitHandler}>
          <div className="col-md-6">
            <label className="form-label">
              <h6>Title</h6>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Song Title"
              onChange={handleInputChange}
              value={music.title}
              name="title"
              id="title"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">
              <h6>Artist</h6>
            </label>
            <input
              type="text"
              name="artist"
              className="form-control"
              placeholder="Artist Name"
              value={music.artist}
              onChange={handleInputChange}
              id="artist"
              required
            />
          </div>
          <div className="col-12">
            <label className="form-label">
              <h6>Album</h6>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Album Name"
              value={music.album}
              name="album"
              onChange={handleInputChange}
              id="album"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">
              <h6>Genre</h6>
            </label>
            <select
              className="form-select"
              value={music.genre}
              onChange={handleInputChange}
              name="genre"
              id="genre"
              required
            >
              <option value="">Select Genre</option>
              <option value="Pop">Pop</option>
              <option value="Rock">Rock</option>
              <option value="Hip-Hop">Hip-Hop</option>
              <option value="Jazz">Jazz</option>
              <option value="Classical">Classical</option>
            </select>
          </div>
          <div className="col-md-4">
          <label className="form-label">
            <h6>Image</h6>
          </label>
          <input
            className="form-control"
            type="file"
            onChange={handleImageChange}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">
            <h6>Audio</h6>
          </label>
          <input
            className="form-control"
            type="file"
            onChange={handleAudioChange}
          />
        </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMusic;