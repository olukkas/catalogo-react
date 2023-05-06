import { Box, Button, Link, Typography, } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { selectcategories } from "./categorySlice";
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid'

export const ListCategory = () => {

    const categories = useAppSelector(selectcategories)

    const rows: GridRowsProp = categories.map(category => ({
        id: category.id,
        name: category.name,
        description: category.description,
        is_active: category.is_active
    }))



    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            flex: 1,
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1
        },
        {
            field: 'description',
            headerName: 'Description',
            flex: 1
        },
        {
            field: 'is_active',
            headerName: 'Active',
            flex: 1,
            type: 'boolean',
            renderCell: renderIsActiveCell
        }
    ];

    function renderIsActiveCell(row: GridRenderCellParams) {
        return (
            <Typography color={row.value ? 'primary' : 'secondary'}>
                {row.value ? 'Active' : 'Inactive'}
            </Typography>
        )
    }

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
            <div style={{ height: 350, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} />
            </div>
        </Box>
    );
}
