'use client'
import React, { useState } from 'react';

export default function PostProduct() {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/products", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product), // Send the product object
            });
            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            // Reset form fields after successful submission
            setProduct({
                name: '',
                description: '',
                price: '',
                category: '',
                image: ''
            });
        } catch (error) {
            console.error('Error adding product:', error);
            // Handle error, show an alert, etc.
        }
    };

    return (
        <div className="max-w-screen-md mx-auto">
            <div className="dark:bg-gray-900 text-white p-6 mt-6 rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-1">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            className="px-3 py-2 rounded-md border placeholder:text-black text-black border-gray-400 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description" className="mb-1">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            className="px-3 py-2 rounded-md border placeholder:text-black text-black border-gray-400 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="price" className="mb-1">Price:</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            className="px-3 py-2 rounded-md border placeholder:text-black text-black border-gray-400 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="category" className="mb-1">Category:</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                            className="px-3 py-2 rounded-md border placeholder:text-black text-black border-gray-400 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="image" className="mb-1">Image link:</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            value={product.image}
                            onChange={handleChange}
                            className="px-3 py-2 rounded-md border placeholder:text-black text-black border-gray-400 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
