import { mockTriggers } from "@/data/mockTriggers";
import { useState } from "react";
// interface Trigger {
//     id: string
//     title: string
//     description: string
//     intensity: number
//     date: string
//     tags: string[]
//     previousTriggers: []
// }

export const useFetch = () => {
    const [data, setData] = useState(mockTriggers);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const addItem = (item: any) => {
        if (!item.id) {
            setData((prevData) => [item, ...prevData,]);
        } else {

            setData((prevData) => prevData.map((currentItem) => item.id === currentItem.id ? { ...currentItem, ...item } : currentItem))
        }
    }
    const deleteItem = (itemId: string) => {

        setData((prevData) => prevData.filter((item) => item.id !== itemId));
    }
    return { data, addItem, deleteItem };
}