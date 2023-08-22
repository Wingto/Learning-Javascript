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


const updatedDevicesData = devicesData.map(device =>{
    const deviceName= Object.keys(device)[0]; //[ 'projector1', 'projector2', 'PC' ] 
    // devicesData.map(device) 返回的是每个对象，如{
    //  "PC": {
    //    "label": "pc",
    //    "color": "1",
    //    "state": true
    //  }
    //}
    // Object.keys(device) 返回的是每个对象的键名，如["PC"]
    // Object.keys(device)[0] 返回的是每个对象的第一个键名，如"PC"

    device[deviceName].state = false
    return device
}
    );
console.log(updatedDevicesData)