import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import trash from "../../../assets/trash.png"
import { styles } from "./styles";
import check from "../../../assets/check.png"
import { ItemProps } from "../../screens/Home";

interface TaskItemProps {
    item: ItemProps,
    onCheck: () => void,
    onRemove: () => void
}

export function TaskList({item, onRemove, onCheck}: TaskItemProps) {
   
     
    
    return(
      
    <View style = {styles.container}>
        <TouchableOpacity style ={styles.circle} onPress={onCheck}>
            {item.checked? (
                <View style={[styles.circle, styles.checkedCircle]}>
                <Image source = {check} style={styles.ico}/>
                </View>
            ) :
            <View style={[styles.circle, styles.empetyCircle]}/>
            }
            
        </TouchableOpacity>
        <Text style={[styles.text , item.checked && styles.strikeText]}>{item.task}</Text>
        <TouchableOpacity onPress={onRemove}>
            <Image source={trash}></Image>
        </TouchableOpacity>
    </View>
   

)}