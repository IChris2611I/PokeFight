import './full__styles.css'
import blastoise from './assets/blastoise.gif'
import Charizard from './assets/charizard.gif'


function App() {

  return (
    <>
      <main>        
        <div className="fight__scene">
          <div className="fight__scene__top">
            <div className="status__bar">
              <div className="pokemon__name">
                <h2>Pikachu</h2>
                <div className="secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 21v-2H9v-2h2v-2.1q-1.975-.35-3.238-1.888T6.5 9.45q0-2.275 1.613-3.862T12 4t3.888 1.588T17.5 9.45q0 2.025-1.263 3.563T13 14.9V17h2v2h-2v2zm1-8q1.45 0 2.475-1.025T15.5 9.5t-1.025-2.475T12 6T9.525 7.025T8.5 9.5t1.025 2.475T12 13"/></svg>
                  <p>Lv.17</p>
                </div>                
              </div>
              <div className="hp__bar__container">
                <div className="hp__bar">
                  <span className='first__span'>HP</span>
                  <div className="hp__innerBar"><span>100%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pokemon__image1">
              <img src={blastoise} alt="Pokemon"/>
            </div>
          </div>

          <div className="fight__scene__bot">
            <div className="status__bar position__bot">
            <div className="pokemon__name2">
                <h2>Pikachu</h2>
                <div className="secondary2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v6h-2V7.425l-3.975 3.95q.475.7.725 1.488T15 14.5q0 2.3-1.6 3.9T9.5 20t-3.9-1.6T4 14.5t1.6-3.9T9.5 9q.825 0 1.625.237t1.475.738L16.575 6H14V4zM9.5 11q-1.45 0-2.475 1.025T6 14.5t1.025 2.475T9.5 18t2.475-1.025T13 14.5t-1.025-2.475T9.5 11"/></svg>                  <p>Lv.17</p>
                </div>                
              </div>
              <div className="hp__bar__container2">
                <div className="hp__bar2">
                  <span className='first__span'>HP</span>
                  <div className="hp__innerBar"><span>100%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pokemon__image2">
              <img src={Charizard} alt="Charizard"/>
            </div>
          </div>
        </div>

        <div className="controls">
          <div className="show__text">
              <p>Show Text Combat,Show Text Combat,Show Text Combat,Show Text Combat</p>
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
