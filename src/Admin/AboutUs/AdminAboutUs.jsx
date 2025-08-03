import React, { useEffect, useState } from "react";

const AdminAboutUs = () => {
  const [paragraph1, setParagraph1] = useState("");
  const [paragraph2, setParagraph2] = useState("");
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const backendUrl = "http://localhost/TICKETKAKSHA/Backend/aboutus/get_about_us.php"; 
  // Fetch current content
  useEffect(() => {
    fetch(`${backendUrl}/get_about_us.php`)
      .then((res) => res.json())
      .then((data) => {
        setParagraph1(data.text.paragraph1);
        setParagraph2(data.text.paragraph2);
        setImages(data.images);
      });
  }, []);

  const handleTextSave = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("paragraph1", paragraph1);
    formData.append("paragraph2", paragraph2);

    const res = await fetch(`${backendUrl}/update_about_us.php`, {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    if (result.success) alert("Text updated successfully.");
    else alert("Failed to update text.");
    setLoading(false);
  };

  const handleImageUpload = async () => {
    if (!newImage) return;
    const formData = new FormData();
    formData.append("image", newImage);

    const res = await fetch(`${backendUrl}/upload_image.php`, {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    if (result.success) {
      setImages([...images, result.path]);
      setNewImage(null);
      alert("Image uploaded.");
    } else {
      alert("Image upload failed.");
    }
  };

  const handleDeleteImage = async (imgPath) => {
    const imageId = getImageIdFromPath(imgPath); // helper explained below
    const formData = new FormData();
    formData.append("id", imageId);

    const res = await fetch(`${backendUrl}/delete_image.php`, {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    if (result.success) {
      setImages(images.filter((img) => img !== imgPath));
      alert("Image deleted.");
    } else {
      alert("Failed to delete image.");
    }
  };

  // Example: get ID from image path like uploads/16932093023-image.png
  const getImageIdFromPath = (path) => {
    const filename = path.split("/").pop();
    const numericPart = filename.split("-")[0];
    return parseInt(numericPart, 10);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Admin - About Us</h2>

      <div className="mb-6">
        <label className="block mb-2 font-semibold">Paragraph 1</label>
        <textarea
          className="w-full border p-2"
          rows="4"
          value={paragraph1}
          onChange={(e) => setParagraph1(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-semibold">Paragraph 2</label>
        <textarea
          className="w-full border p-2"
          rows="4"
          value={paragraph2}
          onChange={(e) => setParagraph2(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleTextSave}
        disabled={loading}
      >
        {loading ? "Saving..." : "Save Text"}
      </button>

      <hr className="my-8" />

      <h3 className="text-xl font-semibold mb-4">Manage Images</h3>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setNewImage(e.target.files[0])}
        className="mb-2"
      />
      <br />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded mb-6"
        onClick={handleImageUpload}
      >
        Upload Image
      </button>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative group">
            <img
              src={`${backendUrl}/${img}`}
              alt={`about-img-${index}`}
              className="w-full h-40 object-cover rounded"
            />
            <button
              onClick={() => handleDeleteImage(img)}
              className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAboutUs;
