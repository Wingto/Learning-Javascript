const devicesData = [
    {
      "projector1": {
        "label": "projector",
        "color": "1",
        "state": true
      }
    },
    {
      "projector2": {
        "label": "projector",
        "color": "1",
        "state": true
      }
    },
    {
      "PC": {
        "label": "pc",
        "color": "1",
        "state": true
      }
    }
  ];

  console.log("-----------------------------------------------------------")
  const data0 = devicesData.map((item,index)=>
    Object.keys(item)[0]
    //[ 'projector1', 'projector2', 'PC' ] 
  )
  console.log("获取该列表，并遍历它的键值对（item）,然后提取该对象的键",data0)

  console.log("-----------------------------------------------------------")

  const data1 = devicesData.map((item,index)=>
    item[Object.keys(item)[0]]
    //[
    //  { label: 'projector', color: '1', state: true },
    //  { label: 'projector', color: '1', state: true },
    //  { label: 'pc', color: '1', state: true }        
    //]
  )
  console.log("item[KEY]提取这个列表对应的键名",data1)

  console.log("-----------------------------------------------------------")

  const data2 = devicesData.map((item,index)=>index
  //[ 0, 1, 2 ]
)
console.log("获取index数值",data2)

console.log("-----------------------------------------------------------")

const data3 = devicesData.map((item,index)=>item[Object.keys(item)[0]].color
// [ '1', '1', '1' ]
)
console.log("获取item[KEY]内的内容",data3)

console.log("-----------------------------------------------------------")

