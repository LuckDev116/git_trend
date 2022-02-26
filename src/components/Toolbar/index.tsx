import React from "react"
import { Box, ButtonGroup } from "@mui/material";

import { ToolButton } from "./components/ToolButton";
import { CategorySelector } from "./components/CategorySelector";
import { NavItemType } from "../../types/NavItemType";

interface ToolbarProp {
    navItems: NavItemType[]; 
    isRepoSelected: boolean;
}

export const Toolbar: React.FC<ToolbarProp> = ({
    navItems,
    isRepoSelected,
}) => {
    return (
        <Box
            sx={{
                bgcolor: "background.paper",
                padding: "16px",
                borderWidth: "0 0 1px 0",
                borderColor: "secondary.main",
                borderStyle: "solid",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <ButtonGroup
                aria-label="page selector"
                color="secondary"
                sx={{
                    flexGrow: 1,
                }}
            >
                <ToolButton
                    content="Repositories"
                    isSelected={isRepoSelected}
                    path="/"
                />
                <ToolButton
                    content="Developers"
                    isSelected={!isRepoSelected}
                    path="/developers"
                />
            </ButtonGroup>
            {navItems.map((navItem) => (
                <CategorySelector
                    key={navItem.label}
                    label={navItem.label }
                    categories={navItem.categories}
                />
            ))}
        </Box>
    );
};