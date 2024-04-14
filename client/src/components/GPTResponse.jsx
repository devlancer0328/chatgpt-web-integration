import React from 'react'

const GPTResponse = ({ response }) => {
    const res = response.data;

  return (
    <div className='response'>
        <h2 className="answer-title">Answer:</h2>
      {res}
    </div>
  )
}

export default GPTResponse
