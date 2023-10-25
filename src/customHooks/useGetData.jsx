import { useState } from "react";
import axios from "axios";

const useGetData = () => {
    const [data, setData] = useState([])

    const getAllProducts = () => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            response.data.map((product)=>{product.amount = 1})
            setData(response.data)    
        })
    }

    const getElectronics = () => {
        axios.get('https://fakestoreapi.com/products/category/electronics')
            .then(response => {
                response.data.map((product)=>{product.amount = 1})
                setData(response.data)    
            })
    }

    const getJewelery = () => {
        axios.get('https://fakestoreapi.com/products/category/jewelery')
            .then(response => {
                response.data.map((product)=>{product.amount = 1})
                setData(response.data)    
            })
    }

    const getMensClothing = () => {
        axios.get(`https://fakestoreapi.com/products/category/men\'s clothing`)
            .then(response => {
                response.data.map((product)=>{product.amount = 1})
                setData(response.data)    
            })
    }

    const getWomensClothing = () => {
        axios.get(`https://fakestoreapi.com/products/category/women\'s clothing`)
            .then(response => {
                response.data.map((product)=>{product.amount = 1})
                setData(response.data)    
            })
    }

    return {
        data,
        getAllProducts,
        getElectronics,
        getJewelery,
        getMensClothing,
        getWomensClothing
    }
}

export default useGetData