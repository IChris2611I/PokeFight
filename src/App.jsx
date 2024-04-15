import './full__styles.css'

function App() {

  return (
    <>
      <main>        
        <div className="fight__scene">
          <div className="fight__scene__top">
            <div className="status__Bar">
              <div className="pokemon__name">
                <h1>Pikachu</h1>
              </div>
            </div>
            <div className="pokemon__image">
              <img src="#" alt="Pokemon"/>
            </div>
          </div>

          <div className="fight__scene__bot">
          <div className="status__Bar">
              <div className="pokemon__name">
                <h1>Pikachu</h1>
              </div>
            </div>
            <div className="pokemon__image">
              <img src="#" alt="Pokemon"/>
            </div>
          </div>
        </div>

        <div className="controls">
          <div className="show__text">
              <p>Show Text Combat</p>
          </div>
          <div className="button__block">
            <button><p>Attack 1</p></button>
            <button><p>Attack 2</p></button>
            <button><p>Attack 3</p></button>
            <button><p>Pokemon</p></button>
          </div>
        </div>

      </main>
    </>
  )
}

export default App
