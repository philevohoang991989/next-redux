// import handler from '@/pages/api/hello';
import { authActions } from "@/app/features/auth/authSlice";
import { useAppDispatch } from "@/app/hooks";
import { Button } from "antd";
import React from "react";

export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
  const dispatch = useAppDispatch();
  const handleLoginClick = () => {
    // TODO: Get username + pwd form login form
    dispatch(
      authActions.login({
        username: "",
        password: "",
      })
    );
  };
  return (
    <div>
      <Button onClick={handleLoginClick}>Fake Login</Button>

      <Button onClick={()=> dispatch(authActions.logout())}>Logout</Button>
    </div>
  );
}
