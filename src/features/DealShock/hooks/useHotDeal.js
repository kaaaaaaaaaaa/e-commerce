import { useState, useEffect } from 'react';
import productApi from 'api/productApi'
import queryString from 'query-string';

export default function useDealHot(params) {
    const [dealList, setDeal] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        (async() => {
            try {
                setLoading(true);
                const { data } = await productApi.getAll(params)
                    // console.log(data);
                setDeal(data);
            } catch (error) {
                console.log('Failed to fetch deal', error);
            }

            setLoading(false);
        })()
    }, [])
    return {
        dealList,
        loading
    }
}