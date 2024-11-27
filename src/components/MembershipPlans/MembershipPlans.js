// import React from 'react'
// import './MembershipPlans.css'
// import { plans } from '../../data'
// import Card from '../../UI/Card/Card';

// const MembershipPlans = () => {
//   return (
//     <section className='plans'>
//         <div className='container plans_container'>
//             {
//                 plans.map(({id, name, desc, price, features}) => {
//                     return <Card key={id} className="plan">
//                         <h3>{name}</h3>
//                         <small>{desc}</small>
//                         <h1>{`$${price}`}</h1><h2> /mo</h2>
//                         <h4>Features</h4>
//                         {
//                             features.map(({feature, available}, index) => {
//                                 return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
//                             })
//                         }
//                         <button onClick={} className='btn lg'>Choose Plan</button>
//                     </Card>
//                 })
//             }
//         </div>
//     </section>
//   )
// }

// export default MembershipPlans


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MembershipPlans.css';
import { plans } from '../../data';
import Card from '../../UI/Card/Card';

const MembershipPlans = () => {
  const navigate = useNavigate();

  const handleChoosePlan = (planId) => {
    navigate(`/payment/${planId}`);
  };

  return (
    <section className="plans">
      <div className="container plans_container">
        {plans.map(({ id, name, desc, price, features }) => (
          <Card key={id} className="plan">
            <h3>{name}</h3>
            <small>{desc}</small>
            <h1>{`$${price}`}</h1>
            <h2> /mo</h2>
            <h4>Features</h4>
            {features.map(({ feature, available }, index) => (
              <p key={index} className={!available ? 'disabled' : ''}>
                {feature}
              </p>
            ))}
            <button
              onClick={() => handleChoosePlan(id)}
              className="btn lg"
            >
              Choose Plan
            </button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MembershipPlans;
