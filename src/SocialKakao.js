import React, { useEffect } from "react";
import Profile,{getProfile} from "Profile";
const loginWithKakao = () => {
  return new Promise((resolve, reject) => {
    window.Kakao.Auth.login({
      success: function(response) {
        window.Kakao.Auth.setAccessToken(response.access_token);
        console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);
        getProfile();
        resolve();
      },
      fail: function(error) {
        console.log(error);
        reject(error);
      },
    });
  });
};

const SocialKakao = () => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://developers.kakao.com/sdk/js/kakao.js";
  //   document.body.appendChild(script);

  //   script.onload = () => {
  //     if (window.Kakao) {
  //       window.Kakao.init("6f4a768a88ae088d4770b11c9431138f");
  //     }
  //   };
  // }, []);

  return <div>{/* ... */}</div>;
};

export { loginWithKakao };
export default SocialKakao;
