"use client";

import { styled } from "@mui/joy";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IStateSignUp {
  id: string;
  password: string;
  nickname: string;
  imageFile: File | null;
  image: string | null;
}

/**
 * 회원가입 모달
 */
const SignupModal = () => {
  const router = useRouter();
  const [state, setState] = useState<IStateSignUp>({
    id: "",
    password: "",
    nickname: "",
    imageFile: null,
    image: null,
  });

  const onClickClose = () => {
    router.back();
    // TODO: 뒤로가기가 /home이 아니면 /home으로 보내기
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onChangeImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    e.target.files && setState({ ...state, imageFile: e.target.files[0] });
    console.log(e.target.files);
  };

  console.log(state);
  // const onSubmit: FormEventHandler = e => {
  //   e.preventDefault();
  //   fetch("http://localhost:9090/api/users", {
  //     method: "post",
  //     body: JSON.stringify({
  //       id: state.id,
  //       nickname: state.nickname,
  //       image: state.image,
  //       password: state.password,
  //     }),
  //     credentials: "include",
  //   })
  //     .then((response: Response) => {
  //       console.log(response.status);
  //       if (response.status === 200) {
  //         router.replace("/home");
  //       }
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // };

  return (
    <Modal open onClose={onClickClose}>
      <ModalDialog sx={{ width: "50%" }}>
        <ModalClose />
        <div>
          <Typography level="h4" component="h1">
            <strong>환영합니다 👋</strong>
          </Typography>
          <Typography level="body-sm">계정을 만드세요.</Typography>
        </div>
        <FormControl>
          <FormLabel>아이디</FormLabel>
          <Input
            name="id"
            type="text"
            placeholder="아이디를 입력해 주세요."
            value={state.id}
            onChange={onChangeInput}
          />
        </FormControl>
        <FormControl>
          <FormLabel>닉네임</FormLabel>
          <Input
            name="nickname"
            type="text"
            placeholder="비밀번호 입력해 주세요."
            value={state.nickname}
            onChange={onChangeInput}
          />
        </FormControl>
        <FormControl>
          <FormLabel>비밀번호</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="비밀번호 입력해 주세요."
            value={state.password}
            onChange={onChangeInput}
          />
        </FormControl>
        <FormControl>
          <FormLabel>프로필</FormLabel>
          <InputFileUpload onChange={onChangeImageFile} />
        </FormControl>
        <Button sx={{ mt: 1 }}>계정 만들기</Button>
      </ModalDialog>
    </Modal>
  );
};
export default SignupModal;

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const InputFileUpload = ({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Button
      component="label"
      role={undefined}
      tabIndex={-1}
      variant="outlined"
      color="neutral"
      startDecorator={
        <SvgIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
        </SvgIcon>
      }
    >
      Upload a file
      <VisuallyHiddenInput
        type="file"
        accept="image/*"
        name="image"
        onChange={onChange}
      />
    </Button>
  );
};
