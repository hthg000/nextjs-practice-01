import ProductDetail from "../components/product-detail";
import { getAllProducts, getProductById } from "../helpers/api-util";

const ProductDetailPage = ({ selectedProduct }) => {
  if (!selectedProduct) {
    return <p>Loading...</p>;
  }

  return <ProductDetail selectedProduct={selectedProduct} />;
};

export async function getStaticProps(context) {
  const productId = context.params.productId;
  const product = await getProductById(productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      selectedProduct: product,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const productss = await getAllProducts();
  const products = productss.slice(0, 5);
  const paths = products.map((product) => ({
    params: { productId: product.id },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export default ProductDetailPage;
