import React from 'react';
import logo from './logo.svg';
import './App.css';

let a: number | null = 10;

let name: string = "it-by";

let sex: "male" | "female";
sex = "male";

let isSamuray: boolean | null = true;

isSamuray = null;

let names: Array<string> = ["Zero", "First", "Second"];

alert(names[0].toUpperCase());
names.forEach(n => { alert(n.toUpperCase()) });

type AddressType = {
  city?: string | null,
  country: string | null
}


let InitalState = {
  name: null as string | null,
  age: null as number | null,
  isSamuray: null as boolean | null,
  addresses: [] as Array<AddressType>,
  counter: null as number | null
}

export type InitialStateType = typeof InitalState;

let state: InitialStateType = {
  name: "First Name",
  age: 11,
  isSamuray: false,
  addresses: [{country: "123", city: "ffff"}],
  counter: 4
}

let GET_TASKS = "APP/GetTasks";

type GetTasksActionType = {
  id: number,
  type: typeof GET_TASKS
  
}

let action: GetTasksActionType = {
  type: GET_TASKS,
  id: 12
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
