import { StyleSheet } from "react-native";
import Theme from "../../stylesGlobal/Theme";

export const styles = StyleSheet.create({
container:{
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
    backgroundColor: Theme.colors.Gray400
},
circle: {
    width: 24,
    height: 24,
    marginRight: 16,
    borderRadius: 16,
   
},
ico: {
    width: 12,
    height: 9
},
checkedCircle: {
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: Theme.colors.Purple
},
empetyCircle:{
borderWidth: 4,
borderColor: Theme.colors.Blue
},
text: {
    color: Theme.colors.Gray100,
    textAlign: 'left',
    flex: 1
},
strikeText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: Theme.colors.Gray300
}

})