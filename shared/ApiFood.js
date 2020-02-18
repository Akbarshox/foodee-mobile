import React, { useState, useEffect } from "react";
import InsideRestaurant from "../screen/InsideRestaurant";

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
   return <InsideRestaurant food={data} />
}
