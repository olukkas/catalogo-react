import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { selectcategories } from "./categorySlice";

export const ListCategory = () => {

    const categories = useAppSelector(selectcategories)

    return (
        <Box>
            <Typography variant={'h3'} component={'h1'}>
                ListCategory
                {categories.map(category => (
                    <Typography key={category.id}>{category.name}</Typography>
                ))}
            </Typography>
        </Box>
    );
}
