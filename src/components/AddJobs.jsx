import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Lottie from "lottie-react";
import addjobslottie from "../assets/addJobslottie/addJobs.json";

const AddJobs = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    // buyer: {
    //     email:'',
    //     name: user?.displayName,
    //     photo: user?.photoURL,
    // },
    email:"",
    deadline: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-screen-md mx-auto p-6 shadow-lg rounded-md">
        <h1 className="text-2xl text-center underline underline-offset-8 font-semibold mb-4 text-white">
          Job Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="lg:flex w-full gap-3">
            {/* Job Title */}
            <div className="w-full">
              <label className="text-sm font-medium text-white">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md sm:text-sm p-2 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
                placeholder="Enter job title"
              />
            </div>

            {/* Email */}
            <div className="w-full">
              <label className="text-sm font-medium text-white">Email</label>
              <input
                type="email"
                name="email"
                // defaultValue={user?.email}
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div className="lg:flex w-full gap-3">
            {/* Deadline */}
            <div className="w-full">
              <label className="block text-sm font-medium text-white">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              />
            </div>

            {/* Category */}
            <div className="w-full">
              <label className="block text-sm font-medium text-white">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              >
                <option value="">Select a category</option>
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Writing">Writing</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>
          </div>

          <div className="lg:flex w-full gap-3">
            {/* Minimum Price */}
            <div className="w-full">
              <label className="block text-sm font-medium text-white">
                Minimum Price
              </label>
              <input
                type="number"
                name="minPrice"
                value={formData.minPrice}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                placeholder="Enter minimum price"
              />
            </div>

            {/* Maximum Price */}
            <div className="w-full">
              <label className="block text-sm font-medium text-white">
                Maximum Price
              </label>
              <input
                type="number"
                name="maxPrice"
                value={formData.maxPrice}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                placeholder="Enter maximum price"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-white">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              placeholder="Enter job description"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="h-36 w-36">
        <Lottie animationData={addjobslottie}></Lottie>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddJobs;
