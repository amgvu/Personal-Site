import React, { useState } from 'react';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Email: ${email}, Message: ${message}`);
    setEmail('');
    setMessage('');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="space-y-1 py-4">
      <h1 className="font-semibold text-center text-3xl">
        Wanna send a message?
      </h1>
      <h2 className="font-light text-center text-xl">
        Drop one below and I&apos;ll respond as soon as I can.
      </h2>
      </div>
      <form onSubmit={handleSubmit} className="bg-transparent rounded-xl px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border border-zinc-800 rounded w-full py-2 px-3 text-white bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 border-zinc-800 bg-neutral-900 text-white leading-tight focus:outline-none focus:shadow-outline resize-y"
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-transparent outline outline-1 rounded-xl hover:bg-white hover:text-black text-white font-bold py-2 px-4 ease-in-out transition duration-100 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;