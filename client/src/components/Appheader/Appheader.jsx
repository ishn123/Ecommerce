import { Button, Space, message,Image } from "antd";
import React,{useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { getToken, removeToken } from "../../helpers";
import { API, AVATAR_API } from "../../constant";
import { AvatarGenerator } from 'random-avatar-generator';
import { AiOutlineLogout } from "react-icons/ai";
import './style.css';
const UserContext = createContext();
const AppHeader = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  
const generator = new AvatarGenerator();

// Simply get a random avatar
const url1=generator.generateRandomAvatar();
const url = useContext(UserContext);

  const handleLogout = () => {
    removeToken();
    message.success(`Loggged Out Successfully`);
    navigate("/signin", { replace: true });
    window.location.reload(true);
  };

  return (
    <Space className="header_space">
      {/* <Button className="header_space_brand" href="/" type="link">
        <CgWebsite size={64} />
      </Button> */}
      <Space className="auth_buttons">
        {user ? (
          <>
            <Button className="gin" href="/profile" type="link">
              <Image
                    className="social_image"
                    preview={false}
                    src={
                     url1??
                      `${AVATAR_API}?name=${user.username}&background=1890ff&color=fff`
                    }
                    height={'40px'}
                    width={'40px'}
                  /> 
            </Button>
            <div
              className="hover-link"
              type="primary"
              onClick={handleLogout}
            >
              <AiOutlineLogout className="icon"/>
            </div>
          </>
        ) : (
          <>
            <Button className="auth_button_signIn" href="/signin" type="link">
              Login
            </Button>
            <Button
              className="auth_button_signUp"
              href="/signup"
              type="primary"
            >
              SignUp
            </Button>
          </>
        )}
      </Space>
    </Space>
  );
};

export default AppHeader;