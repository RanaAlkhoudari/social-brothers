import React, { useState, useEffect } from "react";
import axios from "axios";

function AddProduct() {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState({
    title: "",
    category_id: "",
    content: "",
    img_url: "",
  });

  const token = "pj11daaQRz7zUIH56B9Z";
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://178.62.198.162/api/categories`,
          {
            headers: {
              token: token,
            },
          }
        );
        setCategories(response.data);
      } catch (error) {
        console.log(error.response);
      }
    }
    fetchData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    async function postData() {
      try {
        const response = await axios.post(
          "http://178.62.198.162/api/posts",
          {
            title: data.title,
            category_id: data.category_id,
            content: data.content,
          },
          {
            headers: {
              token: token,
            },
          }
        );
        if (response.status === 201) {
          alert("Post succesvol aangemaakt.");
          e.target.reset();
        }
      } catch (error) {
        console.log(error.response);
      }
    }
    postData();
  }

  function handleChange(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Plaats een blog bericht</h1>
        <label>Berichtnaam </label>
        <input
          required
          type="text"
          placeholder="Geen title"
          onChange={(e) => handleChange(e)}
          id="title"
        />

        <label>Categorie </label>
        <select
          required
          id="category_id"
          onChange={(e) => handleChange(e)}
          value={data.category_id}
        >
          <option className="first-option" value="" defaultValue hidden>
            Geen categorie
          </option>
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>

        <label>Header afbeelding</label>
        <input
          className="upload-image-input"
          required
          onChange={(e) => handleChange(e)}
          type="file"
          id="img_url"
          name="img"
          title=""
          accept="image/*"
        />

        <label>Bericht </label>
        <textarea
          required
          onChange={(e) => handleChange(e)}
          id="content"
        ></textarea>

        <div className="left-button">
          <button type="submit">Bericht aanmaken</button>
        </div>
      </form>
    </>
  );
}

export default AddProduct;
