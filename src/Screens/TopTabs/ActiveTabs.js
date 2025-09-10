// import React from 'react'
// import { FlatList } from 'react-native'
// import { myOrdersData } from '../../Constants/DummyData'
// import PlaceOrderCard from '../../Components/PlaceOrderCard'

// const Activetabs = () => {
//     const renderItem = ({ item }) => (
//         <PlaceOrderCard
//             orderId={item.orderId}
//             shopName={item.shopName}
//             totalPrice={item.totalPrice}
//             totalProducts={item.totalProducts}
//             date={item.date}
//         />
//     )

//     return (
//         <FlatList
//             data={myOrdersData.filter(order => order.status === 'active')}
//             keyExtractor={(item) => item.id}
//             renderItem={renderItem}
//         />
//     )
// }

// export default Activetabs