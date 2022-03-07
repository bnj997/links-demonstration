import React from "react";
import Title from "../../text/Title/Title";

interface IAudioPlayerProps {
  platform: string;
}

const AudioPlayer: React.FC<IAudioPlayerProps> = ({ platform }) => {
  return (
    <div>
      <Title text={`Audio player activated: ${platform}`} />
    </div>
  );
};

export default AudioPlayer;
