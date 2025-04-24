"use client";

import { Explore, Home, MessageSharp, People } from "@mui/icons-material";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Link from "next/link";
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation";

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();
  const segments = useSelectedLayoutSegments();
  console.log(segment);
  console.log(segments);
  const me = {
    // 임시로 내 정보 있는것처럼
    id: "kkw",
  };

  const navMenuConfig = [
    {
      id: 1,
      name: "홈",
      segment: "home",
      link: "/home",
      icon: <Home />,
    },
    {
      id: 2,
      name: "탐색하기",
      segment: "explore",
      link: "/explore",
      icon: <Explore />,
    },
    {
      id: 3,
      name: "쪽지",
      segment: "messages",
      link: "/messages",
      icon: <MessageSharp />,
    },
    {
      id: 4,
      name: "프로필",
      segment: `${me.id}`,
      link: `/${me.id}`,
      icon: <People />,
    },
  ];

  return (
    <List>
      {navMenuConfig.map(
        (menu: {
          id: number;
          name: string;
          segment: string;
          link: string;
          icon: React.ReactNode;
        }) => {
          const isSelected = menu.segment === segment;
          return (
            <Link key={menu.id} href={menu.link}>
              <ListItem>
                <ListItemButton
                  selected={isSelected}
                  color={isSelected ? "primary" : "neutral"}
                  sx={{ height: "3rem" }}
                >
                  <ListItemDecorator>{menu.icon}</ListItemDecorator>
                  <ListItemContent sx={{ fontWeight: isSelected ? 700 : 400 }}>
                    {menu.name}
                  </ListItemContent>
                </ListItemButton>
              </ListItem>
            </Link>
          );
        },
      )}
    </List>
  );
}
