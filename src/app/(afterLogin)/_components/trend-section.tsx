"use client";

import { theme } from "@/ui/style";
import pxToRem from "@/utils/pxToRem";
import { Box, Typography } from "@mui/joy";
// import { styled } from "@mui/joy/styles";
import styled from "@emotion/styled";
import Link from "next/link";

const Container = styled(Box)`
  background-color: rgb(247, 249, 249);
  border-radius: ${pxToRem(16)};
  margin-top: ${pxToRem(12)};
`;

const Item = styled(Box)`
  font-size: ${pxToRem(20)};
  font-weight: ${theme.fontWeight.lg};
  padding: ${`${pxToRem(12)} 0`};
`;

const TrendSection = () => {
  return (
    <Container>
      <Item>
        <Typography level="h3">trendsection</Typography>
      </Item>
      <Link href={`/search?q=trend`}>
        <Box>실시간트렌</Box>
      </Link>
    </Container>
  );
};
export default TrendSection;
