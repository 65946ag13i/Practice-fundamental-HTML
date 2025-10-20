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
      //   setpreviewX(0);
      //   setpreviewY(0);
      //   setPreviewWidth(bounding.width);
      //   setPreviewHeight(bounding.height);

      setPreBox({ x: 0, y: 0, w: bounding.width, h: bounding.height });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", imgbounding);

    return () => {
      window.removeEventListener("resize", imgbounding);
    };
  }, []);

  //   const [previewX, setpreviewX] = useState(0);
  //   const [previewY, setpreviewY] = useState(0);
  //   const [previewWidth, setPreviewWidth] = useState(0);
  //   const [previewHeight, setPreviewHeight] = useState(0);
  interface mouseCoordinate {
    w: number;
    h: number;
    x: number;
    y: number;
  }
  const [preBox, setPreBox] = useState<mouseCoordinate>({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
  });

  const preview = useRef<HTMLCanvasElement>(null);

  type Corner = "lt" | "rt" | "lb" | "rb" | null;
  const [moveStart, setMoveStart] = useState<Corner>(null);
  const movedown =
    (Corner: Corner) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setMoveStart(Corner);
      document.body.style.cursor = "all-scroll";
    };

  useEffect(() => {
    if (!moveStart) return;
    const mousemove = (e: MouseEvent) => {
      if (imgRef.current) {
        const bounding = imgRef.current.getBoundingClientRect();

        const mouseX = Math.max(e.clientX - bounding.left, 0);
        const mouseY = Math.max(e.clientY - bounding.top, 0);
        setPreBox((pre) => {
          const newview: mouseCoordinate = { ...pre };
          switch (moveStart) {
            case "lt": {
              newview.x = mouseX;
              newview.y = mouseY;
              newview.w = pre.x + pre.w - mouseX;
              newview.h = pre.y + pre.h - mouseY;

              newview.w = Math.max(50, newview.w);
              newview.h = Math.max(50, newview.h);

              const boxEdgeY = newview.y + newview.h;
              if (boxEdgeY > bounding.height) {
                newview.y = Math.max(bounding.height - newview.h, 0);
              }

              const boxEdgeX = newview.x + newview.w;

              if (boxEdgeX > bounding.width) {
                newview.x = Math.max(bounding.width - newview.w, 0);
              }
              break;
            }

            case "rt": {
              newview.y = mouseY;
              newview.w = mouseX - pre.x;
              newview.h = pre.y + pre.h - mouseY;

              newview.w = Math.max(50, newview.w);
              newview.h = Math.max(50, newview.h);
              if (newview.w === 50) {
                newview.x = Math.max(0, e.clientX - bounding.left - 50);
              }

              const boxEdgeX = newview.x + newview.w;
              if (boxEdgeX > bounding.width) {
                newview.w = bounding.width - newview.x;
              }

              const boxEdgeY = newview.y + newview.h;
              if (boxEdgeY > bounding.height) {
                newview.y = Math.max(bounding.height - newview.h, 0);
              }
              break;
            }
            case "lb": {
              newview.x = mouseX;
              newview.w = pre.x + pre.w - mouseX;
              newview.h = mouseY - pre.y;

              newview.w = Math.max(50, newview.w);
              newview.h = Math.max(50, newview.h);

              if (newview.h === 50) {
                newview.y = Math.max(0, e.clientY - bounding.top - 50);
              }

              const boxEdgeY = newview.y + newview.h;
              if (boxEdgeY > bounding.height) {
                newview.h = bounding.height - newview.y;
              }

              const boxEdgeX = newview.x + newview.w;

              if (boxEdgeX > bounding.width) {
                newview.x = Math.max(bounding.width - newview.w, 0);
              }
              break;
            }
            case "rb": {
              newview.w = mouseX - pre.x;
              newview.h = mouseY - pre.y;

              newview.w = Math.max(50, newview.w);
              newview.h = Math.max(50, newview.h);
              if (newview.w === 50) {
                newview.x = Math.max(0, e.clientX - bounding.left - 50);
              }

              const boxEdgeX = newview.x + newview.w;
              if (boxEdgeX > bounding.width) {
                newview.w = bounding.width - newview.x;
              }

              if (newview.h === 50) {
                newview.y = Math.max(0, e.clientY - bounding.top - 50);
              }

              const boxEdgeY = newview.y + newview.h;
              if (boxEdgeY > bounding.height) {
                newview.h = bounding.height - newview.y;
              }
              break;
            }
            default:
              break;
          }

          return newview;
        });
      } else {
        return;
      }
    };
    const mouseup = () => {
      document.body.style.cursor = "";
      setMoveStart(null);
    };

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    return () => {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
    };
  }, [moveStart]);

  // const cursorprevent = (e: React.DragEvent<HTMLDivElement>) => {
  //   if (e.target instanceof HTMLElement && e.target.closest(".crop")) {
  //     console.log("123");
  //     e.preventDefault();
  //     console.log("123");
  //   }
  // };

  return (
    <div>
      <h2>圖片裁切</h2>
      <div className="relative">
        <img
          src="../../public/鸚鵡.jpg"
          alt="鸚鵡"
          ref={imgRef}
          onLoad={imgbounding}
          draggable={false} // 👈 禁用圖片拖曳
          onDragStart={(e) => e.preventDefault()} // 雙重保險
        />
        <div
          className="crop"
          //   style={{
          //     top: previewY,
          //     left: previewX,
          //     width: previewWidth,
          //     height: previewHeight,
          //   }}
          style={{
            top: preBox.y,
            left: preBox.x,
            width: preBox.w,
            height: preBox.h,
          }}
        >
          <div className="ab-lt" onMouseDown={movedown("lt")}></div>
          <div className="ab-rt" onMouseDown={movedown("rt")}></div>
          <div className="ab-lb" onMouseDown={movedown("lb")}></div>
          <div className="ab-rb" onMouseDown={movedown("rb")}></div>
        </div>
      </div>
      <h2>圖片大小</h2>
      <h3>
        寬度:{width} ,高度:{height}
      </h3>
      <h2>裁剪框座標</h2>
      <h3>
        x:{preBox.x.toFixed(2)} <br /> y:{preBox.y.toFixed(2)}
        <br /> Width:{preBox.w}
        <br /> Heigh:{preBox.h}
      </h3>

      <div>
        <div>預覽圖</div>
        <canvas ref={preview}></canvas>
      </div>
    </div>
  );
}
