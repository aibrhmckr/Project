import "./Signup.css"

const Signup = () => {

  return (
    <div className="user_info">
      <form>
        <div>
          <b>Ad</b>
          <input  className="text-field"/>
        </div>
        <div >
          <b>Soyad</b>
          <input className="text-field" />
        </div>
        <div >
          <b>E-Posta</b>
          <input className="text-field"/>
        </div>

        <div >
          <b>Şifre</b>
          <input className="text-field"/>
        </div>
        <button className="signup_button" onClick={()=>{

        }}>Kaydol</button>

      </form>
    </div>
  );
};
export default Signup;
