import React from 'react'
import { Link } from 'react-router-dom'

function Rules() {
  return (
   <>
           <body style={{ background: '#007bff', background: 'linear-gradient(to right, #0062E6, #33AEFF)',marginTop: '30px' }}>
           <div className="container w-50">
            <div className="row">
              <div className="col-lg-10 col-xl-9 mx-auto">
                <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                
                    <div className="card-body p-4 p-sm-5 text-center">

<h1 className='text-center mb-5'>Rules</h1>
<h6 className='text-bold'>* Otherwise that question will be skipped and point won't be considered.</h6>
<h6> * Each right answer scores 5 Points.</h6>
<h6>* Each multiple choice question has only one correct answer.</h6>
<h6>* To win the quiz you need to score more than 80%.</h6>
<hr />
<Link className='btn btn-info' to={'/quiz'}> <h6 className='text-light text-bold'>Start Quiz</h6></Link>
                        </div></div></div></div></div>
</body>
   
   </>
  )
}

export default Rules
