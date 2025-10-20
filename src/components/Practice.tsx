import { useEffect, useState, useRef } from "react";
import "../styles/pracritce.scss";
import PictureCrop from "./PictureCrop";
export default function Practice() {
  const flexarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const data = [
    { id: 0, name: "張三", mail: "aaa@gmail.com" },
    { id: 1, name: "李四", mail: "bbb@gmail.com" },
  ];

  const [scrollX, setScrollX] = useState(window.scrollX.toFixed(2));
  const [scrollY, setScrollY] = useState(window.scrollY.toFixed(2));
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [outerWidth, setOuterWidth] = useState(window.outerWidth);
  const [outerHeight, setOuterHeight] = useState(window.outerHeight);

  const tableRef = useRef<HTMLTableElement>(null);
  //* resize
  useEffect(() => {
    console.log("window.screen");
    console.log(window.screen);
    const readScrollX = () => {
      // console.log(window.scrollX);
      setScrollX(window.scrollX.toFixed(2));
    };
    window.addEventListener("scroll", readScrollX);

    const readScrollY = () => {
      // console.log(window.scrollY);
      setScrollY(window.scrollY.toFixed(2));
    };
    window.addEventListener("scroll", readScrollY);

    const readInnerWidth = () => {
      // console.log(window.innerWidth);
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", readInnerWidth);

    const readInnerHeight = () => {
      // console.log(window.innerHeight);
      setInnerHeight(window.innerHeight);
    };
    window.addEventListener("resize", readInnerHeight);

    const readOuterWidth = () => {
      // console.log(window.outerWidth);
      setOuterWidth(window.outerWidth);
    };
    window.addEventListener("resize", readOuterWidth);

    const readOuterHeight = () => {
      // console.log(window.outerHeight);
      setOuterHeight(window.outerHeight);
    };
    window.addEventListener("resize", readOuterHeight);

    const readBounding = () => {
      // console.log(window.outerHeight);
      console.log(tableRef.current);
      if (tableRef.current) {
        const bounding = tableRef.current.getBoundingClientRect();

        setBoundingX(bounding.x.toFixed(2));
        setBoundingY(bounding.y.toFixed(2));
        setBoundingWidth(bounding.width.toFixed(2));
        setBoundingHeight(bounding.height.toFixed(2));
      }
    };
    window.addEventListener("resize", readBounding);

    return () => {
      window.removeEventListener("scroll", readScrollX);
      window.removeEventListener("scroll", readScrollY);
      window.removeEventListener("resize", readInnerWidth);
      window.removeEventListener("resize", readInnerHeight);
      window.removeEventListener("resize", readOuterWidth);
      window.removeEventListener("resize", readOuterHeight);
      window.removeEventListener("resize", readBounding);
    };
  }, []);

  const moveScrollTo = () => window.scrollTo(0, 0);
  const smoothMoveScrollTo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollBY = () => {
    window.scrollBy(0, 20);
  };

  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [boundingX, setBoundingX] = useState("0");
  const [boundingY, setBoundingY] = useState("0");
  const [boundingWidth, setBoundingWidth] = useState("0");
  const [boundingHeight, setBoundingHeight] = useState("0");

  const cursorCoordinate = (e: React.MouseEvent<HTMLTableElement>) => {
    setClientX(e.clientX);
    setClientY(e.clientY);
    setOffsetX(e.nativeEvent.offsetX);
    setOffsetY(e.nativeEvent.offsetY);
  };
  return (
    <div className="section-init">
      <h2>圖片裁切</h2>
      <section className="flex-xcenter  flex-col ">
        <h1 className="text-left w-full">Flex box</h1>
        <div className="flex-4col">
          {flexarr.map((item) => {
            return <div>{item}</div>;
          })}
        </div>
      </section>

      <section className="flex-xcenter  flex-col ">
        <h1 className="text-left w-full">Grid box</h1>
        <div className="grid-fix">
          {flexarr.map((item) => {
            return <div>{item}</div>;
          })}
        </div>
      </section>

      <section className="flex-xcenter  flex-col ">
        <h1 className="text-left w-full">Grid box</h1>
        <div className="grid-4col">
          {flexarr.map((item) => {
            return <div>{item}</div>;
          })}
        </div>
      </section>

      <section className="flex-xcenter  flex-col ">
        <h1 className="text-left w-full">Button animation</h1>
        <div className="wp-50 mg-xauto text-center ">
          <h3 className="text-left w-full mg-xauto"> Btn init</h3>
          <button className="btn-init mg-xauto">1</button>
        </div>
      </section>

      <section className="flex-xcenter  flex-col ">
        <h1 className="text-left w-full">table html</h1>
        <div className="mg-xauto text-center w-full">
          <table className="table-init">
            <caption>簡易table</caption>
            <thead>
              <tr>
                <th>項目</th>
                <th>姓名</th>
                <th>mail</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr>
                    <td>{item.id + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.mail}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex-xcenter  flex-col ">
        <h1 className="text-left w-full">Windows method</h1>
        <div className="mg-xauto text-center w-full">
          <table
            className="table-init"
            onMouseMove={cursorCoordinate}
            ref={tableRef}
          >
            <caption>各類方法</caption>
            <thead>
              <tr>
                <th>項次</th>
                <th>方法</th>
                <th>實際展示</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>window.scrollTo(x, y)</td>
                <td>
                  移動至Y0 <br />{" "}
                  <button onClick={moveScrollTo}>點我前往</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  {"window.scrollTo"}
                  <br />
                  {"({  top: 200, "} <br />
                  {"behavior: 'smooth' })"}
                </td>
                <td>
                  平滑移動至Y0 <br />
                  <button onClick={smoothMoveScrollTo}>點我前往</button>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>window.scrollX</td>
                <td>{scrollX}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>window.scrollY</td>
                <td>{scrollY}</td>
              </tr>
              <tr>
                <td>5</td>
                <td> window.scrollBy(x, y)</td>
                <td>
                  相對移動Y(+20) <br />
                  <button onClick={scrollBY}>點我前往</button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>window.innerWidth</td>
                <td>{innerWidth}</td>
              </tr>
              <tr>
                <td>7</td>
                <td>window.innerHeight</td>
                <td>{innerHeight}</td>
              </tr>
              <tr>
                <td>8</td>
                <td>window.outerWidth</td>
                <td>{outerWidth}</td>
              </tr>
              <tr>
                <td>9</td>
                <td>window.outerHeight</td>
                <td>{outerHeight}</td>
              </tr>
              <tr>
                <td>10</td>
                <td>cursor coordinate</td>
                <td>
                  Table <br />
                  clentX:{clientX} <br />
                  Table <br />
                  clentY:{clientY} <br />
                  Table <br />
                  offectX:{offsetX} <br />
                  Table <br />
                  offsetY:{offsetY}
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>
                  cursor coordinate <br />
                  element bounding <br />
                  需要resize
                </td>
                <td>
                  Table <br />
                  X:{boundingX} <br />
                  Table <br />
                  Y:{boundingY} <br />
                  Table <br />
                  Width:{boundingWidth} <br />
                  Table <br />
                  Height:{boundingHeight}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex-xcenter  flex-col ">
        <h1 className="text-left w-full">Order list</h1>
        <h3>Order 偏移</h3>
        <ol>
          <li>一</li>
          <li>二</li>
          <li>三</li>
          <li>
            roman
            <ol className="roman">
              <li>四.1</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facere, rem.
              </li>
            </ol>
          </li>
        </ol>

        <ul>
          <li>
            inside
            <ol className="inside">
              <li>1</li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                recusandae.
              </li>
            </ol>
          </li>
          <li>1</li>
          <li>1</li>
          <li>
            1
            <ol className="custom-ol">
              <li>1</li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, enim!
              </li>
            </ol>
          </li>
        </ul>
      </section>

      <PictureCrop />
    </div>
  );
}
