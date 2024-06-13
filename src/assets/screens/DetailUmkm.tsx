import Layout from "../../components/Layout";
import Breadcrumb from "../../components/commons/BreadCrumb";
import DetailUmkmContent from "../../components/detail-umkm-page/DetailUmkmContent";

const DetailUmkm = () => {
  return (
    <Layout pageTitle="DETAIL UMKM">
      <div className="box w-full pt-5xl bg-white dark:bg-black pb-8">
        <div className="px-4 md:px-8 xl:px-3xl">
          <Breadcrumb />
        </div>
        <DetailUmkmContent />
      </div>
    </Layout>
  );
};

export default DetailUmkm;
