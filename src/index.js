import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {createStore} from 'redux';
// // the Provider will provide the store to all the components(Redux)
// //scoped to tit
// import {Provider} from 'react-redux';
// import {BrowserRouter} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import SimpleComponent from './classcomponents/simplecomponent';
// import Calculator from './classcomponents/calculator';
// import ParentDemoComponent from './classcomponents/parentdemo';
// import Students from './assign1/students';
// import UnControlledComponent from './classcomponents/uncontrolledcomponent';
import StudentComponent from './classcomponents/studentcomponent';
// import ValidationComponent from './classcomponents/studentcomponent/validationexcomponent';
// import StateHookComponent from './hooks/statehook';
// import OptionComponent from './hooks/optionhook';
// import StudentHookComponent from'./hooks/objecthooks';
import StudentHookComponent from './hooks/objecthooks';
// import {Companies, Stocks} from './models/constants';
// import StockComponent from './hoc/StockCompnent';
// import CompanyComponent from './hoc/CompanyComponent';
// import HoC from './hoc/HocComponent';
// // import ApplicationComponent from './routingdemo/ApplicationComponent';
// import ApplicationComponent from './routingdemo/assignment/ApplicationComponent';
// import ReduxComponent from './reduxapp/ReduxComponent';


//create a store using reducer
// import reducer (note that the exported combineReducer object can be directly instantiated in reducer)
// import reducer from './reduxapp/reducers/reducers';
// import DynamicLoadingComponent from './adv/codesplit/LoadDynamicComponent';
// import Sidebar from './adv/ErrorBoundry/Demo';

// let store = createStore(reducer);


// return the CompanyInfoComponent based on the companies data passed to the CompanyComponent
// const CompanyInfoComponent = HoC(CompanyComponent, Companies);
// const StockInfoComponent = HoC(StockComponent, Stocks);

// for Routing......
//ReactDOM.render(<BrowserRouter><ApplicationComponent/></BrowserRouter>, document.getElementById('root'));
//For Higher order component.....
//ReactDOM.render(<div> <CompanyInfoComponent></CompanyInfoComponent> <hr/> <StockInfoComponent></StockInfoComponent></div>, document.getElementById('root'));


//for Redux:
//Subscribe to the ReduxComponent using 'Provider' component and pass store to it
// All component  inside <Provider></Provider>
// will have access to dispatch() method to store to dispatch
//actions those will cause state in store to update
//ReactDOM.render(<Provider store={store}><ReduxComponent/></Provider>, document.getElementById('root'));




ReactDOM.render(<StudentHookComponent/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
