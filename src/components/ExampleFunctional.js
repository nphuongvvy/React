
// import { useState } from "react";

// export default function ExampleFunctional() {
//     const [count, setCount] = useState(0);
//     // useState trả về 2 p.tử array : 1.count 2. method để cập nhật lại setCount

//     const [user, setUser] = useState({
//         name: 'di',
//         age: 20
//     })

//     const [giohang, setGiohang] = useState([
//         "Apple",  
//         "Banana"
//     ])
//     console.log(giohang);

//     // hàm handleClick
//     const handleClick = () => {
//         setCount(count + 1);

//         // () => {} = arrow function

//         setUser({ ...user, name: 'Diii', });
//         //...user = copy toàn bộ object để giữ dữ liệu cũ khi update state

//         setGiohang(["Orange", ...giohang])
//     };

//     return (
//         <div>
//             <pre>Functional Component</pre>
//             <p>You clicked {count} times</p>
//             <button onClick={handleClick}>Click me</button>
//             <p>{JSON.stringify(user)}</p>
//             {/* <p>List {giohang.join(",")} </p> */}
//             <ul>
//                 {giohang.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>

//         </div>
//     );
// }