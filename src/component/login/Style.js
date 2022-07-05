import {StyleSheet} from 'react-native';

export const LoginViewStyle = StyleSheet.create({
  container: {
    width: '100%',
  },
  textContainer: {
    display: "flex",
    justifyContent:"center",
    flexDirection: "row",
    marginTop: 30
  },
  textTitle: {
    width: "80%",
    fontSize: 24,
    textAlign: "center"
  },
  textInput: {
    borderRadius: 30,
    borderWidth: 1,
    padding: 10,
    borderColor: "grey",
    textAlign: "center"
  },
  loginButton: {
    padding: 20,
    backgroundColor: "grey",
    borderRadius: 30,
    marginTop: 30,
    width: "50%"
  },
  loginText: {
    textAlign: "center",
    fontSize: 20,
    color: "white"
  },
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  }
});
