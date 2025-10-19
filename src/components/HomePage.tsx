import Button from "./Button";
import Card from "./Card";

function HomePage() {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="app">
      <main className="container mt-4">
        <h1 className="text-center text-primary">Sass in React Demo</h1>

        {/* 按鈕範例 */}
        <div className="mt-4">
          <h2>Buttons</h2>
          <div className="d-flex gap-2 flex-wrap">
            <Button variant="primary" size="small">
              Small Primary
            </Button>
            <Button variant="secondary" size="medium">
              Medium Secondary
            </Button>
            <Button variant="success" size="large">
              Large Success
            </Button>
            <Button variant="danger" disabled>
              Danger Disabled
            </Button>
            <Button variant="warning" onClick={handleButtonClick}>
              Warning Click
            </Button>
          </div>
        </div>

        {/* 卡片範例 */}
        <div className="mt-4">
          <h2>Cards</h2>
          <div className="grid">
            <Card title="Default Card">
              <p>This is a default card with normal styling.</p>
            </Card>
            <Card title="Primary Card" variant="primary">
              <p>This is a primary card with special styling.</p>
            </Card>
            <Card>
              <h4>Card without title</h4>
              <p>Just content here.</p>
            </Card>
          </div>
        </div>

        {/* 響應式網格範例 */}
        <div className="mt-4">
          <h2>Responsive Grid</h2>
          <div className="grid">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="grid-item">
                <h4>Item {item}</h4>
                <p className="text-ellipsis">
                  This is a long text that should be truncated with ellipsis
                  when it overflows the container.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
