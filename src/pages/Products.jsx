import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct, removeProduct } from '../features/productSlice';

function Products() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.products);

    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        description: ''
    });

    const handleAddProduct = () => {
        dispatch(addProduct({
            id: productList.length + 1,
            name: newProduct.name,
            price: `$${newProduct.price}`,
            description: newProduct.description,
        }));
        setNewProduct({ name: '', price: '', description: '' });
    };

    const handleRemoveProduct = (id) => {
        dispatch(removeProduct(id));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    return (
        <div className='bg-gray-50 min-h-screen py-12 px-8'>
            <div className='container mx-auto'>
                <h2 className='text-4xl font-bold text-center mb-10'>Product List</h2>

                <ul className='space-y-4 mb-8'>
                    {productList.map(product => (
                        <li key={product.id} className='bg-white p-5 rounded-lg shadow-md flex justify-between items-center'>
                            <Link to={`/product/${product.id}`} className='text-lg font-medium text-gray-800'>
                                {product.name} - {product.price}
                            </Link>
                            <button 
                                onClick={() => handleRemoveProduct(product.id)}
                                className='ml-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500'>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>

                <div className='bg-white p-8 rounded-lg shadow-md border-2 border-gray-300'>
                    <h3 className='text-2xl font-semibold mb-6'>Add New Product</h3>
                    <div className='space-y-4'>
                        <div>
                            <label className='block text-lg font-medium mb-2'>Product Name</label>
                            <input
                                type="text"
                                name="name"
                                value={newProduct.name}
                                onChange={handleChange}
                                className="w-full rounded-lg border-2 border-black px-4 py-2 text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-600"
                            />
                        </div>
                        <div>
                            <label className='block text-lg font-medium mb-2'>Product Price</label>
                            <input
                                type="number"
                                name="price"
                                value={newProduct.price}
                                onChange={handleChange}
                                className="w-full rounded-lg border-2 border-black px-4 py-2 text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-600"
                            />
                        </div>
                        <div>
                            <label className='block text-lg font-medium mb-2'>Product Description</label>
                            <input
                                type="text"
                                name="description"
                                value={newProduct.description}
                                onChange={handleChange}
                                className="w-full rounded-lg border-2 border-black px-4 py-2 text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-600"
                            />
                        </div>
                    </div>
                    <button 
                        onClick={handleAddProduct}
                        className='mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-500'>
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Products;
