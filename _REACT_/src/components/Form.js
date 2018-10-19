import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.formFields = this.props.formFields;
        this.state={};
        this.refInp = React.createRef();
    }
    componentWillMount(){
        for(let i = 0; this.props.formFields[i]; i++)
        {
            let key = this.props.formFields[i]['key'];
            this.setState({[key]:''})
        }
    }
    changeAction(val){
        this.setState({action: val});
    }
    changeInp(e, key){
        // let tempObj = {};
        // for(let k in this.state[key])
        //     {
        //         tempObj[k] = this.state[key][k];
        //     }
        //     tempObj[subKey] = e.target.value;
        // this.setState({
        //     [key]: tempObj
        // }); 
         
        this.setState({[key]: e.target.value})
    }
    takeAction(){
        
    }
    renderForm(){
        let self = this;
        return(
            this.formFields.map(
                function(el, indx){return self.renderEl(el, indx)}
            )
        )
    }
    renderEl(el, indx){
        return (<li key={`${el.key}${indx}`}><input ref={this.refInp} type={el.type} placeholder={el.key} value={this.state[el.key]} onChange={(e)=>{this.changeInp(e, el.key)}}/><div></div></li>)
    }
    componentDidMount(){
        console.log("RefInp: ",this.refInp);
        this.refInp.current.focus();
    }
    render() {
        return (
            <div className="signUp">
                <ul className="formContainer">
                    {this.renderForm()}
                    <li><input type="button" onClick={this.props.submitAction.bind(this.props.that, this.state)} value="Submit"/></li>
                    </ul>
            </div>
        );
  }
}

export default SignUp;
