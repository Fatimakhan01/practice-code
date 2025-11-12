import React from 'react';
import UsestateExample from './components/UsestateExample';
import UsestateExample2 from './components/UsestateExample2';
import ShowHidePassword from './components/ShowHidePassword';
import UseEffectExample from './components/UseEffectExample';
import UseEffectDependencyExample from './components/UseEffectDependencyExample';
import UseEffectCleanupExample from './components/UseEffectCleanupExample';
import UseContextExample from './components/UseContextExample';
import UseContextSimpleExample from './components/UseContextSimpleExample';
import UseReducerExample from './components/UseReducerExample';
import UseCallbackExample from './components/UsecallbackExample';
import UseMemoExample from './components/UseMemoExample';
import UseRefExample from './components/UseRefExample';


const page = () => {
  return (
    <div>
      <UsestateExample/>
      <UsestateExample2/>
      <ShowHidePassword/>
      <UseEffectExample/>
      <UseEffectDependencyExample/>
      <UseEffectCleanupExample/>
      <UseContextExample/>
      <UseContextSimpleExample/>
      <UseReducerExample/>
     <UseCallbackExample/>
     <UseMemoExample/>
     <UseRefExample/>
    </div>
  )
}

export default page
