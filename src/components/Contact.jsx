import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios"; // You'll need to install axios

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with your API Gateway endpoint
      const response = await axios.post('https://dqwdja84sk.execute-api.us-east-1.amazonaws.com/prod/send-email', form);
      
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className='flex-[0.8] md:pb-40 mx-4 sm:mx-auto'
      >
        <h3 className={styles.sectionText}>Contact</h3>

        <form onSubmit={handleSubmit} className="mt-12 gap-4 flex flex-col">
          <span className='text-white font-medium mt-3'>Full Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="bg-tertiary p-4 text-white border border-[#17A398] font-medium rounded"
            required
          />
          <span className='text-white font-medium mt-3'>Email Address</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="bg-tertiary p-4 text-white border border-[#17A398] font-medium rounded"
            required
          />
          <span className='text-slate-300 font-medium mt-3'>Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="10"
            className="bg-tertiary p-4 text-white border border-[#17A398] font-medium rounded"
            required
          />
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary rounded-lg'
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");