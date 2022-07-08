import { useDispatch } from "react-redux";
import { logout} from "../components/stores/Log";

const Home =({setIsLog})=>{
    const dispatch=useDispatch();
    return(<div>
        Hoşgeldin XD
        <button onClick={()=>{
            dispatch(logout())
            setIsLog("false")
        }}>Çıkış Yap</button>
    </div>)
}
export default Home;