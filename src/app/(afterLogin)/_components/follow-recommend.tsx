"use client";

import pxToRem from "@/utils/pxToRem";
import { Box } from "@mui/joy";
import { styled } from "@mui/joy/styles";

const Container = styled(Box)`
  background-color: rgb(247, 249, 249);
  border-radius: ${pxToRem(16)};
  margin-top: ${pxToRem(12)};
`;
const FollowRecommend = () => {
  return <Container>followrecommend</Container>;
};
export default FollowRecommend;
