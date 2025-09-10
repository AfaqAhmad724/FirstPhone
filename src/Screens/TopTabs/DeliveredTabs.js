// import React from 'react'
// import { FlatList } from 'react-native'
// import PlaceOrderCard from '../../Components/PlaceOrderCard'
// import { myOrdersData } from '../../Constants/DummyData'

// const DeliveredTabs = () => {
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
//             data={myOrdersData.filter(order => order.status === 'delivered')}
//             keyExtractor={(item) => item.id}
//             renderItem={renderItem}
//         />
//     )
// }

// export default DeliveredTabs