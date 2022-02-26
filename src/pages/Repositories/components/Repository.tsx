import React from "react";
import { Box, Typography, Link, Button } from "@mui/material";

import { RepositoryType } from "../../../types/RepositoryType";
import { RepositoryIcon } from "../../../components/Icons/RepositoryIcon";
import { StarIcon } from "../../../components/Icons/StarIcon";
import { BranchIcon } from "../../../components/Icons/BranchIcon";
import { Avatar } from "../../../components/Avatar";

interface RepositoryProps {
    repository: RepositoryType;
}

export const Repository: React.FC<RepositoryProps> = ({ repository }) => {
    return (
        <Box
            sx={{
                padding: "20px",
                borderWidth: "0 0 1px 0",
                borderColor: "secondary.main",
                borderStyle: "solid",
            }}
        >
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "end" }}>
                <RepositoryIcon/>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        flexGrow: 1,
                        paddingLeft: "8px",
                    }}
                >
                    <Link
                        href={repository.url}
                        sx={{
                        fontSize: "20px",
                        fontWeight: 600,
                        color: "#58a6ff",
                        textDecoration: "none",
                        ":hover": {
                            textDecoration: "underline",
                        },
                        display: "block",
                        flexGrow: 1,
                        }}
                    >
                        <span
                            style={{ fontWeight: 400 }}
                            >{`${repository.username} /`}
                        </span>
                        {repository.repositoryName}
                    </Link>
                    <Button
                        variant="outlined"
                        sx={{
                        padding: "3px 12px",
                        borderRadius: "6px",
                        borderColor: "secondary.main",
                        bgcolor: "background.paper",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        ":hover": {
                            borderColor: "text.secondary",
                        },
                        }}
                    >
                        <StarIcon/>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontWeight: 600,
                                color: "text.primary",
                                marginLeft: "6px",
                                textTransform: "none",
                            }}
                        >
                        Star
                        </Typography>
                    </Button>
                </Box>
            </Box>
            <Typography
                sx={{
                fontSize: "14px",
                marginY: "4px",
                width: "80%",
                }}
            >
                {repository.description}
            </Typography>
            <Box
                sx={{
                display: "flex",
                flexDirection: "row",
                marginTop: "8px",
                alignItems: "center",
                }}
            >
            <Typography sx={{ fontSize: "12px", marginRight: "16px" }}>
                {repository.language}
            </Typography>
            <Link
            href="#"
                sx={{
                    marginRight: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "text.secondary",
                    ":hover": {
                    color: "primary.main",
                    },
            }}
            >
                <StarIcon />
                <Typography
                    sx={{
                    fontSize: "12px",
                    marginLeft: "4px",
                    textTransform: "none",
                    }}
                >
                    {repository.totalStars}
                </Typography>
                </Link>
                <Link
                href="#"
                sx={{
                    marginRight: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "text.secondary",
                    ":hover": {
                    color: "primary.main",
                    },
                }}
                >
                <BranchIcon/>
                <Typography
                    sx={{
                    fontSize: "12px",
                    marginLeft: "4px",
                    textTransform: "none",
                    }}
                >
                    {repository.forks}
                </Typography>
                </Link>
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    flexGrow: 1,
                }}
                >
                    <Typography sx={{ fontSize: "12px" }}>Built by</Typography>
                    {repository.builtBy.map((user) => (
                        <Avatar key={user.username} user={user} size="20px" />
                    ))}
                </Box>
                <StarIcon />
                <Typography
                    sx={{ fontSize: "12px", marginLeft: "2px" }}
                    >{`${repository.starsSince} stars today`}
                    </Typography>
            </Box>
        </Box>
    );
}