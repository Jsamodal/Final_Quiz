import React from 'react';

const NewAuctionForm = (props) => {
  const { onSubmit } = props;
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = {
      title: formData.get('title'),
      body: formData.get('body'),
      amount: formData.get('amount')
    };
    console.log(params)
    onSubmit(params);
    event.currentTarget.reset();  
  }

  return(
    <form className='question-form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label>
        <br />
        <input name='title' id='title' />
      </div>
      <div>
        <label htmlFor='body'>Body</label>
        <br />
        <textarea name='body' is='body' cols='60' rows='5'/>
      </div>
      <div>
      <label htmlFor='amount'>Amount</label>
        <br />
        <input name='amount' id='amount' />
      </div>
      <div>
        <input type='submit' value='Submit'/>
      </div>
    </form>
  );
};

export default NewAuctionForm;