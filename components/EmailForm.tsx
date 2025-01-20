import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

const EmailForm: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const [buttonVisible, setButtonVisible] = useState<boolean>(true);

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
        setButtonVisible(false);
        event.currentTarget.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="space-y-1 py-4">
        <h1 className="font-semibold text-gray-200 text-center text-3xl">Wanna send a message?</h1>
        <h2 className="font-light text-gray-300 text-center text-xl">Drop one below and I&apos;ll respond as soon as I can.</h2>
      </div>
      <form onSubmit={handleSubmit} className="bg-transparent rounded-xl pt-6 pb-8 mb-4">
        <input type="hidden" name="access_key" value="96e4193d-f096-4980-8582-19d27b3eb24d" />

        <div className="mb-4">
          <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="border border-zinc-800 rounded w-full py-2 px-3 text-gray-200 bg-white/5 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border border-zinc-800 rounded w-full py-2 px-3 text-gray-200 bg-white/5 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 border-zinc-800 bg-white/5 text-gray-200 leading-tight focus:outline-none focus:shadow-outline resize-none"
            id="message"
            name="message"
            placeholder="Enter your message"
            required
            onInput={autoResize}
          />
        </div>

        <div className="flex items-center justify-between">
          {buttonVisible ? (
            <motion.button
              className="px-6 py-2 rounded-md relative radial-gradient ease-in-out animate__fadeIn animate__delay-1s animate__animated"
              initial={{ "--x": "100%", scale: 1 } as any}
              animate={{ "--x": "-100%" } as any}
              whileTap={{ scale: 0.97 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                  type: "spring",
                  stiffness: 10,
                  damping: 5,
                  mass: 0.1,
                },
              }}
              type="submit"
            >
              <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
                Send
              </span>
              <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
            </motion.button>
          ) : (
            <p className="text-neutral-100">{result}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default EmailForm;

