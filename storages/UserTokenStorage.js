import AsyncStorage from "@react-native-async-storage/async-storage";
const STORAGE_KEY = "@userToken"; //เปลี่ยนแค่ KEY
//อ่านข้อมูล
const readItem = async () => {
  try {
    let string_value = await AsyncStorage.getItem(STORAGE_KEY);
    let item = string_value != null ? string_value : "";
    return item;
  } catch (error) {
    console.log(error);
  }
};
//เขียนข้อมูล
const writeItem = async (item) => {
  try {    
    await AsyncStorage.setItem(STORAGE_KEY, item.toString());
  } catch (error) {
    console.log(error);
  }
};

export default { readItem, writeItem };
