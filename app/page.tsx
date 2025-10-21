import React from 'react';
import UsestateExample from './components/UsestateExample';
import UsestateExample2 from './components/UsestateExample2';
import ShowHidePassword from './components/ShowHidePassword';
import UseEffectExample from './components/UseEffectExample';
import UseEffectDependencyExample from './components/UseEffectDependencyExample';
import UseEffectCleanupExample from './components/UseEffectCleanupExample';


const page = () => {
  return (
    <div>
      <UsestateExample/>
      <UsestateExample2/>
      <ShowHidePassword/>
      <UseEffectExample/>
      <UseEffectDependencyExample/>
      <UseEffectCleanupExample/>
    </div>
  )
}

export default page
