import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Toast} from "native-base";

export default function useFetch<T>(url: string, setShouldFetch: Function) {
    const [loading, setLoading] = useState<boolean>(false);
    const [dataSource, setDataSource] = useState<T[] | []>([]);

    async function getData() {
        setLoading(true);
        try {
            let response = await axios.get(url);
            setDataSource((dataSource) => [...dataSource, ...response.data]);
            setShouldFetch(false);
        } catch (e) {
            Toast.show({
                text: "List could not be loaded.",
                buttonText: "Okay",
                type: "danger"
            });
        } finally {
            setLoading(false);
        }
    }

    return [loading, dataSource, getData];
}