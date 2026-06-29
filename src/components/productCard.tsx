import { Link } from 'react-router-dom'; // or wherever your Link comes from

// 1. Define the structure of your product
interface Product {
    id: string | number;
    image: string;
    name: string;
    price: string | number;
}

// 2. Define the structure of your component's props
interface ProductCardProps {
    product: Product;
}

// 3. Apply the type to the destructured props
export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="product-card"> 
            <img 
              src={product.image} 
              className="product-card-image" 
              alt={product.name} 
            />
            <div className="product-card-content">
               <h3 className="product-card-name">{product.name}</h3>
               <p className="product-card-price">{product.price}</p> {/* Fixed class name from name to price */}
               <div className="product-card-actions">
                   <Link to="" className="btn btn-secondary">View Details</Link>
                   <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    ); 
}