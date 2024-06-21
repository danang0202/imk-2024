import Layout from "../../components/Layout";
import Breadcrumb from "../../components/commons/BreadCrumb";
import DetailProdukContent from "../../components/galeri-produk-page/DetailProdukContent";

const GaleriProduk = () => {
  return (
    <Layout pageTitle="Galeri Produk">
      <div className="px-4 w-full pt-5xl xl:hidden bg-silver dark:bg-slate-800">
        <Breadcrumb />
      </div>

      <div className="pb-8 xl:pt-5.5xl xl:pb-3xl bg-silver dark:bg-slate-800">
        <DetailProdukContent />
      </div>
    </Layout >
  );
};

export default GaleriProduk;
