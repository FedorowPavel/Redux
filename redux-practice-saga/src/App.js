import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AsyncDecrementCreator, AsyncIncrementCreator} from "./store/countReduser";
import {fetchUsers} from "./store/userReducer";

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.userReducer.users)

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => dispatch(AsyncIncrementCreator())}>INCREMENT+</button>
      <button onClick={() => dispatch(AsyncDecrementCreator())}>DECREMENT-</button>
      <button onClick={() => dispatch(fetchUsers())}>Fetch users</button>
        <div>
          {users.map(user =>
            <div>
              {user.name}
            </div>
          )}
        </div>
    </div>
  );
}

export default App;
