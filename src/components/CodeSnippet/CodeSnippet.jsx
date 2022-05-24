import React, { useState } from "react";
import ChatIcon from "@components/IconsComponents/ChatIcon";
import CloseIcon from "@components/IconsComponents/CloseIcon";

const CodeSnippet = () => {
  const [showDetails, setShowDetails] = useState(false);
  const data = {
    code: `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
            const value: T = parseModel(chunk._response, chunk._value);
            const initializedChunk: InitializedChunk<T> = (chunk: any);
            initializedChunk._status = INITIALIZED;
            initializedChunk._value = value;
            return value;
          }`,
    details: `My work here was 5 months ago. It was for the project called “...”. Some other text can be placed here.`,
    date: "5 months ago",
    stars: "3",
  };
  return (
    <div className="space-y-3">
      <div className="flex w-full justify-between">
        <div className="flex">
          <div className="h-9 w-9 rounded-full border"></div>
          <div className="pl-2">
            <p className="text-snippets">@username</p>
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
      <div className="border rounded-xl border-lines h-52 p-6 text-snippets overflow-auto bg-darker-blue">
        <div>code here</div>
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
