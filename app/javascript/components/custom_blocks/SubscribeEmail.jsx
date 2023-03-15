import React from 'react';
import axios from 'axios';

export default class SubscribeEmail extends React.Component {
  state = {
    email: ''
  }

  handleChange = event => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className='w-full bg-gray rounded-[23px] p-8'>
        <form className='flex h-16 text-xl font-semibold' onSubmit={this.handleSubmit}>
          <label className='flex basis-3/4 items-center'>
            Получайте&nbsp;статьи&nbsp;на&nbsp;почту!
            <input
              className='h-full w-full rounded-full ml-8 px-6 border border-lightGray hover:shadow-lightGray transition duration-300'
              type="text"
              name="email"
              placeholder="Введите свой email"
              onChange={this.handleChange}
            />
          </label>
          <button className='bg-yellow rounded-full basis-1/4 ml-8' type="submit">Подписаться</button>
        </form>
      </div>
    )
  }
}