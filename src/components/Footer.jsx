const Footer = () => {
  return (
    <div
      style={{
        height: "75px",
        width: "100%",
        backgroundColor: "orange",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p className="text-white ms-5 mt-3 fw-bold">@2024 Her hakkı saklıdır.</p>
      <p className="text-white me-5 mt-3 fw-bold">
        Toros Tavukçuluk Lezzetin Peşinde...
      </p>
    </div>
  );
};

export default Footer;
