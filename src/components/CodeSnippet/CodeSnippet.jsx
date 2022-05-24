import React, { useState } from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import Image from "next/image";
import ChatIcon from "@components/IconsComponents/ChatIcon";
import CloseIcon from "@components/IconsComponents/CloseIcon";
import profilePic from "@images/profile.jpg";

const CodeSnippet = () => {
  const [showDetails, setShowDetails] = useState(false);
  const data = {
    code: `const bucketSort = (arr, size = 5) => {
      const min = Math.min(...arr);
      const max = Math.max(...arr);
      const buckets = Array.from(
        { length: Math.floor((max - min) / size) + 1 },
        () => []
      );
      arr.forEach(val => {
        buckets[Math.floor((val - min) / size)].push(val);
      });
      return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
    };`,
    details: `My work here was 5 months ago. It was for the project called “...”. Some other text can be placed here.`,
    date: "5 months ago",
    stars: "3",
  };
  return (
    <div className="space-y-3">
      <div className="flex w-full justify-between">
        <div className="flex">
          <Image
            src={profilePic}
            alt="profile-pictrue"
            height={36}
            width={36}
            objectFit="cover"
            className="rounded-full"
          />
          <div className="pl-2">
            <p className="text-snippets">@jf3rr0</p>
            <p className="text-[12px] text-gray">{data.date}</p>
          </div>
        </div>
        <div
          className={`flex text-snippets space-x-1 h-fit items-center cursor-pointer hover:text-white ${
            showDetails ? "text-white" : "text-gray"
          }`}
          onClick={() => setShowDetails((prev) => !prev)}
        >
          <ChatIcon />
          <p>details</p>
        </div>
      </div>
      <div className="border rounded-xl h-52 p-3 border-lines text-snippets overflow-auto bg-[#282a36]">
        <CodeBlock
          text={data.code}
          language="javascript"
          showLineNumbers={false}
          theme={dracula}
          customStyle={{
            height: "100%",
          }}
        />
      </div>
      {showDetails && (
        <div className=" text-gray text-snippets space-y-2">
          <div className="border border-lines" />
          <div className="flex justify-between">
            <p className="w-5/6 ">{data.details}</p>
            <div onClick={() => setShowDetails(false)}>
              <CloseIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeSnippet;
