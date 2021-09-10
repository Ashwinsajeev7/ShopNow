import React, {useContext, useState} from 'react';
import { 
    View, 
    Text, 
    TextInput,
    StyleSheet ,
    Dimensions,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';
import FormButton from '../components/FormButton';
import FormButton2 from '../components/FormButton2';
import FormInput from '../components/FormInput';
import * as Animatable from 'react-native-animatable';
import {AuthContext} from '../navigation/AuthProvider';
//import Feather from 'react-native-vector-icons/Feather';
import SignIn from './SignIn';


const SignUp=({navigation}) =>
{   
    const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);

    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Image
            
            source={require('../assets/logo2.png')}
            style={styles.stretch}
            
            
            />
        </View>
        <Animatable.View
        animation="fadeInUpBig"
        style={styles.footer}>
            <Text style={styles.text_footer} >Email</Text>
        <View style={styles.action}>
        <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
           
        </View>
        <Text style={[styles.text_footer,{ marginTop: 0}]} >New Password</Text>
        <View style={styles.action}>
        <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
        
        </View>
        <Text style={[styles.text_footer,{ marginTop: 0}]} >Confirm Password</Text>
        <View style={styles.action}>
        <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />
        </View>
        
        <FormButton
        buttonTitle="Sign Up"

        onPress={() => register(email, password)}
      />
                <FormButton2
        buttonTitle="Sign In"

        onPress={() => navigation.navigate(SignIn)}
      />
                
        </Animatable.View>
        
        
        </View>
    );
};


export default SignUp;

const styles=StyleSheet.create({
    container: {
        
        flex: 1, 
      backgroundColor: '#1f65ff'
    },
    
    stretch: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        width:600,
        marginLeft :50
    },
    
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });