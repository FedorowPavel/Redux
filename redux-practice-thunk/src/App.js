import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReduser";
import {fetchCustomers} from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    console.log(name);
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }


  return (
    <div className="App">
      <div>{cash}</div>
      <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
      <button onClick={() => getCash(Number(prompt()))}>Remove cash</button>
      <button onClick={() => addCustomer(prompt())}>Add customer</button>
      <button onClick={() => dispatch(fetchCustomers())}>Fetch customers</button>
      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div key={customer.id} onClick={() => removeCustomer(customer)}>
              {customer.name}
            </div>
          )}
        </div>
        :
        <div>
          No customers
        </div>
      }
    </div>
  );
}

export default App;
