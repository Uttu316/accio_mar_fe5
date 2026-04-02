import { useParams } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { API } from "../../services";

const ProductPage = () => {
  const { id } = useParams();
  const [status, setStatus] = useState("loading");
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    try {
      const res = await API({ endpoint: "/randomproducts/" + id });
      setProduct(res.data);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  };
  useEffect(() => {
    getProduct();
  }, [id]);

  const hasProduct = status === "done" && product !== null;
  return (
    <div>
      <Header title={"ShopVibe"} />
      <h1>Product {id}</h1>
      {hasProduct && <h2>{product.title}</h2>}
      <Footer />
    </div>
  );
};

export default ProductPage;
