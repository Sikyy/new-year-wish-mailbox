import React, { useState } from 'react';
import axios from 'axios';

function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    wish: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 发送 POST 请求到后端
      const response = await axios.post('http://localhost:8888/submit', formData);
      console.log(response.data); // 处理后端的响应
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='grid justify-items-start gap-8 pb-28 relative'>
        <p className='text-4xl md:text-6xl font-black text-center leading-normal md:leading-normal'>
        新年愿望机
        </p>
        <p className='text-2xl md:text-4xl font-black text-center leading-normal md:leading-normal'>
        写下你的新年愿望，他会在来年的12月31日发往你的邮箱
        </p>
        <div className="flex justify-center items-center w-full">
            <form onSubmit={handleSubmit} className="w-1/4">
                <div className="mb-6 group w-1/2">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="px-4 w-full rounded-full border-2 border-slate-300 focus:outline-none focus:border-black h-10 group-hover:border-black"
                    />
                </div>
                <div className="mb-6 group w-1/2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="px-4 w-full rounded-full border-2 border-slate-300 focus:outline-none focus:border-black h-10 group-hover:border-black"
                    />
                </div>
                <div className="mb-6 group">
                    <label htmlFor="wish" className="block text-sm font-medium text-slate-700">Wish</label>
                    <textarea
                      id="wish"
                      name="wish"
                      value={formData.wish}
                      onChange={handleChange}
                      className="px-4 w-full rounded-2xl border-2 border-slate-300 focus:outline-none focus:border-black h-20 group-hover:border-black resize-none"
                    ></textarea>
                </div>
                <button type="submit" className="px-4 py-2 mt-6 rounded-full bg-slate-600 text-white font-medium hover:bg-slate-800 focus:outline-none focus:bg-slate-900">
                  Submit
                </button>
            </form>
        </div>
    </div>
  );
}

export default Hero;
