import React, { useEffect } from "react";
import Profile, { getProfile } from "Profile";
const loginWithKakao = () => {
    return new Promise((resolve, reject) => {
        window.Kakao.Auth.login({
            success: function (response) {
                window.Kakao.Auth.setAccessToken(response.access_token);
                console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);

                // Send access_token to your server to obtain the server access_token
                const url = "http://api.chungran.net/api/auth/kakao/";
                const data = {
                    kakao_token: response.access_token,
                };

                // Make an API call to your server
                fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                })
                    .then((response) => response.json())
                    .then((serverResponse) => {
                        // Assuming the server response contains the server access_token
                        const serverAccessToken = serverResponse.token.access;

                        // You can use the server access_token as needed
                        console.log("Server access_token:", serverAccessToken);
                        localStorage.setItem("accessToken", serverAccessToken);
                        console.log("localStorageTest: ", localStorage.getItem("accessToken"));

                        // Call getProfile() or any other functions that require the server access_token
                        getProfile();

                        resolve();
                    })
                    .catch((error) => {
                        console.error("Failed to obtain server access_token:", error);
                        reject(error);
                    });
            },
            fail: function (error) {
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
