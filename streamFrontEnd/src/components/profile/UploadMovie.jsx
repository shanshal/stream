import React, { useState } from 'react';

const UploadMovie = (probs) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading,setLoading]=useState(false);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedVideo(file);
  };

  const handleUpload = () => {
    if (selectedVideo) {
      const formData = new FormData();
      formData.append('video', selectedVideo);
        setLoading(true);
      fetch('your-upload-endpoint', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {setLoading(false); probs.setShowUpload(false)})
        .catch(error => {console.error('Error:', error)
                    setLoading(false);
                    setSelectedVideo(null)
    });
    }
  };

  return (
    <div>
        <h3>Upload a movie</h3>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>{!loading ? "Upload Video" : "Uploading"}</button>
    </div>
  );
};

export default UploadMovie;