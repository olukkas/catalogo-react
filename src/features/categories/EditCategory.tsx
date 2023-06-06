import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  Paper,
  Switch,
  TextField,
  Typography
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCategoryById } from "./categorySlice";

export const EditCategory = () => {
  const id = useParams().id || ''

  const category = useAppSelector(state => selectCategoryById(state, id));
  const [isDisable, setIsDisable] = useState(false);

  const handleChange = (_e: any) => {
    setIsDisable(true);
  }

  const handleToogle = (_e: any) => {

  }

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
                    label='Name'
                    value={category.name}
                    disabled={isDisable}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    required
                    name='description'
                    label='Description'
                    value={category.description}
                    disabled={isDisable}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        name="isActive"
                        color="secondary"
                        onChange={handleToogle}
                        checked={category.is_active}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    }
                    label='Active'
                  />
                </FormGroup>
              </Grid>

              <Grid item xs={12}>
                <Box display={'flex'} gap={2}>
                  <Button variant="contained" LinkComponent={Link} href='/categories'>
                    back
                  </Button>

                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={isDisable}
                  >
                    {isDisable ? 'Loading...' : 'Save'}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Box>
  );
}
