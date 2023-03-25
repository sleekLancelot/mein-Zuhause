import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p> */}

      <button type="button" className="bg-indigo-500 rounded-lg p-2" disabled>
        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
        </svg>
        {progress.toFixed(2)}%
      </button>
    </Html>
  );
};

export {CanvasLoader};
