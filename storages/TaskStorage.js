import AsyncStorage from "@react-native-async-storage/async-storage";
const STORAGE_KEY = "@todos"; //เปลี่ยนแค่ KEY 
//ดึงข้อมูลทั้งหมดขึ้นมาแสดง
const readItems = async () => {
  try {
    let string_value = await AsyncStorage.getItem(STORAGE_KEY);
    // console.log("S:", string_value);
    let items = string_value != null ? JSON.parse(string_value) : [];
    // console.log("items:", items);
    return items;
  } catch (error) {
    console.log(error);
  }
};
//ดึงข้อมูลแค่ 1 ชื้นขึ้นมาแสดงตาม item ที่ระบุไว้
const readItemDetail = async (item) => {
  try {
    let string_value = await AsyncStorage.getItem(STORAGE_KEY);
    let items = string_value != null ? JSON.parse(string_value) : [];
    //CHECK IF id exist in array
    let index = items.findIndex((p_item) => p_item.id == item.id);
    return items[index];
  } catch (error) {
    console.log(error);
  }
};
//ลบข้อมูล item ที่ระบุไว้
const removeItem = async (item) => {
  try {
    //READ ALL
    let string_value = await AsyncStorage.getItem(STORAGE_KEY);
    let items = string_value != null ? JSON.parse(string_value) : [];
    //CHECK IF ITEM EXISTS    
    let index = items.findIndex((p_item) => p_item.id == item.id);
    if (index > -1) {
      //REMOVE
      items.splice(index, 1);
    }
    //WRITE
    string_value = JSON.stringify(items);
    await AsyncStorage.setItem(STORAGE_KEY, string_value);
  } catch (error) {
    console.log(error);
  }
};
//เพิ่มข้อมูลและอัพเดทข้อมูล ตาม item ที่ระบุไว้
const writeItem = async (item) => {
  try {
    //READ ALL
    let string_value = await AsyncStorage.getItem(STORAGE_KEY);
    let items = string_value != null ? JSON.parse(string_value) : [];
    //CHECK IF id exist in array
    let index = items.findIndex((p_item) => p_item.id == item.id);
    if (index > -1) {
      //UPDATE
      items[index] = item;
    } else {
      //INSERT AT THE FRONT
      items.unshift(item);
    }
    //WRITE
    string_value = JSON.stringify(items);
    await AsyncStorage.setItem(STORAGE_KEY, string_value);
  } catch (error) {
    console.log(error);
  }
};

const writeItems = async (values) => {
  try {    
    //WRITE
    string_values = JSON.stringify(values);
    await AsyncStorage.setItem(STORAGE_KEY, string_values);
  } catch (error) {
    console.log(error);
  }
};

export default { readItems, readItemDetail, removeItem, writeItem , writeItems };

