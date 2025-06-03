import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    if (!apiKey) {
      setErrorMessage(
        "Web3Forms API key is missing! Please set NEXT_PUBLIC_WEB3FORMS_API_KEY in your .env.local file."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", title: "", message: "" });
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full flex flex-col gap-8 justify-between items-center pt-10 sm:flex-row sm:gap-0"
    >
      <span className="flex flex-col gap-2 w-full sm:w-[40%] px-4 sm:px-0">
        <h3 className="text-3xl text-center sm:text-start sm:text-4xl font-bold text-yellow-500 mb-4">
          Contact Us
        </h3>
        <p className="text-gray-500 mb-8">
          Have questions or feedback? Fill out the form below to get in touch
          with us. We would love to talk with you.
        </p>
      </span>
      <div className="w-full sm:w-[50%] px-4 sm:px-10 py-8 sm:py-10 bg-white text-center shadow-lg rounded-lg text-black">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {successMessage && (
          <p className="text-green-500 mt-4">{successMessage}</p>
        )}
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </div>
    </section>
  );
}
