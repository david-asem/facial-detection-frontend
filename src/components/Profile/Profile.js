import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: this.props.user.first_name,
      lastname: this.props.user.last_name,
      email: this.props.user.email,
      
    }
  }

  onProfileUpdate = (data) => {
    fetch(`http://localhost:3000/profile/${this.props.user.id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': window.sessionStorage.getItem('token')
      },
      body: JSON.stringify({
        formInput: data
      })
    }).then(resp => {
      if (resp.status === 200 || resp.status === 304) {
        this.props.toggleModal();
        this.props.loadUser({ ...this.props.user, ...data });
      }
    }).catch(console.log)
  }

  onFormChange = (event) => {
    switch(event.target.name) {
      case 'user-firstname':
        this.setState({firstname: event.target.value})
        break;
      case 'user-lastname':
        this.setState({lastname: event.target.value})
        break;
      
      case 'user-email':
        this.setState({email: event.target.value})
        break;
      default:
        return;
    }
  }

  render() {
    const { toggleModal, user } = this.props
    const { firstname, lastname, email } = this.state;
    return (
      <div className='profile-modal'>
        <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white'>
          <main className='pa4 black-80 w-80'>
            <img
              src='http://tachyons.io/img/logo.jpg'
              className='h3 w3 dib' alt='avatar'
            />
            <h1>{firstname}+{lastname}</h1>
            <h4>{`Images submitted: ${user.entries}`}</h4>
            <p>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</p>
            <hr />
            <label className='mt2 fw6' htmlFor='user-firstname'>First Name:</label>
            <input onChange={this.onFormChange} type='text' firstname='user-firstname' className='pa2 ba w-100' placeholder={firstname}></input>


            <label className='mt2 fw6' htmlFor='user-last'>Last Name:</label>
            <input onChange={this.onFormChange} type='text' lastname='user-lastname' className='pa2 ba w-100' placeholder={lastname}></input>

            <label className='mt2 fw6' htmlFor='user-email'>Email:</label>
            <input onChange={this.onFormChange} type='text' name='user-email' className='pa2 ba w-100' placeholder={email}></input>
           
            <div className='mt4' style={{ display: 'flex', justifyContent: 'space-evenly'}}>
              <button className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20'
                onClick={() => this.onProfileUpdate({firstname,lastname, email})}>
                Save
              </button>
              <button className='b pa2 grow pointer hover-white w-40 bg-light-red b--black-20'
                onClick={toggleModal}>
                Cancel
              </button>
            </div>

          </main>
          <div className='modal-close' onClick={toggleModal}>
            &times;
          </div>
        </article>
      </div>
    );
  }
}

export default Profile;