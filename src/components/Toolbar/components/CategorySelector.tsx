import React, { useState, useContext } from "react";
import { Box, Typography, Button, Popper, Fade, Paper } from "@mui/material";
import {
    ArrowDropDown as ArrowDropDownIcon,
    ArrowDropUp as ArrowDropUpIcon,
} from "@mui/icons-material";

import { CategoriesContext } from "../../../context/CategoriesContext";

interface CategorySelectorProp {  
    label: string;
    categories: string[];
    isLast?: boolean;
}

export const CategorySelector: React.FC<CategorySelectorProp> = ({
    label,
    categories,
    isLast,
}) => {
    const [selected, setSelected] = useState<string>(
        categories.length > 0 ? categories[0] : ""
    );
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { range, value, setValue } = useContext(CategoriesContext);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setIsOpen(!isOpen);
    };

    const handleSelect = (label: string, category: string) => {
        if(label === range){
            setValue(category);
        }
        setSelected(category);
        setIsOpen(!isOpen);
    };

  return (
    <Box
        sx={{
            marginRight: `${isLast ? "0" : "20px"}`,
        }}
    >
    <Button
        variant="text"
        color="secondary"
        sx={{
            color: "text.secondary",
            textTransform: "none",
            fontSize: "14px",
            ":hover": {
            color: "white",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            },
        }}
        onClick={handleOpen}
    >
    <Typography sx={{ marginRight: "6px" }}>{label}</Typography>
    <Typography>{selected}</Typography>
    {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
    </Button>
    <Popper
        open={isOpen}
        anchorEl={anchorEl}
        placement="bottom-end"
        transition
    >
        {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
            <Paper
                sx={{
                borderWidth: "1px",
                borderColor: "darkGray",
                borderStyle: "solid",
                }}
            >
                {categories.map((category) => (
                <Button
                    key={category}
                    sx={{
                    display: "block",
                    width: "100%",
                    textTransform: "none",
                    fontSize: "14px",
                    color: `${
                        category === selected ? "white" : "text.secondary"
                        }`,
                    }}
                    onClick={() => handleSelect(label, category)}
                >
                    {category}
                </Button>
                ))}
            </Paper>
            </Fade>
        )}
        </Popper>
    </Box>
  );
};
