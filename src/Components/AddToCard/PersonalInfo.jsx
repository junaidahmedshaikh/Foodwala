import React from "react";

export default function PersonalInfo() {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
    console.log(name, value);
  };
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
      <div className="mb-4">
        <label
          className="block text-fontDarkGray text-sm font-bold mb-2"
          htmlFor="name"
        >
          Full Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="John Doe"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-fontDarkGray text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="john@example.com"
          name="email"
          value={"email"}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-fontDarkGray text-sm font-bold mb-2"
          htmlFor="address"
        >
          Shipping Address
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
          id="address"
          placeholder="Enter your shipping address"
          name="address"
          value={"address"}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
    </>
  );
}
