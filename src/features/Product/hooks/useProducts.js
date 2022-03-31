import { useState, useEffect } from 'react';
import productApi from 'api/productApi'
export default function useProduct() {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async() => {
            try {
                setLoading(true);
                const result = await productApi.getAll({
                    _page: null,
                    _limit: null
                });
                setProduct(result);
            } catch (error) {
                console.log('Failed to fetch product', error);
            }

            setLoading(false);
        })()


    }, [])
    return {
        products,
        loading
    }
}