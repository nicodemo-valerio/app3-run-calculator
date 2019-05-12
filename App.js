import React from 'react';
import { StyleSheet, Button, Text, View, Picker } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class HelpScreen extends React.Component {
  render() {
    return (
      <View style={[styles.container, { padding: 20, fontSize: 20 }]}>
        <Text style={{ textAlign: 'center', fontSize: 30 }}>Help</Text>
        <Text>There are 3 ways to use the calculator.</Text>
        <Text>1. If you know your pace and the distance you are going to run you can calculate the finish time by clicking on "Calculate Time".</Text>
        <Text>2. If you know your pace and the finish time you can calculate how long will be the run by clicking on "Calculate Distance"</Text>
        <Text>3. If you know the distance and the time of the run you can calculate the pace by clicking on "Calculate Pace"</Text>
      </View>
    )
  }
}

class RunScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      paceMin: '4',
      paceSec: '0',
      paceUnit: 'km',
      distanceValue: '10',
      distanceUnit: 'km',
      timeHrs: '0',
      timeMin: '40',
      timeSec: '0'
    }
  }

  getTimeInSeconds = () => {
    return Number.parseInt(this.state.timeSec) + Number.parseInt(this.state.timeMin) * 60 + Number.parseInt(this.state.timeHrs) * 3600;
  }

  calcPace = () => {
    const seconds = this.getTimeInSeconds();
    const distance = this.getDistance();
    let pace = 0;
    if (this.state.paceUnit === 'mile' && this.state.distanceUnit === 'km') {
      pace = seconds / (distance / 1.609344);
    } else if (this.state.paceUnit === 'km' && this.state.distanceUnit === 'mile') {
      pace = seconds / (distance * 1.609344);
    }
    else {
      pace = seconds / distance;
    }
    const m = Math.floor(pace % 3600 / 60).toString();
    const s = Math.floor(pace % 3600 % 60).toString();
    this.setState({
      paceMin: m,
      paceSec: s
    })
  }

  calcDistance = () => {
    const seconds = this.getTimeInSeconds();
    const paceSec = (Number.parseInt(this.state.paceMin)) * 60 + Number.parseInt(this.state.paceSec);
    let distance;
    if (this.state.paceUnit === 'mile' && this.state.distanceUnit === 'km') {
      distance = Number.parseInt(seconds / (paceSec / 1.609344)).toString();
    } else if (this.state.paceUnit === 'km' && this.state.distanceUnit === 'mile') {
      distance = Number.parseInt(seconds / (paceSec * 1.609344)).toString();
    }
    else {
      distance = Number.parseInt(seconds / paceSec).toString();
    }
    this.setState({
      distanceValue: distance
    })
  }

  getDistance = () => {
    if (this.state.distanceValue === 'hm') {
      return (this.state.distanceUnit === 'km') ? 21.097 : 13.1;
    }
    else if (this.state.distanceValue === 'marathon') {
      return (this.state.distanceUnit === 'km') ? 42.195 : 26.2;
    } else {
      return Number.parseInt(this.state.distanceValue);
    }
  }

  calcTime = () => {
    const paceSec = (Number.parseInt(this.state.paceMin)) * 60 + Number.parseInt(this.state.paceSec);
    let distance = this.getDistance();
    let seconds = 0;
    if (this.state.paceUnit === 'mile' && this.state.distanceUnit === 'km') {
      seconds = paceSec * (distance / 1.609344);
    } else if (this.state.paceUnit === 'km' && this.state.distanceUnit === 'mile') {
      seconds = paceSec * (distance * 1.609344);
    }
    else {
      seconds = paceSec * distance;
    }
    const h = Math.floor(seconds / 3600).toString();
    const m = Math.floor(seconds % 3600 / 60).toString();
    const s = Math.floor(seconds % 3600 % 60).toString();
    this.setState({
      timeHrs: h,
      timeMin: m,
      timeSec: s
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flexRow}>
          {/* title */}
          <Text style={{ textAlign: 'center', fontSize: 30 }}>Run Calculator</Text>
        </View>
        {/* pace */}
        <View style={[styles.flexRow, { borderTopColor: 'lightgrey', borderTopWidth: 0.3 }]}>
          <Text style={styles.label}>Pace</Text>
          {/* min */}
          <Picker
            selectedValue={this.state.paceMin}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ paceMin: itemValue })
            }>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
          </Picker>
          <Text>min</Text>
          {/* sec */}
          <Picker
            selectedValue={this.state.paceSec}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ paceSec: itemValue })
            }>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="13" value="13" />
            <Picker.Item label="14" value="14" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="16" value="16" />
            <Picker.Item label="17" value="17" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="19" value="19" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="21" value="21" />
            <Picker.Item label="22" value="22" />
            <Picker.Item label="23" value="23" />
            <Picker.Item label="24" value="24" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="26" value="26" />
            <Picker.Item label="27" value="27" />
            <Picker.Item label="28" value="28" />
            <Picker.Item label="29" value="29" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="31" value="31" />
            <Picker.Item label="32" value="32" />
            <Picker.Item label="33" value="33" />
            <Picker.Item label="34" value="34" />
            <Picker.Item label="35" value="35" />
            <Picker.Item label="36" value="36" />
            <Picker.Item label="37" value="37" />
            <Picker.Item label="38" value="38" />
            <Picker.Item label="39" value="39" />
            <Picker.Item label="40" value="40" />
            <Picker.Item label="41" value="41" />
            <Picker.Item label="42" value="42" />
            <Picker.Item label="43" value="43" />
            <Picker.Item label="44" value="44" />
            <Picker.Item label="45" value="45" />
            <Picker.Item label="46" value="46" />
            <Picker.Item label="47" value="47" />
            <Picker.Item label="48" value="48" />
            <Picker.Item label="49" value="49" />
            <Picker.Item label="50" value="50" />
            <Picker.Item label="51" value="51" />
            <Picker.Item label="52" value="52" />
            <Picker.Item label="53" value="53" />
            <Picker.Item label="54" value="54" />
            <Picker.Item label="55" value="55" />
            <Picker.Item label="56" value="56" />
            <Picker.Item label="57" value="57" />
            <Picker.Item label="58" value="58" />
            <Picker.Item label="59" value="59" />
          </Picker>
          <Text>sec /</Text>
          {/* unit */}
          <Picker
            selectedValue={this.state.paceUnit}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ paceUnit: itemValue })
            }>
            <Picker.Item label="km" value="km" />
            <Picker.Item label="mile" value="mile" />
          </Picker>
        </View>
        <View style={styles.flexRow}>
          <Button onPress={this.calcPace} title="Calculate pace"
            accessibilityLabel="Calculate pace" color="black" />
        </View>

        {/* distance */}
        <View style={[styles.flexRow, { borderTopColor: 'lightgrey', borderTopWidth: 0.3 }]}>
          <Text style={styles.label}>Distance</Text>
          {/* value */}
          <Picker
            selectedValue={this.state.distanceValue}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ distanceValue: itemValue })
            }>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="13" value="13" />
            <Picker.Item label="14" value="14" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="16" value="16" />
            <Picker.Item label="17" value="17" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="19" value="19" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="21" value="21" />
            <Picker.Item label="Half Marathon" value="hm" />
            <Picker.Item label="22" value="22" />
            <Picker.Item label="23" value="23" />
            <Picker.Item label="24" value="24" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="26" value="26" />
            <Picker.Item label="27" value="27" />
            <Picker.Item label="28" value="28" />
            <Picker.Item label="29" value="29" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="31" value="31" />
            <Picker.Item label="32" value="32" />
            <Picker.Item label="33" value="33" />
            <Picker.Item label="34" value="34" />
            <Picker.Item label="35" value="35" />
            <Picker.Item label="36" value="36" />
            <Picker.Item label="37" value="37" />
            <Picker.Item label="38" value="38" />
            <Picker.Item label="39" value="39" />
            <Picker.Item label="40" value="40" />
            <Picker.Item label="41" value="41" />
            <Picker.Item label="42" value="42" />
            <Picker.Item label="Marathon" value="marathon" />
            <Picker.Item label="43" value="43" />
            <Picker.Item label="44" value="44" />
            <Picker.Item label="45" value="45" />
            <Picker.Item label="46" value="46" />
            <Picker.Item label="47" value="47" />
            <Picker.Item label="48" value="48" />
            <Picker.Item label="49" value="49" />
            <Picker.Item label="50" value="50" />
          </Picker>
          {/* unit */}
          <Picker
            selectedValue={this.state.distanceUnit}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ distanceUnit: itemValue })
            }>
            <Picker.Item label="km" value="km" />
            <Picker.Item label="mile" value="mile" />
          </Picker>
        </View>
        <View style={styles.flexRow}>
          <Button onPress={this.calcDistance} title="Calculate distance"
            accessibilityLabel="Calculate distance" color="black" />
        </View>

        {/* finish time */}
        <View style={[styles.flexRow, { borderTopColor: 'lightgrey', borderTopWidth: 0.3 }]}>
          <Text style={styles.label}>Time</Text>
          {/* hours */}
          <Picker
            selectedValue={this.state.timeHrs}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ timeHrs: itemValue })
            }>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
          </Picker>
          <Text>hrs</Text>
          {/* min */}
          <Picker
            selectedValue={this.state.timeMin}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ timeMin: itemValue })
            }>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="13" value="13" />
            <Picker.Item label="14" value="14" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="16" value="16" />
            <Picker.Item label="17" value="17" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="19" value="19" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="21" value="21" />
            <Picker.Item label="22" value="22" />
            <Picker.Item label="23" value="23" />
            <Picker.Item label="24" value="24" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="26" value="26" />
            <Picker.Item label="27" value="27" />
            <Picker.Item label="28" value="28" />
            <Picker.Item label="29" value="29" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="31" value="31" />
            <Picker.Item label="32" value="32" />
            <Picker.Item label="33" value="33" />
            <Picker.Item label="34" value="34" />
            <Picker.Item label="35" value="35" />
            <Picker.Item label="36" value="36" />
            <Picker.Item label="37" value="37" />
            <Picker.Item label="38" value="38" />
            <Picker.Item label="39" value="39" />
            <Picker.Item label="40" value="40" />
            <Picker.Item label="41" value="41" />
            <Picker.Item label="42" value="42" />
            <Picker.Item label="43" value="43" />
            <Picker.Item label="44" value="44" />
            <Picker.Item label="45" value="45" />
            <Picker.Item label="46" value="46" />
            <Picker.Item label="47" value="47" />
            <Picker.Item label="48" value="48" />
            <Picker.Item label="49" value="49" />
            <Picker.Item label="50" value="50" />
            <Picker.Item label="51" value="51" />
            <Picker.Item label="52" value="52" />
            <Picker.Item label="53" value="53" />
            <Picker.Item label="54" value="54" />
            <Picker.Item label="55" value="55" />
            <Picker.Item label="56" value="56" />
            <Picker.Item label="57" value="57" />
            <Picker.Item label="58" value="58" />
            <Picker.Item label="59" value="59" />
          </Picker>
          <Text>min</Text>
          {/* sec */}
          <Picker
            selectedValue={this.state.timeSec}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ timeSec: itemValue })
            }>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="13" value="13" />
            <Picker.Item label="14" value="14" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="16" value="16" />
            <Picker.Item label="17" value="17" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="19" value="19" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="21" value="21" />
            <Picker.Item label="22" value="22" />
            <Picker.Item label="23" value="23" />
            <Picker.Item label="24" value="24" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="26" value="26" />
            <Picker.Item label="27" value="27" />
            <Picker.Item label="28" value="28" />
            <Picker.Item label="29" value="29" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="31" value="31" />
            <Picker.Item label="32" value="32" />
            <Picker.Item label="33" value="33" />
            <Picker.Item label="34" value="34" />
            <Picker.Item label="35" value="35" />
            <Picker.Item label="36" value="36" />
            <Picker.Item label="37" value="37" />
            <Picker.Item label="38" value="38" />
            <Picker.Item label="39" value="39" />
            <Picker.Item label="40" value="40" />
            <Picker.Item label="41" value="41" />
            <Picker.Item label="42" value="42" />
            <Picker.Item label="43" value="43" />
            <Picker.Item label="44" value="44" />
            <Picker.Item label="45" value="45" />
            <Picker.Item label="46" value="46" />
            <Picker.Item label="47" value="47" />
            <Picker.Item label="48" value="48" />
            <Picker.Item label="49" value="49" />
            <Picker.Item label="50" value="50" />
            <Picker.Item label="51" value="51" />
            <Picker.Item label="52" value="52" />
            <Picker.Item label="53" value="53" />
            <Picker.Item label="54" value="54" />
            <Picker.Item label="55" value="55" />
            <Picker.Item label="56" value="56" />
            <Picker.Item label="57" value="57" />
            <Picker.Item label="58" value="58" />
            <Picker.Item label="59" value="59" />
          </Picker>
          <Text>sec</Text>
        </View>
        <View style={styles.flexRow}>
          <Button onPress={this.calcTime} title="Calculate Time"
            accessibilityLabel="Calculate Time" color="black" />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-around'
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  picker: {
    backgroundColor: '#fafafa',
    width: 60,
    height: 50,
    paddingLeft: 5
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    Calculator: RunScreen,
    Help: HelpScreen
  },
  {
    initialRouteName: 'Calculator',
    tabBarOptions: {
      labelStyle: {
        fontSize: 15
      },
      activeTintColor: 'black',
      activeBackgroundColor: 'white',
      inactiveTintColor: 'white',
      inactiveBackgroundColor: 'black',
      style: { paddingBottom: 5 }
    }
  }
);

export default createAppContainer(TabNavigator);