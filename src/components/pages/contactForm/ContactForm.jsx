import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    contact: false,
    message: false
  });

  // Real-time validation
  useEffect(() => {
    validateField('name', formData.name);
    validateField('email', formData.email);
    validateField('contact', formData.contact);
    validateField('message', formData.message);
  }, [formData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    setTouched(prev => ({ ...prev, [id]: true }));
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
  };

  const validateField = (field, value) => {
    let error = '';
    
    switch (field) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Invalid email format';
        }
        break;
      case 'contact':
        if (!value.trim()) {
          error = 'Contact number is required';
        } else if (!/^\d{10}$/.test(value)) {
          error = 'Must be 10 digits';
        }
        break;
      case 'message':
        if (!value.trim()) error = 'Message cannot be empty';
        break;
      default:
        break;
    }
    
    setErrors(prev => ({ ...prev, [field]: error }));
    return !error;
  };

  const showErrorToast = (message) => {
    toast.error(
      <div className="flex items-start">
        <FaTimesCircle className="text-red-500 text-xl mr-3 mt-1 flex-shrink-0" />
        <div>
          <p className="font-semibold">Oops!</p>
          <p>{message}</p>
        </div>
      </div>,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: 'w-full max-w-sm text-sm py-4 px-4 rounded-lg',
      }
    );
  };

  const showSuccessToast = (name) => {
    toast.success(
      <div className="flex items-start">
        <div>
          <p className="font-semibold">Thank you, {name}!</p>
          <p>We've received your message and will get back to you soon.</p>
        </div>
      </div>,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: 'w-full max-w-sm text-sm py-4 px-4 rounded-lg',
      }
    );
  };

  const validateForm = () => {
    let isValid = true;
    const newTouched = {
      name: true,
      email: true,
      contact: true,
      message: true
    };
    setTouched(newTouched);

    isValid = validateField('name', formData.name) && isValid;
    isValid = validateField('email', formData.email) && isValid;
    isValid = validateField('contact', formData.contact) && isValid;
    isValid = validateField('message', formData.message) && isValid;

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showErrorToast('Please fix the errors in the form before submitting.');
      return;
    }

    try {
      const response = await fetch('http://localhost/TICKETKAKSHA/Backend/contact/submit_contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        showSuccessToast(formData.name);
        setFormData({ name: '', email: '', contact: '', message: '' });
        setTouched({ name: false, email: false, contact: false, message: false });
      } else {
        showErrorToast(result.message || 'Submission failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      showErrorToast('Network error. Please try again.');
    }
  };

  return (
    <section className="bg-white py-12 px-4 max-w-5xl mx-auto text-center" id="contactus">
      <h2 className="text-4xl text-[#2E6FB7] font-serif font-semibold mb-10" style={{ fontFamily: 'Satisfy' }}>
        Contact us
      </h2>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="w-full max-w-sm text-sm py-4 px-4 rounded-lg"
      />

      <form className="max-w-xl mx-auto space-y-6 text-left" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className={`w-full border-b-2 ${errors.name && touched.name ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 outline-none py-2`}
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            id="email"
            placeholder="abc@.com"
            className={`w-full border-b-2 ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 outline-none py-2`}
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact" className="block mb-1 font-medium">Contact Number</label>
          <input
            type="text"
            id="contact"
            placeholder="10-digit number"
            className={`w-full border-b-2 ${errors.contact && touched.contact ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 outline-none py-2`}
            value={formData.contact}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.contact && touched.contact && (
            <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Type your message here ..."
            className={`w-full border ${errors.message && touched.message ? 'border-red-500' : 'border-gray-400'} rounded-lg p-3 focus:outline-blue-500 resize-none`}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && touched.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-[#2F8DCC] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Send a message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;