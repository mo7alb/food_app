// importing components
import { TouchableOpacity, StyleSheet, Text } from "react-native";

// styles used within the component
const styles = StyleSheet.create({
   btn: {
      width: "90%",
      height: 40,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 8,
      borderRadius: 20,
   },
   btnDanger: {
      backgroundColor: "#dc3545",
      color: "#fff",
   },
   btnSuccess: {
      backgroundColor: "#17a2b8",
      color: "#fff",
   },
   btnGrey: {
      backgroundColor: "#bbb",
      color: "#fff",
   },
   btnContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   btnText: {
      color: "#fff",
   },
});

/**
 * A Touchable opacity that is treated as a button with custom stylings
 * @param {Object} props props passed to the component
 * @returns React component
 */
export default function CustomButton({ content, color, action, customStyles }) {
   return (
      // a touchable opacity with custom styling
      <TouchableOpacity
         style={[
            styles.btn,
            color == "success"
               ? styles.btnSuccess
               : color == "danger"
               ? styles.btnDanger
               : color == "grey"
               ? styles.btnGrey
               : "",
            { ...customStyles },
         ]}
         onPress={action}
      >
         <Text style={styles.btnText}>{content}</Text>
      </TouchableOpacity>
   );
}
