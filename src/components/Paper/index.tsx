import React from "react";
import { Box } from "@mui/material";

import { Toolbar } from "../Toolbar";
import { NavItemType } from "../../types/NavItemType";

interface PaperProps {
    navItems: NavItemType[];
    isRepoSelected: boolean;
    children: React.ReactNode;
}
export const Paper: React.FC<PaperProps> = ({
    navItems,
    isRepoSelected,
    children,
}) => {
    return(
        <Box
            sx={{
                borderWidth: "1px",
                borderColor: "secondary.main",
                borderStyle: "solid",
                borderRadius: "8px",
                maxWidth: "1024px",
                marginX: "auto",
            }}
        >
            <Toolbar navItems={navItems} isRepoSelected={isRepoSelected}/>
            {children}
        </Box>
    );
}