import { useEffect } from 'react'
function Test(props) {
  console.log(props);
  const node = (
    <h2>title</h2>
  )
  // setTimeout(() => {
  //   props.onMessage('子组件传给父组件')
  // }, 3000);
  // didMount
  useEffect(() => {
    setTimeout(() => {
      props.onMessage('子组件传给父组件')
    }, 3000);
  }, [])
  return (
    <>
    测试数据
    {node}
    </>
  )
}

export default Test