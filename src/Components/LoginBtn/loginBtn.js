import "./loginBtn.css"
import { Button} from 'antd';
const App = ({handleLogin}) => {
  return (
    <>
      <Button className="Login-Btn" type="primary" onClick={handleLogin}>
        Login With Google
      </Button>
    </>
  );
};
export default App;