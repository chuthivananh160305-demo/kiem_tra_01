import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋🏻 </Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>

        <Image
          source={{uri:"https://i.pravatar.cc/100"}}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.title}>Your Insights</Text>
      <View style={styles.grid}>

        
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Scan")}
        >

          <View style={styles.icon1}>
            <Image
              source={require("./assets/scan.png")}
              style={styles.icon}
            /></View>
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardSub}>Scanned 483</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <View style={styles.icon2}>
            <Image
              source={require("./assets/icon2.png")}
              style={styles.icon}
            /></View>
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardSub}>Counterfeited 32</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.icon3}>
            <Image
              source={require("./assets/icon3.png")}
              style={styles.icon}
            /></View>
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardSub}>Checkouts 8</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.icon4}>
            <Image
              source={require("./assets/calendar.png")}
              style={styles.icon}
            /></View>
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardSub}>History 26</Text>
        </View>

      </View>
      
    </View>
  );
}

function ScanScreen() {
  return (
    <View style={styles.container2}>

      <Image
        source={require("./assets/nuoc_ep.png")}
        style={styles.product}
      />
      <Image
        source={require("./assets/Group5.png")}
        style={styles.scanFrame}
      />

      <View style={styles.bottomCard}>
        <Image
          source={require("./assets/nuoc_ep.png")}
          style={styles.smallImage}
        />

        <View>
          <Text style={{ color: "gray" }}>Lauren's</Text>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Orange Juice
          </Text>
        </View>

        <View style={styles.plus}>
          <Image
            source={require("./assets/square-plus.png")}
            style={{ width: 35, height: 35 }}
          /></View>

      </View>

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name="Scan"
          component={ScanScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    backgroundColor:"#ffffff"
  },
  container2: {
    flex: 1,
    backgroundColor: "#F4E8DB",
    alignItems: "center"
  },
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },

  hello:{
    fontSize:28,
    fontWeight:"600"
  },

  name:{
    fontSize:18,
    color:"gray"
  },

  avatar:{
    width:50,
    height:50,
    borderRadius:15
  },

  title:{
    marginTop:30,
    fontSize:22,
    fontWeight:"600"
  },

  grid:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    marginTop:20
  },

  card:{
    width:"46%",
    height:200,
    backgroundColor:"#f6f6f6",
    borderRadius:20,
    padding:20,
    marginBottom:15,
    justifyContent:"center",
    alignItems:"center"
  },

  icon:{
    fontSize:30
  },

  cardTitle:{
    fontSize:18,
    marginTop:15
  },

  cardSub:{
    color:"gray",
    marginTop:5
  },

  center:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  icon1:{
    width:70,
    height:70,
    backgroundColor:"#bebee7",  
    borderRadius:20,            
    justifyContent:"center",
    alignItems:"center"
  },
  icon2:{
    width:70,
    height:70,
    backgroundColor:"#f0d1b2",  
    borderRadius:20,            
    justifyContent:"center",
    alignItems:"center"
  },
  icon3:{
    width:70,
    height:70,
    backgroundColor:"#bee7d9",  
    borderRadius:20,            
    justifyContent:"center",
    alignItems:"center"
  },
  icon4:{
    width:70,
    height:70,
    backgroundColor:"#bedce7",  
    borderRadius:20,            
    justifyContent:"center",
    alignItems:"center"
  },

  icon:{
    width:30,
    height:30
  },
  scanArea:{
  justifyContent:"center",
  alignItems:"center"
},

product:{
  width:"100%",
  height:"100%",
  resizeMode:"contain"
},

scanFrame:{
  position:"absolute",
  marginTop:100,
  width:300,
  height:450,
  resizeMode:"contain"
},

  bottomCard: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
    width: "65%",
    justifyContent: "space-between"
  },

  smallImage: {
    width: 50,
    height: 50,
    borderRadius: 10
  },

});