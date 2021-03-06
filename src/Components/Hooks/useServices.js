import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        const url = 'https://infinite-savannah-50361.herokuapp.com/services';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setIsLoading(false)
            })

    }, [])
    return {
        services,
        setServices,
        isLoading
    };
};

export default useServices;