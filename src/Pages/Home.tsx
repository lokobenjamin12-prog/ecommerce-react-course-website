import { Link } from "react-router-dom";
import { getProducts } from "../data/products";
import ProductCard from "../components/productCard";

export default function Home()  {
    const product = getProducts();

    return (
        <div className="page">
            <div className="home-hero">
                <h1 className="home-title">Welcome to ShopHub</h1>
                <p className="home-subtitle">
                    Discover amazing products ay great prices.
                </p>
            </div>

            <div className="container">
                <h2 className="page-title">Our Products</h2>
                <div className="product-grid"> 
                    {
                        product.map((product) => (
                           <ProductCard product={product} key={product.id} /> 
                        ) )
                    }
                </div>
            </div>
        </div>
    );
}
