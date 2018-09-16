import React,{Component} from 'react';
import DisplayData from './DisplayData';

const removeLabel = <button>REMOVE</button>;
class CreateData extends Component{

  constructor(props){
    super(props);
    this.state = {
      data:[],
      message:''
    }
    this.removeData = this.removeData.bind(this)
  }
  formSubmit(event){
    event.preventDefault();
    const dataCount = this.state.data.length;
    const stateData = this.state.data;
    const newSno = dataCount+1;
    const newValue = this.inputData.value;
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    const dateCreated = day+'/'+month+"/"+year;
    const newTableRow = {
      sno:newSno,
      name:newValue,
      date:dateCreated,
      remove:removeLabel
    }
    this.setState({
      data:[...stateData,newTableRow]

    })

  }

   removeData(id){
     
     const dataValues = this.state.data.filter(value=>value.sno!==id);

      this.setState({
        data:dataValues
      })

   }
   render(){

     return(
      <div>

        {this.state.data.length===0?<h2>Add Data to Table</h2>:''}
        <div>
        <form onSubmit={this.formSubmit.bind(this)}>
          <label>Enter Data</label><br/>
          <input type="text" ref={(data)=>{this.inputData=data}}/>
          <input type="submit" value="SUBMIT"/>
        </form>
        </div>
        <DisplayData information={this.state.data} removeData={(id)=>this.removeData(id)}/>

      </div>
     )
   }
}

export default CreateData;
