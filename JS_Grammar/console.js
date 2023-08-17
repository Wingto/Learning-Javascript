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
  
  const getDeviceInfoByID = (data, deviceID) => {
    const deviceInfo = data.find(device => device[deviceID]);
    return deviceInfo ? deviceInfo[deviceID] : null;
  };
  //data.find()方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
  //device=> device[deviceID] 为测试函数
  //data.find(device => device[deviceID]) 为测试函数的第一个元素的值

    //deviceInfo ? deviceInfo[deviceID] : null 如果deviceInfo存在，
    //返回deviceInfo[deviceID]，否则返回null
  
const getDeviceID = (data, deviceID) => {
    const deviceInfo = data.find(device => device[deviceID]);
    return deviceInfo ? Object.keys(deviceInfo)[0] : null;
  };


  const deviceID = "projector1";
  const keyValue = getDeviceInfoByID(devicesData, deviceID);
  const foundDeviceID = getDeviceID(devicesData, deviceID);

    console.log("设备ID:", foundDeviceID);
  if (keyValue) {
    console.log("键值:", keyValue.label);
  } else {
    console.log("未找到设备:", deviceID);
  }


  const getAllDeviceIDs = (data) => {
    const deviceIDs = [];
    
    data.forEach(deviceInfo => {
      const deviceID = Object.keys(deviceInfo)[0];
      deviceIDs.push(deviceID);
    });
  
    return deviceIDs;
  };
  
  const allDeviceIDs = getAllDeviceIDs(devicesData);
  
  console.log("所有设备ID:", allDeviceIDs);