import React, {useEffect} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {Container} from 'native-base';
import logo from '../assets/img/logo.png';
import {connect} from 'react-redux';

const Splash = ({navigation, auth}) => {
  useEffect(() => {
    setTimeout(() => {
      if (auth.token) {
        navigation.navigate('Home')
      } else navigation.navigate('Login')
    }, 1000);
  }, []);

  return (
    <Container>
      {/* <ImageBackground
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRF2vlmJuvPMJbalXCX8wN5EPcnDjhTPOBVn_IkAht02crpRv2A',
        }}
        style={{flex: 1}}> */}
        <Image
          source={logo}
          style={{marginTop: 'auto', height: 150}}
          resizeMode="contain"
        />
        <Text style={{marginTop: 'auto', fontWeight: 800}}>My Angkringan</Text>
      {/* </ImageBackground> */}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Splash);
