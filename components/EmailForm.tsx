import React, { useState, FormEvent } from 'react';

const EmailForm: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const autoResize = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "96e4193d-f096-4980-8582-19d27b3eb24d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

        if (data.success) {
          setResult("Email successfully sent!");
          event.currentTarget.reset();
        } else {
          console.error("Error:", data);
          setResult(data.message);
        }
      } catch (error) {
        }
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
      <form onSubmit={handleSubmit} className="bg-transparent rounded-xl pt-6 pb-8 mb-4">
        <input type="hidden" name="access_key" value="96e4193d-f096-4980-8582-19d27b3eb24d"></input>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="border border-zinc-800 rounded w-full py-2 px-3 text-white bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border border-zinc-800 rounded w-full py-2 px-3 text-white bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 border-zinc-800 bg-neutral-900 text-white leading-tight focus:outline-none focus:shadow-outline resize-none"
            id="message"
            name="message"
            placeholder="Enter your message"
            required
            onInput={autoResize}
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
      {result && <p>{result}</p>}
    </div>
  );
};

export default EmailForm;
