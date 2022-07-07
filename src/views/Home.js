import { useDispatch } from "react-redux";
import { logout} from "../components/stores/Log";

const Home =()=>{
    const dispatch=useDispatch();
    return(<div>
        Hoşgeldin XD
        <button onClick={()=>{
            dispatch(logout())
        }}>Çıkış Yap</button>
    </div>)
}
export default Home;