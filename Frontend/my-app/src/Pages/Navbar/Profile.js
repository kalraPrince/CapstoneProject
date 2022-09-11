import * as React from "react";
import '../../Styles/Profile.css'

const ImgUpload =({
    onChange,
    src
  })=>
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload" >
        <img for="photo-upload" src={src} alt="src"/>
      </div>
      <input id="photo-upload" className="profile-input" type="file" onChange={onChange}/> 
    </label>
  
  
  const Name =({
    onChange,
    value
  })=>
    <div className="field">
      <label htmlFor="name">
        name:
      </label>
      <input 
        id="name" 
        className="profile-input"
        type="text" 
        onChange={onChange} 
        maxlength="25" 
        value={value} 
        placeholder="Alexa" 
        required/>
    </div>
  
    
  const Status =({
    onChange,
    value
  })=>
    <div className="field">
      <label htmlFor="status">
        Phone Number:
      </label>
      <input 
        id="status" 
        className="profile-input"
        type="text" 
        onChange={onChange} 
        maxLength="35" 
        value={value} 
        placeholder="Enter your Number" 
        required/>
    </div>
  
  const Dob =({
    onChange,
    value
  })=>
    <div className="field">
      <label htmlFor="dob">
        Date Of Birth:
      </label>
      <input 
        id="dob" 
        className="profile-input"
        type="text" 
        onChange={onChange} 
        maxLength="35" 
        value={value} 
        placeholder="DD/MM/YYYY" 
        required/>
    </div>


  
  
  const Profile =({
    onSubmit,
    src,
    name,
    status,
    dob,
  })=>
    <div className="card">
      <form onSubmit={onSubmit}>
        <h1>My Profile</h1>
        <label className="custom-file-upload fas">
          <div className="img-wrap" >
            <img for="photo-upload" className="profile-image" src={src} alt="src"/>
          </div>
        </label>
        <div className="name">{name}</div>
        <div className="status">{status}</div>
        <div className="dob">{dob}</div>
        <button type="submit" className="edit">Edit Profile </button>
      </form>
    </div>
       
        
  const Edit =({
    onSubmit,
    children,
  })=>
    <div className="card profile-card">
      <form onSubmit={onSubmit}>
        <h1>My Profile</h1>
          {children}
        <button type="submit" className="save">Save </button>
      </form>
    </div>
  
  class CardProfile extends React.Component {
    state = {
      file: '',
      imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
      name:'',
      status:'',
      dob:'',
      active: 'edit'
    }
  
    photoUpload = e =>{
      e.preventDefault();
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file);
    }
    editName = e =>{
      const name = e.target.value;
      this.setState({
        name,
      });
    }
    
    editStatus = e => {
      const status = e.target.value;
      this.setState({
        status,
      });
    }

    editDob = e => {
        const dob = e.target.value;
        this.setState({
          dob,
        });
      }
    
    handleSubmit= e =>{
      e.preventDefault();
      let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
      this.setState({
        active: activeP,
      })
    }
    
    render() {
      const {imagePreviewUrl, 
             name, 
             status, 
             dob,
             active} = this.state;
      return (
        <div className="profile-body">
          {(active === 'edit')?(
            <Edit onSubmit={this.handleSubmit}>
              <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
              <Name onChange={this.editName} value={name}/>
              <Status onChange={this.editStatus} value={status}/>
              <Dob onChange={this.editDob} value={dob}/>
            </Edit>
          ):(
            <Profile 
              onSubmit={this.handleSubmit} 
              src={imagePreviewUrl} 
              name={name} 
              status={status}
              dob={dob}/>)}
          
        </div>
      )
    }
  }
  
 
   export default CardProfile;
    
  