// import React from 'react';
// import './demo.css';

// export const MyComponent = () => {
//   // setState  setData
//   // data: {
//   //   myName: 'John Doe'
//   // }
//   // MVVM
//   // react hooks setData
//   const [myName, setMyName] = React.useState('John Doe')

//   return (
//     // template 不是html
//     <div>
//       <h2 className="title">{myName}</h2>
//       <input
//         value={myName}
//         onChange={(e) => setMyName(e.target.value) }
//       />
//     </div>
//   ) 
// }

import React from 'react';

export const MyComponent = () => {
  const [username, setUsername] = React.useState("")
  const [list, setList] = React.useState([])
  // onLoad
  React.useEffect(() => {
    // setTimeout(() => {
    //   setUsername("John")
    // }, 1500)
    fetch(
      'http://neteasecloudmusicapi.zhaoboy.com/toplist/detail')
    .then(data => data.json())
    .then(data => {
      console.log(data);
      setList(data.list)
    })
  }, []) // ONLOAD
  return (
    <div>
      <h4>{username}</h4>
      <input value={username}
       onChange={e => setUsername(e.target.value)}/>
       {
         list.map(item => <li>{item.description}</li>)
       }
    </div>
  )
}