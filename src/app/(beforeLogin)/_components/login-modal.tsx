"use client";

import { ModalClose, ModalDialog, useColorScheme } from "@mui/joy";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import Typography from "@mui/joy/Typography";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface IStateLogin {
  id: string;
  password: string;
}

/**
 * 로그인 모달
 */
const LoginModal = () => {
  const router = useRouter();
  const { mode, systemMode } = useColorScheme();
  const [state, setState] = useState<IStateLogin>({
    id: "",
    password: "",
  });

  console.log(mode);
  console.log(systemMode);
  const onClickClose = () => {
    router.back();
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <Modal open onClose={onClickClose}>
      <ModalDialog sx={{ width: "50%" }}>
        <ModalClose />
        <div>
          <Typography level="h4" component="h1">
            <strong>환영합니다. 👋</strong>
          </Typography>
          <Typography level="body-sm">계속하려면 로그인하세요.</Typography>
        </div>
        <FormControl id="id">
          <FormLabel>아이디</FormLabel>
          <Input
            name="id"
            type="text"
            placeholder="아이디를 입력해 주세요."
            onChange={onChangeInput}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>비밀번호</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            onChange={onChangeInput}
          />
        </FormControl>
        <Button sx={{ mt: 1 }} onClick={() => router.replace("/home")}>
          로그인
        </Button>
      </ModalDialog>
    </Modal>
  );
};
export default LoginModal;
