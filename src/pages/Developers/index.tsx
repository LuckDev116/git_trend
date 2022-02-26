import React from "react";
import { Box } from "@mui/material";

import { Topbar } from "../../components/Topbar";
import { Paper } from "../../components/Paper";
import { DeveloperFeed } from "../Developers/components/DeveloperFeed";
import { NavItemType } from "../../types/NavItemType";

export const Developers: React.FC = () => {

    const navItems: NavItemType[] = [
        {
            label: "Language:",
            categories: ["Any", "Python"],
        },
        {
            label: "Date range:",
            categories: ["Today", "Week"],
        },
    ];

    const isToday: string = "today.";

    return (
        <Box 
            sx={{
                bgcolor: "background.default",
                color: "text.secondary",
                minHeight: "100vh",
            }}
        >
            <Topbar content="These are the developers building the hot tools "/>
            <Box sx={{ padding: "40px 16px" }}>
                <Paper navItems={navItems} isRepoSelected={false}>
                    <DeveloperFeed/>
                </Paper>
            </Box>
        </Box>
    );
};