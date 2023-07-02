import React, { useEffect } from "react";

export const getProfile = async () => {
  try {
    // Kakao SDK API를 이용해 사용자 정보 획득
    let data = await window.Kakao.API.request({
      url: "/v2/user/me",
    });
    // 사용자 정보 변수에 저장
    console.log(data.id);
    console.log(data.properties.nickname);
    console.log(data.properties.profile_image);
    localStorage.setItem('id', data.id);
    localStorage.setItem('nickname', data.properties.nickname);
    localStorage.setItem('profile_image', data.properties.profile_image);
  } catch (err) {
    console.log(err);
  }
};

const Profile = () => {
  useEffect(() => {
    getProfile();
  }, []);

  return <div>{/* ... */}</div>;
};

export default Profile;
