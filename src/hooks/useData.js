import { useState } from "react";
import axios from "axios";

const useData = () => {
    const [data, setData] = useState([])
    const PREFIX_ENDPOINT = 'https://fakestoreapi.com'

    const getAllProducts = () => {
        axios.get(`${PREFIX_ENDPOINT}/products `)
        .then(response => {
            response.data.map((product)=>{product.amount = 1})
            setData(response.data)    
        })
    }

    const getElectronics = () => {
        axios.get(`${PREFIX_ENDPOINT}/products/category/electronics`)
            .then(response => {
                response.data.map((product)=>{product.amount = 1})
                setData(response.data)    
            })
    }

    const getJewelery = () => {
        axios.get(`${PREFIX_ENDPOINT}/products/category/jewelery`)
            .then(response => {
                response.data.map((product)=>{product.amount = 1})
                setData(response.data)    
            })
    }

    const getMensClothing = () => {
        axios.get(`${PREFIX_ENDPOINT}/products/category/men\'s clothing`)
            .then(response => {
                response.data.map((product)=>{product.amount = 1})
                setData(response.data)    
            })
    }

    const getWomensClothing = () => {
        axios.get(`${PREFIX_ENDPOINT}/products/category/women\'s clothing`)
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

export default useData