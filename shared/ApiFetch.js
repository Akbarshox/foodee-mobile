import React from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as dataActions from "../store/actions/data";
import Navigator from '../routes/Drawer';

class ApiFetch extends React.Component{
   componentDidMount(){
      const {setApi} = this.props;
      axios.get('https://api.foodee.uz/restaurants')
          .then(res =>{
             setApi(res.data)
          })
   }
   render(){
      return(
          <Navigator />
      )
   }
}
const mapStateToProps = ({ data }) => ({
   data: data.items
});
const mapDispatchToProps = dispatch => ({
   ...bindActionCreators(dataActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApiFetch);