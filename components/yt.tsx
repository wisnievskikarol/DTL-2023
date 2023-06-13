import { useEffect, useRef } from "react";

const YouTubeVideo = () => {
  const playerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const playerContainer = playerContainerRef.current;

      if (playerContainer && !playerContainer.querySelector("iframe")) {
        const iframe = document.createElement("iframe");
        iframe.src =
          "https://www.youtube.com/embed/afUHo9Gy5Nw?autoplay=1&controls=0&modestbranding=1&loop=1&playlist=afUHo9Gy5Nw&mute=1";
        iframe.allow = "autoplay; encrypted-media";
        iframe.frameBorder = "0";
        iframe.allowFullscreen = true;
        playerContainer.appendChild(iframe);
      }
    }
  }, []);

  return (
    <div
      id="youtube-player-container"
      ref={playerContainerRef}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    ></div>
  );
};

export default YouTubeVideo;
