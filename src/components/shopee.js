import { useState } from "react";


export default function Shopee() {
    const [products, setProducts] = useState([
        { id: 1, name: "Áo thun", price: 100 },
        { id: 2, name: "Quần jean", price: 200 },
        { id: 3, name: "Giày thể thao", price: 300 },
    ]);

    //input: sản phẩm được thêm vào giỏ hàng
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    //Add san pham
    const handleAddProduct = () => {
        if (!name || !price) return; // Kiểm tra nếu name hoặc price rỗng thì không thêm sản phẩm

        const newProduct = {
            id: Date.now(), // Sử dụng timestamp làm id duy nhất
            name: name,
            price: Number(price),

        };
        console.log(newProduct.id);

        setProducts(prev => [...prev, newProduct]);

        setName(""); // Reset input sau khi thêm sản phẩm
        setPrice("");

    }

    const [cart, setCart] = useState([]);

    const handleAddToCart = (products) => {
        setCart(prev => [...prev, products]);
    };

    const total = cart.reduce((sum, item) => sum + item.price, 0); // Tính tổng giá trị của giỏ hàng

    return (
        <div >

            <h2 >Shopee</h2>


            {/* PRODUCTS */}
            <h3 style={{ color: "pink" }}>Products</h3>
            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        <h4>{item.name}</h4>
                        <p>Price: ${item.price}</p>
                        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                    </li>
                ))}
            </ul>

            {/*Add New Product*/}
            <h3 style={{ color: "pink" }}>Add new product</h3>
            <input style={{ marginRight: "10px" }}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}

            />
            <input style={{ marginRight: "10px" }}
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}

            />
            <button onClick={handleAddProduct}>Add Product</button>


            {/* CART */}
            <h3 style={{ color: "green" }}>Cart</h3>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        <h4>{item.name}</h4>
                        <p>Price: ${item.price}</p>
                    </li>
                ))}
            </ul>

            <h3>Total: ${total}</h3>

        </div>
    )
}