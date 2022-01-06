/* eslint-disable prettier/prettier */
import React from 'react';
import {Button} from 'react-native';
import CustomButton from '../CustomButton';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Overview from '../../navigation/OverviewTabNavigator'

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = async () => {
    GoogleSignin.configure({
      webClientId: '28573600806-9ig3j8l2hn7jcjdru4eojo47go7helj7.apps.googleusercontent.com',
    });
    console.warn('onSignInGoogle');
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  const onSignInGoogle1 = auth().signInWithCredential(googleCredential);
  onSignInGoogle1.then(re =>{
      console.log(re);
    });
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={() => onSignInGoogle().then(() =>('Overview'))}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
