import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <>
          <Head>
                <title>Discover Premium Products | Appscript Task</title>
                <meta
                name="description"
                content="Explore high quality fashion and lifestyle products with server-side rendering using Next.js."
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: "Appscript Product Store",
                        url: "http://localhost:3000",
                        }),
                    }}
                />

            </Head>
      <Header />

      <section className={styles.hero}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <h2 className={styles.subheading}>
        Explore high-quality fashion and lifestyle collections.
        </h2>
      </section>

      <div className={styles.toolbar}>
        <div>3425 ITEMS</div>
        <select>
          <option>RECOMMENDED</option>
          <option>NEWEST FIRST</option>
          <option>POPULAR</option>
          <option>PRICE : HIGH TO LOW</option>
          <option>PRICE : LOW TO HIGH</option>
        </select>
      </div>

      <div className={styles.container}>
        <Sidebar />
        <div className={styles.products}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    const products = data.slice(0, 6).map((item) => ({
    id: item.id,
    name: item.title,
    image: item.image,
    badge: "",
    outOfStock: false,
  }));

  return {
    props: { products },
  };
}
