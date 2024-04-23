import React from "react";
import DatePicker from "react-datepicker";
// import Moment from 'react-moment';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    
  }
 

  handleChange=(date)=> {
    this.setState({
      startDate: date
    });
   
  }

  handelrashi=()=>{
    const one =['21-01','22-01','23-01',
    '24-01',
    '25-01',
    '26-01',
    '27-01',
    '28-01',
    '29-01',
    '30-01',
    '31-01',
    '1-02',
    '2-02',
    '3-02',
    '4-02',
    '5-02',
    '6-02',
    '7-02',
    '8-02',
    '9-02',
    '10-02',
    '11-02',
    '12-02',
    '13-02',
    '14-02',
    '15-02',
    '16-02',
    '17-02',
    '18-02',
    '19-02']
    const two =['20-02',
    '21-02',
    '22-02',
    '23-02',
    '24-02',
    '25-02',
    '26-02',
    '27-02',
    '28-02',
    '29-02',
    '1-03',
    '2-03',
    '3-03',
    '4-03',
    '5-03',
    '6-03',
    '7-03',
    '8-03',
    '9-03',
    '10-03',
    '11-03',
    '12-03',
    '13-03',
    '14-03',
    '15-03',
    '16-03',
    '17-03',
    '18-03',
    '19-03',
    '20-03']
    const three= ['21-03',
    '22-03',
    '23-03',
    '24-03',
    '25-03',
    '26-03',
    '27-03',
    '28-03',
    '29-03',
    '30-03',
    '31-03',
    '1-04',
    '2-04',
    '3-04',
    '4-04',
    '5-04',
    '6-04',
    '7-04',
    '8-04',
    '9-04',
    '10-04',
    '11-04',
    '12-04',
    '13-04',
    '14-04',
    '15-04',
    '16-04',
    '17-04',
    '18-04',
    '19-04',
    '20-04']
    const five=['21-04',
    '22-04',
    '23-04',
    '24-04',
    '25-04',
    '26-04',
    '27-04',
    '28-04',
    '29-04',
    '30-04',
    
    '1-05',
    '2-05',
    '3-05',
    '4-05',
    '5-05',
    '6-05',
    '7-05',
    '8-05',
    '9-05',
    '10-05',
    '11-05',
    '12-05',
    '13-05',
    '14-05',
    '15-05',
    '16-05',
    '17-05',
    '18-05',
    '19-05',
    '20-05',
    '21-05']
    const six=['22-05',
    '23-05',
    '24-05',
    '25-05',
    '26-05',
    '27-05',
    '28-05',
    '29-05',
    '30-05',
    '31-05',
    '1-06',
    '2-06',
    '3-06',
    '4-06',
    '5-06',
    '6-06',
    '7-06',
    '8-06',
    '9-06',
    '10-06',
    '11-06',
    '12-06',
    '13-06',
    '14-06',
    '15-06',
    '16-06',
    '17-06',
    '18-06',
    '19-06',
    '20-06',
    '21-06']
    const seven=['22-06',
    '23-06',
    '24-06',
    '25-06',
    '26-06',
    '27-06',
    '28-06',
    '29-06',
    '30-06',
    
    '1-07',
    '2-07',
    '3-07',
    '4-07',
    '5-07',
    '6-07',
    '7-07',
    '8-07',
    '9-07',
    '10-07',
    '11-07',
    '12-07',
    '13-07',
    '14-07',
    '15-07',
    '16-07',
    '17-07',
    '18-07',
    '19-07',
    '20-07',
    '21-07',
    '22-07']
    const eight=['23-07',
    '24-07',
    '25-07',
    '26-07',
    '27-07',
    '28-07',
    '29-07',
    '30-07',
    '31-07',
    '1-08',
    '2-08',
    '3-08',
    '4-08',
    '5-08',
    '6-08',
    '7-08',
    '8-08',
    '9-08',
    '10-08',
    '11-08',
    '12-08',
    '13-08',
    '14-08',
    '15-08',
    '16-08',
    '17-08',
    '18-08',
    '19-08',
    '20-08',
    '21-08']
   const nine=['22-08',
   '23-08',
   '24-08',
   '25-08',
   '26-08',
   '27-08',
   '28-08',
   '29-08',
   '30-08',
   '31-08',
   '1-09',
   '2-09',
   '3-09',
   '4-09',
   '5-09',
   '6-09',
   '7-09',
   '8-09',
   '9-09',
   '10-09',
   '11-09',
   '12-09',
   '13-09',
   '14-09',
   '15-09',
   '16-09',
   '17-09',
   '18-09',
   '19-09',
   '20-09',
   '21-09',
   '22-09',
   '23-09']
   const ten =['24-09',
   '25-09',
   '26-09',
   '27-09',
   '28-09',
   '29-09',
   '30-09',
   
   '1-10',
   '2-10',
   '3-10',
   '4-10',
   '5-10',
   '6-10',
   '7-10',
   '8-10',
   '9-10',
   '10-10',
   '11-10',
   '12-10',
   '13-10',
   '14-10',
   '15-10',
   '16-10',
   '17-10',
   '18-10',
   '19-10',
   '20-10',
   '21-10',
   '22-10',
   '23-10']
   const eleven= ['24-10',
   '25-10',
   '26-10',
   '27-10',
   '28-10',
   '29-10',
   '30-10',
   '31-10' ,
   '1-11',
   '2-11',
   '3-11',
   '4-11',
   '5-11',
   '6-11',
   '7-11',
   '8-11',
   '9-11',
   '10-11',
   '11-11',
   '12-11',
   '13-11',
   '14-11',
   '15-11',
   '16-11',
   '17-11',
   '18-11',
   '19-11',
   '20-11',
   '21-11',
   '22-11'] 
   const tweleve=['23-11',
   '24-11',
   '25-11',
   '26-11',
   '27-11',
   '28-11',
   '29-11',
   '30-11',
   
   '1-12',
   '2-12',
   '3-12',
   '4-12',
   '5-12',
   '6-12',
   '7-12',
   '8-12',
   '9-12',
   '10-12',
   '11-12',
   '12-12',
   '13-12',
   '14-12',
   '15-12',
   '16-12',
   '17-12',
   '18-12',
   '19-12',
   '20-12',
   '21-12',
   '22-12']
   const thirteen=['23-12',
   '24-12',
   '25-12',
   '26-12',
   '27-12',
   '28-12',
   '29-12',
   '30-12',
   '31-12','1-01',
   '2-01',
   '3-01',
   '4-01',
   '5-01',
   '6-01',
   '7-01',
   '8-01',
   '9-01',
   '10-01',
   '11-01',
   '12-01',
   '13-01',
   '14-01',
   '15-01',
   '16-01',
   '17-01',
   '18-01',
   '19-01',
   '20-01']
   
   const ll=moment(this.state.startDate).format('D-MM');
   
    if(one.includes(ll)){
      return "Aquarius (Kumbha Rashi)";
    }else if(two.includes(ll)){
      return "Pisces (Meena Rashi)";
    }else if(three.includes(ll)){
      return "Aries (Mesh Rashi)";
    }else if(five.includes(ll)){
      return "Taurus (Vrishabh Rashi)";
    }else if(six.includes(ll)){
      return "Gemini (Mithun Rashi)";
    }else if(seven.includes(ll)){
      return "Cancer (Karka Rashi)";
    }else if(eight.includes(ll)){
      return "Leo (Simha Rashi)";
    }else if(nine.includes(ll)){
      return "Virgo (Kanya Rashi)";
    }else if(ten.includes(ll)){
      return "Libra (Tula Rashi)"
    }else if(eleven.includes(ll)){
      return "Scorpio (Vrishchik Rashi)"
    }else if(tweleve.includes(ll)){
      return "Sagittarius (Dhanus Rashi)"
    }else if(thirteen.includes(ll)){
      return "Capricorn (Makar Rashi)";
    }

    
  }
  render() {
    
    return (
      <React.Fragment>
        <DatePicker
        selected={this.state.startDate}
        placeholderText="enter your dob"
        onChange={this.handleChange}
        dateFormat="MMMM d "
      />
         {this.handelrashi()}
      </React.Fragment>
      
    );
  }
}
export default App;