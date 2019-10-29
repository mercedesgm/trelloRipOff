import React from 'react';
import './App.css';
import RectangleThing from './RectangleThing'
import {connect} from 'react-redux'
import AddCard from './AddCard'

function App(props) {
  return (
    <div className="App">
      <header>
        <h1>It's a fucking app</h1>
      </header>
      <main>
        <RectangleThing title={'To Do'} tasks={props.toDo} name={'toDo'} prev={''} next={'doing'}/>
        <RectangleThing title={'Doing'} tasks={props.doing} name={'doing'} prev={'toDo'} next={'done'}/>
        <RectangleThing title={'Done'} tasks={props.done} name={'done'} prev={'doing'} next={''}/>
      </main>
      <AddCard />
    </div>
  );
}

const mapStateToProps = (state) => ({
  toDo: state.toDo,
  doing: state.doing,
  done: state.done
})

export default connect(mapStateToProps)(App);
