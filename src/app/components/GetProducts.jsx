'use client'
import { useEffect, useState } from "react";

export default function GetProducts() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/products", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await response.json();
                setItems(data.data); // Update the items state with the fetched data
            } catch (error) {
                console.error("Error fetching products:", error);
                // Handle error, show an alert, etc.
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="max-w-screen-lg mx-auto p-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
                {/* Map over the items and render them */}
                {items.map((item) => (
                    <div key={item._id} className="border m-2 shadow-lg">
                    <img src={"https://www.foodandwine.com/thmb/4qg95tjf0mgdHqez5OLLYc0PNT4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"} alt={item.name} className="w-full" />
                        <div className="p-3">
                        <h2 className="font-bold">{item.name}</h2>
                        <p>{item.description.slice(0, 40)}</p>
                        <p>Price: ${item.price}</p>
                        <p>Category: {item.category}</p>
                        </div>
                      
                    </div>
                ))}
            </div>
        </div>
    );
}
