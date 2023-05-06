import { createSlice } from "@reduxjs/toolkit";

interface Category {
    id: string;
    name: string;
    description: string | null;
    is_active: boolean;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
}

const category: Category = {
    id: '0',
    name: 'Olive',
    description: 'Earum quote',
    is_active: true,
    deleted_at: null,
    created_at: '2023-08-15T10:59:09+0000',
    updated_at: '2023-08-15T10:59:09+0000',
}

const categories = [
    category,
    { ...category, name: 'Peach', id: '1' },
    { ...category, name: 'Banana', id: '2' },
    { ...category, name: 'Apple', id: '3' },
]

export const initialState = {
    categories
}

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        createCategory(_state, _action) { },
        editCategory(_state, _action) { }
    }
})



export default categorySlice.reducer

