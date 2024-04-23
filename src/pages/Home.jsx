import React from 'react'

function Home() {
  return (
    <div>
      <Title title="All todos" counter={todos ? todos.length : 0} />
      {isPanding && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <ol>
        <TodoList />
      </ol>
    </div>
  )
}

export default Home
