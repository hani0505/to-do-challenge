import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import plus from '../../../assets/plus.png'
import { styles } from "./styles";
import Logo from '../../../assets/Logo.png'; // Importe o arquivo SVG corretamente
import Theme from "../../stylesGlobal/Theme";
import  {TaskList}  from "../../components/Tasklist";
import { useEffect, useState } from "react";

export interface ItemProps {
    task: string,
    checked: boolean
}

export function Home() {
    const [itemList, setItemList] = useState<ItemProps[]>([])
    const [inputask, setInputask] = useState('')
    const [finishItem, setFinishItem] = useState<Number>(0)

    useEffect(() => {
        setFinishItem(itemList.filter(item=> item.checked).length)
    }, [itemList])

    function handleAddTask(){
       if(inputask ==='') return 

       if(itemList.map(item => item.task.toLocaleLowerCase()).includes(inputask.toLocaleLowerCase())){
             Alert.alert("Task já existe", "Existe uma task com esse nome") 
             return
       }
       
        const data = {
        'task': inputask,
        'checked': false
       }

       setItemList(prevState => [... prevState, data])
       setInputask('')
        
    }
    function handleCheck( item: ItemProps){
        const update = [... itemList]
        const index = update.findIndex(item => item.checked === item.checked)
        update[index] = {
            ...update[index], checked: !update[index].checked
        }

        setItemList(update)
    }
    function handleDelete(){

    }

    return(
        <View style={styles.container}>
            <Image source = {Logo} style = {styles.logo}></Image>
            <View style = {styles.wrapper}>
                <View style = {styles.inputContainer}>
                    <TextInput
                    style = {styles.input}
                    placeholder="Adicione uma tarefa"
                    placeholderTextColor={Theme.colors.Gray300}
                    onChangeText={setInputask}
                    value={inputask}                    />
                    <TouchableOpacity style = {styles.button} activeOpacity={0.7} onPress={handleAddTask}>
                        <Image source={plus} style={styles.buttonIco}></Image>
                    </TouchableOpacity>
                </View>
                <View style = {styles.header}>
                    <View style = {styles.headerItem}>
                        <Text style={styles.textuple}>Criadas </Text>
                        <Text style={styles.counter}>{itemList?.length || 0}</Text>
                    </View>
                    <View style = {styles.headerItem}>
                        <Text style={styles.textBlue }> Concluídas</Text>
                        <Text style={styles.counter }> {String(finishItem)}</Text>
                    </View>
                </View>
                    <FlatList
                        data={itemList}
                        keyExtractor={(item)=> item?.task}
                        renderItem={({item}) => (
                            <TaskList
                            key={item.task}
                            item={item}
                            onCheck={() => handleCheck(item)}
                            onRemove={handleDelete}
                            />
                        )}
                    />
            </View>
        </View>
    )
}
