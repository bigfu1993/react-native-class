import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
} from 'react-native';

/*
  1.默认flex布局column
  2.view text样式无继承
  3.单位使用纯数字 | 百分比(字符串)，不用px vw vh
*/
const screenW = Math.round(Dimensions.get('window').width);
// const handlePress = () => {
//   alert('handlePress');
// };
type IptType = String;
const Index = () => {
  const handlePress = () => {
    alert('handlePress');
  };
  const handleChange = (iptTxt: IptType) => {
    alert(iptTxt);
  };
  const o = {a: 1, b: 2};
  const a = [1, 2, 3, 4];
  return (
    <>
      {/* 插值表达式 */}
      <View>
        <Text>{123}</Text>
        <Text>{'abc'}</Text>
        <Text>
          {true}
          {false}
        </Text>
        {/* <Text>{o}</Text> */}
        {a.map((v, k) => (
          <View key={v}>
            <Text>
              index:{k}=value:{v}
            </Text>
          </View>
        ))}
      </View>
      {/* input */}
      <View>
        <TextInput
          style={{backgroundColor: 'aqua'}}
          onChangeText={handleChange}></TextInput>
      </View>
      {/* ImageBackground */}
      <View>
        <ImageBackground
          style={{width: 200, height: 200}}
          source={require('./images/yyy.jpg')}>
          <Text>ImageBackground</Text>
        </ImageBackground>
      </View>
      {/* Image */}
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('./images/yyy.jpg')}
          style={{width: screenW / 2, height: 200}}></Image>
        <Image
          source={require('./images/guita.gif')}
          style={{width: screenW / 2, height: 200}}></Image>
      </View>
      {/* TouchableOpacity */}
      <View>
        <TouchableOpacity
          onPress={handlePress}
          activeOpacity={0.5}
          style={{backgroundColor: 'aqua'}}>
          <Text>TouchableOpacity</Text>
        </TouchableOpacity>
      </View>
      {/* view & text */}
      <View
        style={{
          backgroundColor: 'aqua',
          flexDirection: 'row',
          width: screenW / 2,
          height: '50%',
        }}>
        <Text style={{backgroundColor: 'red', color: 'blue', fontSize: 20}}>
          <Text>123</Text>
          <Text>456</Text>
        </Text>
        <Text style={{color: 'red', fontSize: 20}}>abc</Text>
        <Text
          style={{
            backgroundColor: 'yellow',
            color: 'red',
            transform: [{scale: 1}, {translateY: 40}],
          }}>
          efd
        </Text>
      </View>
    </>
  );
};
export default Index;
