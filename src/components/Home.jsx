const Home = () => {
  return (
    <div className="row g-0">
      {/* Sol kısım - Görsel */}
      <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
        <img
          src="./images/soltaraf_anasayfa.png"
          alt="sol taraf"
          style={{
            width: "100%", // Yüzde yüz genişlik
            minHeight: "100vh", // Yüksekliği ekran boyutuna ayarlıyoruz
            objectFit: "cover",
            padding: 0, // Resmin her iki kenarını da kaplar
          }}
        />
      </div>

      {/* Sağ kısım - Açıklamalar */}
      <div
        className="col-12 col-md-8 main-bg main-text p-2"
        style={{
          height: "100vh", // Sağ tarafın da ekranın yüksekliğini kaplamasını sağlıyoruz
          overflowY: "auto",
          border: "1px grey solid",
        }}
      >
        <h2 className="mb-2 text-secondary">🏡 Hoş Geldiniz!</h2>
        <p className="text-justify text-secondary border-bottom shadow-sm p-1 mt-2 ">
          Toros Tavukçuluk'ta Lezzetin ve Doğallığın İzinde... Toros Tavukçuluk
          olarak, sofralarınıza doğallığı ve kaliteyi getiriyoruz.
          Tavuklarımızı, doğanın tam kalbinde, özenle seçilmiş yemlerle besliyor
          ve sağlıkla büyütüyoruz.
        </p>

        <h3 className="mt-2 text-secondary">💛 Doğal ve Güvenilir Üretim</h3>
        <p className="text-justify text-secondary border-bottom shadow-sm p-1 mt-2">
          Modern tesislerimizde, hijyen ve kalite standartlarını en üst seviyede
          tutarak üretim yapıyoruz. Doğallığı korumak bizim için bir öncelik!
        </p>

        <h3 className="mt-2 text-secondary">🍗 Her Tadı Özenle Hazırlıyoruz</h3>
        <p className="text-justify text-secondary border-bottom shadow-sm p-1 mt-2 ">
          Taze tavuk ürünlerimizden özel soslarla marine edilmiş seçeneklere
          kadar, her damak tadına uygun lezzetler üretiyoruz.
        </p>

        <h3 className="mt-2 text-secondary">
          🌿 Doğaya ve Geleceğe Saygılıyız
        </h3>
        <p className="text-justify text-secondary border-bottom shadow-sm p-1 mt-2">
          Çevreye duyarlı yöntemlerle çalışarak hem bugünü hem de geleceği
          koruma sorumluluğumuzu yerine getiriyoruz.
        </p>

        <h4 className="mt-2 text-secondary">🐓 Hemen Alışverişe Başla!</h4>
        <p className="text-justify text-secondary border-bottom shadow-sm p-2 mt-2">
          Size en yakın bayilerimizi öğrenmek veya ürünlerimizi sipariş etmek
          için şimdi bizimle iletişime geçin.
        </p>
      </div>
    </div>
  );
};

export default Home;
