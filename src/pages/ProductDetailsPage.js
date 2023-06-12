import NavBar from "../features/navbar/Navbar";
import ProductDetails from "../features/product/components/ProductDetails";

function ProductDetailsPage() {
    return ( 
        <div>
            <NavBar>
                <ProductDetails></ProductDetails>
            </NavBar>
        </div>
     );
}

export default ProductDetailsPage;