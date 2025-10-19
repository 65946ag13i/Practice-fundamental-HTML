import { useEffect, useState, useRef } from "react";

export default function PictureCrop() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [width, setWidth] = useState("0");
  const [height, setHeight] = useState("0");
  const imgbounding = () => {
    if (imgRef.current) {
      const bounding = imgRef.current.getBoundingClientRect();
      setWidth(bounding.width.toFixed(0));
      setHeight(bounding.height.toFixed(0));
      console.log(bounding.x);
      console.log(bounding.y);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", imgbounding);

    return () => {
      window.removeEventListener("resize", imgbounding);
    };
  }, []);

  const [previewX, setpreviewX] = useState(0);
  const [previewY, setpreviewY] = useState(0);
  const [previewWidth, setPreviewWidth] = useState("0");
  const [previewHeight, setPreviewHeight] = useState("0");
  const preview = useRef<HTMLCanvasElement>(null);

  return (
    <div>
      <div className="relative">
        <img
          src="../../public/鸚鵡.jpg"
          alt="鸚鵡"
          ref={imgRef}
          onLoad={imgbounding}
        />
        <div
          className="crop"
          style={{ top: 0, left: 0, width: "100%", height: "50%" }}
        >
          <div className="ab-lt"></div>
          <div className="ab-rt"></div>
          <div className="ab-lb"></div>
          <div className="ab-rb"></div>
        </div>
      </div>
      <div>
        寬度:{width} ,高度:{height}
      </div>
      <div>
        <div>123</div>
        <div>預覽圖</div>
        <canvas ref={preview}></canvas>
      </div>
    </div>
  );
}
