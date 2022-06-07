import { Tab, Tabs, Typography, Paper, Input, Button } from "@material-ui/core";
import { React, useState } from "react";
import { toast } from "react-toastify";
import { loginApi, registerApi } from "../../api/api_auth";
import useStyles from "./Style";

const LOGIN_TAB_VALUE = 1;
const REGISTER_TAB_VALUE = 2;

const AuthPage = () => {
  const classes = useStyles();

  const [tab, setTab] = useState();
  //login state
  const [userNameLogin, setUserNameLogin] = useState();
  const [passwordLogin, setPasswordLogin] = useState();

  //register state
  const [fullNameRegister, setfullNameRegister] = useState();
  const [userNameRegister, setUserNameRegister] = useState();
  const [PasswordRegister, setPasswordRegister] = useState();
  const [confPasswordRegister, setconfPasswordRegister] = useState();

  const handleChangeTab = (e, newValue) => {
    setTab(newValue);
  };

  const handleRegister = () => {
    const user = {
      name: fullNameRegister,
      username: userNameRegister,
      password: PasswordRegister,
      confPasswordRegister: confPasswordRegister,
    };
    const error = validateRegister(user);

    if (error) return toast.warn(error);
    user.confPasswordRegister = undefined;

    registerApi(user, (isOk, data) => {
      if (!isOk) return toast.error(data);
      toast.success("ثبت نام شما با موفقیت انجام شد");
      localStorage.setItem("name", data.name);
      localStorage.setItem("image", data.image);
      localStorage.setItem("username", data.username);
      localStorage.setItem("x-auth-token", data["x-auth-token"]);
      
      window.location.reload();
    });
  };

  const handleLogin = () => {
    const user = {
      username: userNameLogin,
      password: passwordLogin,
    };

    const error = validateLogin(user);
    if (error) return toast.warn(error);

    loginApi(user, (isOk, data) => {
      if (!isOk) return toast.error(data);

      localStorage.setItem("name", data.name);
      localStorage.setItem("image", data.image);
      localStorage.setItem("username", data.username);
      localStorage.setItem("x-auth-token", data["x-auth-token"]);
      
      window.location.reload();

      return toast.success("شما با موفقیت وارد شدید");
    });
  };

  const validateLogin = (user) => {
    if (!user.username) return "لطفا نام کاربری را وارد کنید";
    if (!user.password) return "لطفا کلمه عبور را وارد کنید";
  };

  const validateRegister = (user) => {
    if (!user.name) return "لطفا نام و نام خانوادگی خود را وارد کنید";
    if (!user.username) return "لطفا نام کاربری را وارد کنید";
    if (!user.password) return "لطفا کلمه عبور را وارد کنید";
    if (user.confPasswordRegister !== user.password)
      return "کلمات عبور با هم مغایرت دارند";
  };

  return (
    <Paper className={classes.container}>
      <Typography className={classes.headerText}>
        به توییتر ما خوش آمدید
      </Typography>

      <Tabs
        value={tab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChangeTab}
        aria-lable="disable"
      >
        <Tab label="ورود" value={LOGIN_TAB_VALUE} className={classes.tab}></Tab>
        <Tab
          label="ثبت نام"
          value={REGISTER_TAB_VALUE}
          className={classes.tab}
        ></Tab>
      </Tabs>
      {tab === LOGIN_TAB_VALUE && (
        <div className={classes.containerInput}>
          <Typography>نام کاربری</Typography>
          <Input
            value={userNameLogin}
            onChange={(e) => setUserNameLogin(e.target.value)}
            className={"uni_m_b_small"}
          ></Input>
          <Typography>کلمه عبور</Typography>
          <Input
            value={passwordLogin}
            onChange={(e) => setPasswordLogin(e.target.value)}
            className={"uni_m_b_small"}
          ></Input>
          <Button
            variant={"contained"}
            color={"secondary"}
            onClick={handleLogin}
          >
            ورود
          </Button>
        </div>
      )}
      {tab === REGISTER_TAB_VALUE && (
        <div className={classes.containerInput}>
          <Typography>نام و نام خانوادگی</Typography>
          <Input
            className={"uni_m_b_small"}
            value={fullNameRegister}
            onChange={(e) => setfullNameRegister(e.target.value)}
          ></Input>
          <Typography>نام کاربری</Typography>
          <Input
            value={userNameRegister}
            onChange={(e) => setUserNameRegister(e.target.value)}
            className={"uni_m_b_small"}
          ></Input>
          <Typography>کلمه عبور</Typography>
          <Input
            className={"uni_m_b_small"}
            value={PasswordRegister}
            onChange={(e) => setPasswordRegister(e.target.value)}
          ></Input>
          <Typography>تکرار کلمه عبور</Typography>
          <Input
            className={"uni_m_b_small"}
            value={confPasswordRegister}
            onChange={(e) => setconfPasswordRegister(e.target.value)}
          ></Input>
          <Button
            onClick={handleRegister}
            variant={"contained"}
            color={"primary"}
          >
            ثبت نام
          </Button>
        </div>
      )}
    </Paper>
  );
};

export default AuthPage;
