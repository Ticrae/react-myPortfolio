import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-full p-4 bg-white text-jet">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 pt-24">
          <p className="text-4xl font-bold inline border-b-4 border-gainsboro">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/9e3cd61d-1b85-47a1-b09e-6a11ede3fe92"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-gainsboro rounded-md text-jet focus:outline-none"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 border-gainsboro rounded-md text-jet focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md border-gainsboro focus:outline-none text-jet"
              required
            ></textarea>
            <button className="text-white bg-indigoDye px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
