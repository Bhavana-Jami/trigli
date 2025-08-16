import { useEffect, useState } from "react"

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        }
        catch (error) {
            console.log(error);
            return initialValue
        }
    })
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue))
        }
        catch (error) {
            console.log(error);
        }
    }, [storedValue])
    const addItem = (input) => {
        console.log(input);
        const newStoredValue = [...storedValue, input];
        setStoredValue(newStoredValue);
        // return ""
    }
    const editItem = (item, index, newItem) => {
        const newStoredValue = [...storedValue.slice(0, index), newItem, ...storedValue.slice(index + 1)]
        console.log(newStoredValue);
        storedValue.map((value) => (
            value === item ? newStoredValue : value
        ))

    }

    return [storedValue, setStoredValue, addItem, editItem]
}
