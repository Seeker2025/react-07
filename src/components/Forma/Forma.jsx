import React, { Component } from "react";

export class Forma extends Component{
    state = {
        name: '',
        tag: '',
        experience: 'junior',
        licence: false,
    };

    handleChange = e =>{
        const { name, value  } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state);
    };

    handleLicenceChange = e => {
        console.log(e.currentTarget.checked);
        this.setState({licence: e.currentTarget.checked})
    };

    render(){
        return(

    <form onSubmit ={this.handleSubmit}>
            <label>
                Имя
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
            </label>

            <label>
                Прозвище
                <input
                    type="text"
                    name="tag"
                    value={this.state.tag}
                    onChange={this.handleChange}
                />
            </label>

            <p>Ваш уровень</p>
            
                <label>
                    junior
                    <input
                     type="radio"
                     name="experience"
                     value="junior"
                     onChange={this.handleChange}
                     checked={this.state.experience === 'junior'}
                     />
                </label>

                <label>
                    middle
                    <input
                     type="radio"
                     name="experience"
                     value="middle"
                     onChange={this.handleChange}
                     checked={this.state.experience === 'middle'}
                    />

                </label>

                <label>
                    senior
                    <input
                     type="radio"
                     name="experience"
                     value="senior"
                     onChange={this.handleChange}
                     checked={this.state.experience === 'senior'}
                     />
                </label>

                <label>
                    <input
                      type ="checkbox"
                      name="licence"
                      checked={this.state.licence}
                      onChange={this.handleLicenceChange}
                      />
                      Согласен с условием
                </label>    

            <button type="submit" disabled={!this.state.licence}>Button</button>
    </form>

        );
    }
}