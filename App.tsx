import {View, Text, Dimensions} from 'react-native';

/*
  1.默认flex布局column
  2.view text样式无继承
  3.单位使用纯数字 | 百分比(字符串)，不用px vw vh
*/
const screenW = Math.round(Dimensions.get('window').width);
const Index = () => {
  return (
    <View
      style={{
        backgroundColor: 'aqua',
        flexDirection: 'row',
        width: screenW / 2,
        height: '50%',
      }}>
      <Text style={{color: 'blue', fontSize: 20}}>
        <Text>123</Text>
        <Text>456</Text>
      </Text>
      <Text style={{color: 'red', fontSize: 20}}>123</Text>
      <Text>456</Text>
    </View>
  );
};
export default Index;
