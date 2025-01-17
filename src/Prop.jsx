import React from 'react'

const drinks = {
    tea: {
      part: 'leaf',
      caffeine: '15–70 mg/cup',
      age: '4,000+ years'
    },
    coffee: {
      part: 'bean',
      caffeine: '80–185 mg/cup',
      age: '1,000+ years'
    }
  };

function Prop({name}) {
  const info = drinks[name]
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{drinks[name].part}</dd>
        <dt>Caffeine content</dt>
        <dd>{info.caffeine}</dd>
        <dt>Age</dt>
        <dd>{info.age}</dd>
      </dl>
    </section>
   
  )
}

export default Prop
