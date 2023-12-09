// import { Config } from "@/lib/Config";

export default function Back() {
  // const config = Config();
  const config = {
    image: "https://storage.123fakturere.no/public/wallpapers/geiranger.jpg",
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
        }}
      >
        <img
          src={config.image}
          alt=""
          style={{
            width: "100%",
            minHeight: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: "-10",
            transform: "translateZ(0)",
            WebkitTransform: "translateZ(0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />
      </div>
    </>
  );
}
