import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate, randomString } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          message: randomString(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full max-w-full">
      {/* Chat Box */}
      <div className="bg-white rounded-xl w-full h-[500px] ml-2 p-4 border border-gray-300 overflow-y-scroll flex flex-col-reverse shadow-sm">
        <div className="space-y-2">
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      {/* Input Form */}
      <form
        className="flex items-center w-full p-3 ml-2 mt-2 border border-gray-300 rounded-xl bg-white shadow-sm"
        onSubmit={(e) => {
          e.preventDefault();
          if (liveMessage.trim() === "") return;
          dispatch(
            addMessage({
              name: "Yousuf Sayyed",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="flex-grow px-4 py-2 text-sm border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-orange-400"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="ml-4 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
