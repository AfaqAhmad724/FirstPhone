// import React from 'react'
// import { FlatList } from 'react-native'
// import PlaceOrderCard from '../../Components/PlaceOrderCard'
// import { myOrdersData } from '../../Constants/DummyData'

// const CancelledTabs = () => {
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
//             data={myOrdersData.filter(order => order.status === 'cancelled')}
//             keyExtractor={(item) => item.id}
//             renderItem={renderItem}
//         />
//     )
// }

// export default CancelledTabs