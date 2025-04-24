import pxToRem from "@/utils/pxToRem";
import { SearchSharp } from "@mui/icons-material";
import { Box, FormControl, Input, Typography } from "@mui/joy";
import Link from "next/link";
import { ReactNode } from "react";
import { LogoIcon } from "../_components/icons/logo";
import FollowRecommend from "./_components/follow-recommend";
import LogoutButton from "./_components/logout-button";
import NavMenu from "./_components/nav-menu";
import TrendSection from "./_components/trend-section";

export default function AfterLoginLayout({ children }: { children: ReactNode }) {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.leftSectionWrapper}>
        <Box sx={styles.leftSection}>
          <Box sx={styles.leftSectionFixed}>
            <Link href="/home">
              <Box sx={styles.logoWrapper}>
                <Box sx={styles.logoContainer}>
                  <LogoIcon />
                </Box>
              </Box>
            </Link>

            <Box sx={{ flex: 1 }}>
              <NavMenu />
              <Link href="/compose/tweet">
                <Box sx={styles.postButton}>게시하기</Box>
              </Link>
            </Box>
            <LogoutButton />
          </Box>
        </Box>
      </Box>
      {/* 여기에 메인 콘텐츠가 들어갑니다 */}
      <Box sx={styles.rightSectionWrapper}>
        <Box sx={styles.rightSectionInner}>
          <Box component={"main"} sx={styles.main}>
            {children}
          </Box>
          <Box component={"section"} sx={styles.rightSection}>
            <Box sx={{ marginBottom: 60, width: "inherit" }}>
              {/* form */}
              <FormControl>
                <Input type="search" startDecorator={<SearchSharp />} />
              </FormControl>
              <TrendSection />
              <FollowRecommend />
              <Box sx={styles.followRecommend}>
                <Typography component={"h3"}>팔로우 추천</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    display: { xs: "none", sm: "none", md: "flex" },
    alignItems: "stretch",
    backgroundColor: "#fff",
  },
  leftSectionWrapper: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    flexGrow: 1,
  },
  leftSection: {
    width: pxToRem(275),
    height: "100dvh",
  },
  leftSectionFixed: {
    position: "fixed",
    width: "inherit",
    height: "100dvh",
    display: "flex",
    flexDirection: "column",
  },
  logoWrapper: {
    display: "inline-block",
    height: pxToRem(56),
    marginTop: pxToRem(2),
  },
  logoContainer: {
    width: pxToRem(50),
    height: pxToRem(50),
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": { backgroundColor: "rgba(15, 20, 25, 0.1)" },
  },
  postButton: {
    margin: `${pxToRem(16)} 0`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: pxToRem(52),
    boxShadow: "rgba(0, 0, 0, 0.08) 0px 8px 28px",
    backgroundColor: "rgb(29, 155, 240)",
    border: "none",
    color: "rgb(255, 255, 255)",
    fontWeight: 700,
    fontSize: pxToRem(17),
    "&:hover": { backgroundColor: "rgb(26, 140, 216)" },
  },
  rightSectionWrapper: {
    display: "flex",
    alignItems: "flex-start",
    height: "100dvh",
    flexDirection: "column",
    flexGrow: 1,
  },
  rightSectionInner: {
    height: "100%",
    width: pxToRem(990),
    display: "flex",
    justifyContent: "space-between",
  },
  main: {
    width: pxToRem(600),
    height: "200dvh",
  },
  rightSection: {
    width: pxToRem(350),
    height: "100%",
  },
  followRecommend: {
    fontSize: pxToRem(20),
    fontWeight: "bold",
    margin: `${pxToRem(12)} 0`,
    padding: `${pxToRem(12)} ${pxToRem(16)}`,
  },
};
