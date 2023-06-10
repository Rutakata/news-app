import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (page, keyWord) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=${keyWord}&page=${page}&pageSize=10`,
        headers: {
            "X-API-Key": '851b87d044b948c0ba205ca5bcfbd5e5'
        },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.articles);
            console.log(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;
