import React from "react";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../../../title/title";

const AddServices = () => {
  useTitle("Add New Services");
  const handleServices = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const imgUrl = form.url.value;
    const description = form.description.value;
    console.log(form);
    console.log(name, price, imgUrl, description);

    const newService = {
      title: `${name}`,
      img: `${imgUrl}`,
      price: `${price}`,
      des: `${description}`,
    };

    fetch("https://b6a11-server-rana-web-dev.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setNewService((prev) => [...prev, data]);
        form.reset();
        if (data) {
          toast("Service Added Successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto py-20">
      <form onSubmit={handleServices}>
        <h2 className="text-3xl">Add New Services</h2>
        <br></br>
        <input
          type="text"
          name="name"
          placeholder="Pizza Name"
          className="input rounded-none  w-full border-orange-400 "
          required
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="price"
          placeholder="Price"
          className="input rounded-none  w-full border-orange-400 "
          required
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="url"
          placeholder="Image URL"
          className="input rounded-none  w-full border-orange-400 "
          required
        />
        <br></br>
        <br></br>
        <textarea
          name="description"
          placeholder="Services Description"
          className="border border-orange-400 w-full p-3 text-1xl"
          cols=""
          rows="5"
          required
        ></textarea>
        <br></br>
        <button className="btn border-none bg-orange-400">
          Add New Service
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddServices;
