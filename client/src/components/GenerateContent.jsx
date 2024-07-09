import React, { useEffect, useState } from "react";
import { FcStart } from "react-icons/fc";
import { Button, Spinner, Clipboard } from "flowbite-react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import apiClient from "../axios/axios";
import Markdown from "react-markdown";
import { createRoot } from "react-dom/client";

const GenerateContent = () => {
  const [promt, setPromt] = useState("");
  const [response, setResponse] = useState("hello");

  const GenerateContent = () => {
    if (promt === "") {
      alert("Enter blog information");
    } else {
      setResponse("Please wait...");
      apiClient
        .post("/gemini/generate/test", {
          withCredentials: true,
          reqPrompt: promt,
        })
        .then((res) => {
          setResponse(res.data.response);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    const markdown = response;
    createRoot(document.getElementById("markdown")).render(
      <Markdown>{markdown}</Markdown>
    );
  }, [response]);

  const codeStyles = {
  };

  return (
    <>
      <div className="overflow-y-auto h-full py-10 scroll-smooth">
        <div className="flex flex-row gap-10  mx-5 my-5">
          <div className="basis-1/3 rounded-xl shadow-lg border  p-5">
            <FcStart className="text-3xl mb-5" />
            <div className="text-2xl text-fuchsia-600 mb-5">Blog Title</div>
            <div className="text-gray-400 mb-5">
              An AI tool that generate blog title depends on your blog
              information
            </div>
            <div className="mb-3 font-semibold">Enter your blog niche</div>
            <input
              type="text"
              className="rounded-lg border border-gray-500 w-full"
              onChange={(e) => setPromt(e.target.value)}
              value={promt}
            />
            <div className="mb-3 mt-5 font-semibold">
              Enter your blog information
            </div>
            {/* <textarea
          rows="10"
          name=""
          id=""
          className="rounded-lg border border-gray-500 w-full"
        ></textarea> */}
            <button
              onClick={() => GenerateContent()}
              className="rounded-lg bg-fuchsia-700 disabled:bg-fuchsia-400 text-white py-3 mt-5 w-full"
            >
              <Spinner aria-label="Spinner button example" size="sm" />
              <span className="pl-3">Generating...</span>
            </button>
          </div>
          <div className="basis-2/3 rounded-xl shadow-lg p-5 border">
            <div className=" flex flex-row justify-between mx-5 my-3 items-center">
              <div className="font-semibold text-lg">Result</div>
              <div>
                <Clipboard valueToCopy={response} label="Copy" />
              </div>
            </div>
            {/* <Markdown>{response}</Markdown> */}
            <div style={codeStyles}>
              <div id="markdown"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateContent;
