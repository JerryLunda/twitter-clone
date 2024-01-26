import axios from "axios";
import Tweet from "../components/Tweet";
import Trends from "../components/Trends";
import Header from "../components/Header";
import { useState, useEffect } from "react";

const baseURL = "https://my-json-server.typicode.com/amare53/twiterdb/posts";

export default function App() {
  const [tweet, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!tweet) return null;

  return (
    <div className="w-12/12 flex">
            <div className="w-full flex-col  md:border-solid md:border-x-2 md:border-gray-800 md:w-9/12 md:justify-center lg:w-6/12 ">
                <Header></Header>
                <div>
                {tweet.map((data)=>(<Tweet item={data} key={data.id}/>))}
                </div>
                
            </div>

            <div className="hidden lg:block lg:w-4/12 ">
                <div className="relative w-5/12">
                <Trends></Trends>
                </div>
            </div>
        </div>
  );
}
