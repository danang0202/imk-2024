import Layout from "../../components/Layout";
import DetailProdukContent from "../../components/galeri-produk-page/DetailProdukContent";

const GaleriProduk = () => {
  return (
    <Layout pageTitle="Galeri Produk">
      <div className="pb-8 pt-5xl xl:pb-3xl bg-silver dark:bg-slate-800">
        <DetailProdukContent />
      </div>
    </Layout >
  );
};

export default GaleriProduk;
