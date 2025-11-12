import { useEffect, useRef } from "react";

const LazyLoding = () => {
  const imgRef = useRef(null);
  useEffect(() => {
    console.log("初始化");
    if (!imgRef.current) return;
    const observe = new IntersectionObserver(
      (entires) => {
        entires.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("顯示");
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src!;
            observe.unobserve(img);
          }
        });
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    observe.observe(imgRef.current);

    return () => {
      observe.disconnect();
    };
  }, []);

  return (
    <div>
      <section className="text-left w-full">
        <h1>IntersectionObserver Lazy Loding</h1>
        <img
          src=""
          alt="parrot"
          ref={imgRef}
          data-src="../../public/鸚鵡.jpg"
        />
      </section>
    </div>
  );
};

export default LazyLoding;
