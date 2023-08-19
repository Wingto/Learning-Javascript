//获取一个列表内的其中的键值对

// const args = [{},{}]
// const FUNC = (args) => Object.keys(args)[0] === IDNAME
// cons func.find( FUNC );


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



const targe = "PC";
const Function = (Device)=>Object.keys(Device)[0] === targe;
const findIt = devicesData.find(Function);
console.log(findIt);

console.log("-----------------------------------------");
const factor = findIt[targe].state;
console.log(factor);