import {
    Box,
    FormControl,
    Grid,
    Paper,
    TextField,
    Typography
} from "@mui/material";

export const EditCategory = () => {
    return (
        <Box>
            <Paper>
                <Box p={2}>
                    <Box mb={2}>
                        <Typography variant="h4">Edit Category</Typography>
                    </Box>
                </Box>

                <Box p={2}>
                    <form>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <TextField
                                        required
                                        name='name'
                                        label='name'
                                        value={'0'}
                                        disabled={false}
                                        onChange={console.log}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Paper>
        </Box>
    );
}
