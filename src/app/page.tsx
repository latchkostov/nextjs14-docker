"use client";
import { useState } from "react";
import { getSomethingFromServer } from "./actions";

export default function Home() {

  const [serverData, setServerData] = useState('');

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <button
        type="submit"
        className="rounded-sm bg-purple-500 p-2"
        onClick={async () => {
          setServerData("Loading...");
          const result = await getSomethingFromServer();
          setServerData(result);
        }}
      >
        Server Stuff
      </button>
      <p className="mt-10">Server Response: {serverData}</p>
    </div>
  );
}
