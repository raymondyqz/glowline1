import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

const AudioDemo = () => {
  const [loading, setLoading] = useState(true);

  return (
    <section className="py-20 bg-glowline-rose/5" id="demo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-glowline-navy mb-4">
            Hear Glowline in Action
          </h2>
          <p className="text-gray-600 mb-8">
            Listen to how our AI receptionist handles real-world scenarios with natural,
            professional conversations.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <audio
              controls
              className="w-full"
              preload="auto"
              src="https://drive.google.com/uc?export=download&id=1Qo3yt-TBNfRw4zcpYoUbZTJ_yA4jRX4q"
              onLoadStart={() => setLoading(true)}
              onLoadedData={() => setLoading(false)}
            >
              Your browser does not support the audio element.
            </audio>
            {loading && <Skeleton className="w-full h-12 absolute top-0 left-0" />}
            <p className="mt-4 text-sm text-gray-500">
              Experience how Glowline handles appointment scheduling, inquiries, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioDemo;