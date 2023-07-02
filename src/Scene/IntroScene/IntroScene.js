import React from 'react';
import './IntroScene.css';
import { useEffect,useState } from 'react';
import img_kakaologinbutton from "Assets/img_kakaologinbutton.png"
import img_background from "Assets/img_BackgroundImage.png"
import img_CreateButton from "Assets/img_CreateButton.png"
import SocialKakao, { loginWithKakao } from "SocialKakao";
import { useNavigate } from 'react-router';
    export default function IntroScene() {
      const navigate = useNavigate();
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      useEffect(() => {
        const loadKakaoSDK = async () => {
          await new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://developers.kakao.com/sdk/js/kakao.js";
            document.body.appendChild(script);
            script.onload = resolve;
          });
    
          if (window.Kakao) {
            window.Kakao.init("6f4a768a88ae088d4770b11c9431138f");
            setIsLoggedIn(Boolean(window.Kakao.Auth.getAccessToken()));
          }
        };
    
        loadKakaoSDK();
      }, []);

      const handleLogin = async () => {
        try {
          await loginWithKakao();
          setIsLoggedIn(Boolean(window.Kakao.Auth.getAccessToken()));
        } catch (error) {
          // Handle the error if necessary
        }
      };


  return (
    <div>
      <img className={"intro_backgroundImage"} src = {img_background}></img>  
      <div className={"intro_foreGround2"}></div>
      <div className={"intro_foreGround1"}></div>
      <img className={"intro_createButton"} src = {img_kakaologinbutton} ></img>

      <SocialKakao />
          <button className="intro_createButton" onClick={handleLogin} style={{ background: "none", border: "none", padding: 0 }}>
        <img src={img_kakaologinbutton} alt="Input Link Button" />
      </button>

      {isLoggedIn ? (
      <button className="intro_createButton" onClick={() => navigate("/List")} style={{ background: "none", border: "none", padding: 0 }}>
      <img src={img_CreateButton} alt="Input Link Button" />
    </button>

      ) : (
        <>
          <SocialKakao />
          <button className="intro_createButton" onClick={handleLogin} style={{ background: "none", border: "none", padding: 0 }}>
        <img src={img_kakaologinbutton} alt="Input Link Button" />
      </button>
        </>
      )}

      <div className={"intro_RectFrame"}>
        <div className={"intro_Subtitle"}>
          <p className={"intro_labelWrapper"}>
            <span className={"intro_label"}>복잡하고 귀찮은 정산은 </span>
            <span className={"intro_label2"}>Blit</span>
            <span className={"intro_label3"}>에 맡기고,</span>
          </p>
          <div className={"intro_textBlock"}>신나게 놀아볼까요?</div>
        </div>
        <div className={"intro_Title"}>정산, 쉬워지다</div>
        <div className={"intro_Rect"}></div>
      </div>
    </div>
  );
}

