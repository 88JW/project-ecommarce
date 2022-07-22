import { IconButton, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Colors } from "../../styles/theme";
import { clamp } from "./clamp";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


export default function IncDeC() {

    const clampV = clamp(1, 100);
    const [value, setValue] = useState(1);

    return (
        <Box display="flex"
            marginTop={1}
        >
            <IconButton
                sx={{
                    height: "50px",
                    width: "50px",
                    borderRadius: 2,
                    background: `${Colors.secondary}`,

                }}
                onClick={() => setValue(clampV(value - 1))}>
                <RemoveIcon />
            </IconButton>
            <Typography
                variant="h5"
                sx={{

                    // border: `2px solid ${Colors.secondary}`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50px",
                    height: "50px",


                }}
            >

                {value}
            </Typography>

            <IconButton
                sx={{
                    height: "50px",
                    width: "50px",
                    borderRadius: 2,
                    background: `${Colors.secondary}`,
                }}
                onClick={() => setValue(clampV(value + 1))}>
                <AddIcon />
            </IconButton>
            <Button
                sx={{
                    marginLeft: 1,
                    paddingInline: 1,
                    background: Colors.secondary,
                    color: Colors.primary,
                }}
            >Add to cart

            </Button>


        </Box>
    );
};