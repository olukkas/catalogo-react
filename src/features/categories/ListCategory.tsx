import { Box, Button, IconButton, Link, Typography, } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { selectcategories } from "./categorySlice";
import DeleteIcon from '@mui/icons-material/Delete'
import {
    DataGrid,
    GridColDef,
    GridRenderCellParams,
    GridRowsProp,
    GridToolbar
} from '@mui/x-data-grid'

export const ListCategory = () => {

    const categories = useAppSelector(selectcategories)

    const componetsdProps = {
        toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 }
        }
    }

    const rows: GridRowsProp = categories.map(category => ({
        id: category.id,
        name: category.name,
        isActive: category.is_active,
        createdAt: new Date(category.created_at).toLocaleDateString('pt-BR')
    }))

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            renderCell: renderNameCell
        },
        {
            field: 'isActive',
            headerName: 'Active',
            flex: 1,
            type: 'boolean',
            renderCell: renderIsActiveCell,
        },
        {
            field: 'createdAt',
            headerName: 'Create at',
            flex: 1,
        },
        {
            field: 'id',
            headerName: 'Actions',
            flex: 1,
            renderCell: renderActionsCell
        },
    ];

    function renderIsActiveCell(row: GridRenderCellParams) {
        return (
            <Typography>
                {row.value ? 'Active' : 'Inactive'}
            </Typography>
        )
    }

    function renderActionsCell(row: GridRenderCellParams) {
        return (
            <IconButton
                color='secondary'
                onClick={() => console.log(row.value)}
                aria-label='delete'
            >
                <DeleteIcon />
            </IconButton>
        )
    }

    function renderNameCell(row: GridRenderCellParams) {
        return (
            <Link
                style={{ textDecoration: 'none' }}
                href={`/categories/edit/${row.id}`}
            >
                <Typography color={'primary'}>{row.value}</Typography>
            </Link>
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
            <Box sx={{ dispaly: 'flex', heigth: 600 }}>
                <DataGrid
                    pageSizeOptions={[2, 20, 50, 100]}
                    disableRowSelectionOnClick={true}
                    disableColumnSelector={true}
                    disableDensitySelector={true}
                    disableColumnFilter={true}
                    rows={rows}
                    columns={columns}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={componetsdProps}
                />
            </Box>
        </Box>
    );
}
