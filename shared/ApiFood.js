import React, { useState, useEffect } from "react";
import AnimatedNav from "../screen/AnimatedNav";

export default function ApiFood({navigation}) {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   async function fetchUrl() {
      const id = navigation.getParam('id');
      const response = await fetch(`https://api.foodee.uz/food?restaurantId=${id}`);
      const json = await response.json();
      setData(json);
      setLoading(false);
   }
   useEffect(() => {
      fetchUrl();
   }, []);
   return <AnimatedNav navigation={navigation} food={data} />
}
