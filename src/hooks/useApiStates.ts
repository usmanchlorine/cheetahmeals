import { useState } from "react";

export const useApiStates = () => {
    const [data, setData] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    return { data, setData, isLoading, setIsLoading, error, setError }
}