import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../constants/styles';

const Input = ({
  label,
  keyboardType,
  secure,
  onUpadateValue,
  value,
  isInvalid,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={isInvalid && styles.labelInvalid}>{label}</Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]} // 스타일 적용이 2개 이상이면 배열로 전달
        autoComplete='none'
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpadateValue}
        value={value}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});
