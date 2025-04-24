"use client";

import pxToRem from "@/utils/pxToRem";
import { Avatar, Box, Button } from "@mui/joy";

export default function LogoutButton() {
  const me = {
    // 임시로 내 정보 있는것처럼
    id: "kkw",
    nickname: "김기원",
    image: "/kw.jpeg",
  };

  const onLogout = () => {};

  return (
    <Button
      sx={{
        width: pxToRem(258),
        height: pxToRem(66),
        padding: pxToRem(12),
        display: "flex",
        color: "#000000",
        margin: `${pxToRem(12)} 0`,
        cursor: "pointer",
        border: "none",
        alignItems: "center",
        bgcolor: "#fff",
        textAlign: "left",
        justifyContent: "flex-start",
        borderRadius: 0,
        "&:hover": {
          bgcolor: "rgba(15, 20, 25, 0.1)",
        },
      }}
      onClick={onLogout}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          src={me.image}
          alt={me.id}
          sx={{ width: pxToRem(40), borderRadius: "50%" }}
        />
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Box sx={{ margin: `0 ${pxToRem(12)}` }}>{me.nickname}</Box>
        <Box>@{me.id}</Box>
      </Box>
    </Button>
  );
}
