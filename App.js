import React,{Component} from 'react';
import './App.css';

//định nghĩa component
function One(){
  return(
    <div>
      <h5>khai bao function kiểu thông thường</h5>
    </div>
  )
}
var Two = function(){
  return(
    <div>
      <h5>Khai báo kiểu anonymuos function</h5>
    </div>
  );
}
var Three = () =>(
    <div>
      <h5>  Khái báo kiểu arrow function(es6)</h5>
    </div>
  );
  class Four extends Component {
    render() {
      return (
        <div>
          <h5>Khai báo kiểu class</h5>
        </div>
      );
    }
  }

  // props trong component
  function PropsFunction(props){
    return <h5>function, {props.name}</h5>

  }
  class PropsClass extends Component {
    render() {
      return (
        <div>
          <h5>class {this.props.name}</h5>

        </div>
      );
    }
  }

  // ví dụ sử dung hàm map
  const number = [1,2,3,4,5,6,7,8,9];
  const vd1 = number.map((x) => x*2+",");
  const vd2 = number.map((x) => (
    <li>number : {x}</li>
  ))
  
  

class App  extends Component {
  render() {
  return (
    <div>
      <div>
        <One/>
        <Two/>
        <Three/>
        <Four/>
      </div>
      <div>
        <PropsFunction name="props01" />
        <PropsFunction name="props02" />
        <PropsFunction name="props03" />
      </div>
      <div>
        <PropsClass name="props01"/>
        <PropsClass name="props02"/>
      </div>
      <div>
        {vd1}
        {vd2}
      </div>
    
      
    </div>
  );
  }
}

export default App;
