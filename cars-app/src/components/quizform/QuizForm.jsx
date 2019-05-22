import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import service from '../../api/service';

import './quizform.css'


class QuizForm extends Component {
  constructor(props){
    super(props);
    this.state = { 
      // affinity: 0,
      user: this.props.loggedInUser._id,
      q1: '',
      q2: false,
      q3: '',
      q4: 'Work',
      q5: false,
      q6: false,
      q7: false,
      q8: false,
      q9: false, 
      redirect: false,
    }
  }
  
  handleChange = e => {  
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSwitch = e => {  
    const { name, checked } = e.target;
    this.setState({ [name]: checked });
  }

  handleSelect = e => {  
    this.setState({
      q4: e.target.value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    service.saveNewQuiz(this.state)
    .then(res => {
      console.log(res)
        service.editUser(this.props.loggedInUser._id, res._id)
          .then(() => {
            this.setState({
              redirect: !this.state.redirect,
            })
          })
        // here you would redirect to some other page 
    })
    .catch(err => {
        console.log("Error while adding the thing: ", err);
    });
  }  

  render() {
    console.log(this.props)
    if(this.state.redirect) {
      return(
        <Redirect to={`/bestcars/${this.props.loggedInUser._id}`} />
      )
    }
    return (
      <div>
        <h2 className="title-form">Simulation</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          {/* QUESTION 1  */}
          <div className="form-group container-form">
            <div className="question-form">
              <h5>How much do you have avaliable to purchase?</h5>
              <section> 
                <b>R$ 0</b> 
                <input id="range-slider-demo" type="number" name="q1" value={ this.state.q1 }
                  onChange={ e => this.handleChange(e)}/>
                <b>R$ 200.000</b>
              </section>
            </div>
          </div>
          {/* QUESTION 2 */}
          <section className="form-group container-form">
            <div className="question-form">
              <h5>Do you have preference for a new car?</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="q2" id="inlineRadio1" 
                  value={ this.state.q2 }
                  onChange={ e => this.handleSwitch(e)}/>
                <label class="form-check-label" for="inlineRadio1">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="q2" id="inlineRadio1" 
                  value={ this.state.q2 }
                  onChange={ e => this.handleSwitch(e)}/>
                <label class="form-check-label" for="inlineRadio1">No</label>
              </div>
            </div>
          </section>
          {/* QUESTION 3 */}
          <div className="form-group container-form">
            <div className="question-form">
              <h5>How much would you like pay for maintenance per month?</h5>
              <section> 
                <b>R$ 0</b> <input id="range-slider-demo" type="number" class="span2" name="q3" value={this.state.q3} onChange={ e => this.handleChange(e)}/> <b>R$ 5.000</b>
              </section>
            </div>
          </div>
          {/* QUESTION 4  */}
          <div className="form-group container-form">
            <div class="question-form">
              <h5>Wich purpose of the vehicle?</h5>
              <div class="form-check form-check-inline">
                {/* <input class="form-check-input" type="radio" name="q4" id="inlineRadio3" 
                  value={ this.state.q4 }
                  onChange={ e => this.handleSwitch(e)}/>
                <label class="form-check-label" for="inlineRadio3">Work</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="q4" id="inlineRadio3" 
                  value={ this.state.q4 }
                  onChange={ e => this.handleSwitch(e)}/>
                <label class="form-check-label" for="inlineRadio3">Entertainment</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="q4" id="inlineRadio3" 
                  value={ this.state.q4 }
                  onChange={ e => this.handleSwitch(e)}/>
                <label class="form-check-label" for="inlineRadio3">Security</label> */}
                <select onChange={(e) => this.handleSelect(e)}>
                  <option value="Work">Work</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Security">Security</option>
                </select>
              </div>
            </div>
          </div>
          {/* QUESTION 5  */}
          <section className="form-group container-form">
            <div className="question-form">
              <h5>Do you travel by car?</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="q5" id="inlineRadio6" 
                value={ this.state.q5 }
                onChange={ e => this.handleSwitch(e)}/>
                <label class="form-check-label" for="inlineRadio6">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="q5" id="inlineRadio6" 
                value={ this.state.q5 }
                onChange={ e => this.handleSwitch(e)}/>
                <label class="form-check-label" for="inlineRadio6">No</label>
              </div>
            </div>
          </section>
          {/* QUESTION 6  */}
          <section className="form-group container-form">
            <div className="question-form">
              <h5>Do you live near you work?</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="q6" id="inlineRadio8" 
                value={ this.state.q6 }
                onChange={ e => this.handleSwitch(e)}/>
                <label class="form-check-label" for="inlineRadio8">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="q6" id="inlineRadio8" 
                value={ this.state.q6 }
                onChange={ e => this.handleSwitch(e)}/>
                <label class="form-check-label" for="inlineRadio8">No</label>
              </div>
            </div>
          </section>
          {/* QUESTION 7  */}
          <section className="form-group container-form">
            <div className="question-form">
              <h5>Do you travel frequently?</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="q7" id="inlineRadio10" 
                value={ this.state.q7 }
                onChange={ e => this.handleSwitch(e)}/>
                <label class="form-check-label" for="inlineRadio10">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="q7" id="inlineRadio10" 
                value={ this.state.q7 }
                onChange={ e => this.handleSwitch(e)}/>
                <label class="form-check-label" for="inlineRadio10">No</label>
              </div>
            </div>
          </section>
          {/* QUESTION 8  */}
          <section className="form-group container-form">
            <div className="question-form">
              <h5>Do you drives in dirt roads?</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="q8" id="inlineRadio12" 
                value={ this.state.q8 }
                onChange={ e => this.handleSwitch(e)}/>
                <label class="form-check-label" for="inlineRadio12">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="q8" id="inlineRadio12" 
                value={ this.state.q8 }
                onChange={ e => this.handleSwitch(e)}/>
                <label class="form-check-label" for="inlineRadio12">No</label>
              </div>
            </div>
          </section>
          {/* QUESTION 9  */}
          <section className="form-group container-form">
            <div className="question-form">
              <h5>How old are you?</h5>
              <div> 
                <b>18 years</b> <input id="range-slider-demo" type="number" name="q9" class="span2" value={this.state.q9} onChange={ e => this.handleChange(e)}/> <b>100 years</b>
              </div>
            </div>
          </section>
          <button type="submit" class="btn btn-secondary">Send</button>
        </form>
      </div>
    );
  }
}

export default QuizForm;