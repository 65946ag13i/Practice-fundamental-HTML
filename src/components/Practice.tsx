import "../styles/pracritce.scss";
import PictureCrop from "./PictureCrop";
import ReactReducer from "./ReactReducer";
import WindowMethod from "./WindowMethod";
import SelectElement from "./SelectElement";
export default function Practice() {
  const flexarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const data = [
    { id: 0, name: "張三", mail: "aaa@gmail.com" },
    { id: 1, name: "李四", mail: "bbb@gmail.com" },
  ];
  const used = 75;
  const total = 100;
  return (
    <div className="section-init">
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

      <WindowMethod />

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
      <ReactReducer />
      <SelectElement />

      <section className="flex-xcenter  flex-col ">
        <h1 className="text-left w-full">optgroup element</h1>
        <optgroup label="水果">
          <option>芒果</option>
          <option>西瓜</option>
        </optgroup>
      </section>

      <section className="flex-xcenter  flex-col ">
        <h1 className="text-left w-full">details element</h1>
        <details>
          <summary>點擊這裡查看詳情</summary>
          <p>這是隱藏的內容，點擊 summary 才會顯示。</p>
        </details>
      </section>

      <section className="flex-xcenter  flex-col ">
        <h1 className="text-left w-full">meter element</h1>
        <label className="text-sm font-medium">磁碟使用量</label>
        <meter
          value={used}
          min={0}
          max={total}
          low={60}
          high={90}
          optimum={50}
          className="w-full h-4"
        />
        <p className="text-sm text-gray-600">
          {used} GB / {total} GB
        </p>
      </section>
    </div>
  );
}
