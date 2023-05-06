import { Box, Button, Link, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { selectcategories } from "./categorySlice";
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'

export const ListCategory = () => {

    const categories = useAppSelector(selectcategories)

    const rows: GridRowsProp = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DatagridPro', col2: 'isAwsome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
    ]

    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
    ];


    return (
        <Box maxWidth={'lg'} sx={{ mt: 4, mb: 4 }}>
            <Box display={'flex'} justifyContent="flex-end">
                <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    href='/categories/create'
                    style={{ marginBottom: '1rem' }}
                >
                    New Category
                </Button>
            </Box>
            <div style={{ height: 300, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} />
            </div>
        </Box>
    );
}
