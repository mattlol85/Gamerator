import GoogleLogin from 'react-google-login';
import logo from '../img/logo.png'
import './styles/FrontPage.css';
import React,{ useState, setState} from 'react';
export default function StartPage(props){

  const [input,setInput] = useState("")

async function handleLogin(user){
  await fetch(`http://${process.env.REACT_APP_HOSTNAME}/user/${user}`,{method:'POST'})
  localStorage.setItem('loginState','true')
  localStorage.setItem('userId',user)
  props.SetLoginStatus('true')
  props.SetUser(user)
  //else{alert("")}
  setInput("")
}


return(
    <div className="startDiv">
    {/* <div className="Logo"> Welcome to GameRater</div> */}

    <img className="animate" src={logo} />
    <br />
    <br />
     {/* <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLEID}
    buttonText="Log in using Google"
    onSuccess={handleLogin}
    onFailure={handleFailure}
  /> */}

    <input type="text" onChange={(event)=>setInput(event.target.value)}value={input}></input><br></br><br></br>
    <button className='logoutBtn' onClick={()=>handleLogin(input)}>LOGIN</button>
    </div>

)
}