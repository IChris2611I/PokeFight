import './full__styles.css'
import Button from './components/Button'
import { pokemons } from './data__pokemon/pokemon' 
import { useEffect, useState } from 'react'


function App() {
  const [currentPokemon, setCurrentPokemon] = useState(pokemons[3]);
  const [opponentPokemon, setOpponentPokemon] = useState(pokemons[0]);

  const [userDealAttack, setUserDealAttack] = useState(false);
  const [userTookAttack, setUserTookAttack] = useState(false);

  const [oppDealAttack, setOppDealAttack] = useState(false);
  const [oppTookAttack, setOppTookAttack] = useState(false);

  const [currentHp, setCurrentHp] = useState(250);
  const [opponentHp, setOponnentHp] = useState(250);

  const [showText, setShowText] = useState("Début du combat !");

  function userAttack(e) {
    const currentAttack = e.currentTarget.innerText;
    const attackInfos = currentPokemon.attacks?.filter(attack => attack.name === currentAttack)[0];   
    setShowText(attackInfos.getText());
    const oppLife = opponentHp - attackInfos.damage >= 0 ? opponentHp - attackInfos.damage : 0 

    setTimeout(() => {
      setOponnentHp(oppLife);
    }, 2000)

    opponentAttack();
    setUserDealAttack(true);   
    setOppTookAttack(true);
    
    setTimeout(() => {
      setOppTookAttack(false);
      setUserDealAttack(false);
    }, 2000);
  }  

  function opponentAttack(e) {    
    setTimeout(() => {
      const attackInfos = opponentPokemon.attacks[0];
      setShowText(attackInfos.getText());
      setOppDealAttack(true);
    }, 3000)

    setTimeout(() => {
      setUserTookAttack(true);
      const userLife = currentHp - 80 >= 0 ? currentHp - 80 : 0 
      setCurrentHp(userLife);

      setTimeout(() => {
        setOppDealAttack(false);
        setUserTookAttack(false);
      }, 2000);
      
    }, 4000);

  }

  
  useEffect(() => {
    if (currentHp === 0) {
      setTimeout(() => {
        alert("You loose the fight! Try again !")
        window.location.reload()
      },1000);

    } else if (opponentHp === 0) {
      setTimeout(() => {
        alert("You won the fight! Play again !")
        window.location.reload()
      }, 1000)
          }    
  }, [currentHp,opponentHp])
  

  return (
    <>
      <main>        
        <div className="fight__scene">
          <div className="fight__scene__top">
            <div className="status__bar">
              <div className="pokemon__name">
                <h2>{opponentPokemon.name}</h2>
                <div className="secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 21v-2H9v-2h2v-2.1q-1.975-.35-3.238-1.888T6.5 9.45q0-2.275 1.613-3.862T12 4t3.888 1.588T17.5 9.45q0 2.025-1.263 3.563T13 14.9V17h2v2h-2v2zm1-8q1.45 0 2.475-1.025T15.5 9.5t-1.025-2.475T12 6T9.525 7.025T8.5 9.5t1.025 2.475T12 13"/></svg>
                  <p>{opponentPokemon.level}</p>
                </div>                
              </div>
              <div className="hp__bar__container">
                  <span className='first__span'>HP</span>
                <div className="hp__bar">
                  <div className="hp__innerBar" style={{ width : `${(opponentHp / 250) * 100}%`}}><span>{opponentHp}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pokemon__image1">
              <img className={oppDealAttack ? 'attack__anim' : oppTookAttack ? 'took__attack' : '' } src={opponentPokemon.imgSrc} alt="Pokemon"/>
            </div>
          </div>

          <div className="fight__scene__bot">
            <div className="status__bar position__bot">
            <div className="pokemon__name2">
                <h2>{currentPokemon.name}</h2>
                <div className="secondary2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v6h-2V7.425l-3.975 3.95q.475.7.725 1.488T15 14.5q0 2.3-1.6 3.9T9.5 20t-3.9-1.6T4 14.5t1.6-3.9T9.5 9q.825 0 1.625.237t1.475.738L16.575 6H14V4zM9.5 11q-1.45 0-2.475 1.025T6 14.5t1.025 2.475T9.5 18t2.475-1.025T13 14.5t-1.025-2.475T9.5 11"/></svg>         
                <p>{currentPokemon.level}</p>
                </div>                
              </div>
              <div className="hp__bar__container2">
                  <span className='first__span'>HP</span>
                <div className="hp__bar2">
                  <span>{currentHp}</span>
                  <div className="hp__innerBar" style={{ width : `${(currentHp / 250) * 100}%`}}>
                  </div>
                </div>
              </div>
            </div>
            <div className="pokemon__image2">
              <img className={userDealAttack ? 'attack__anim2' : userTookAttack ? 'took__attack2' :'' } src={currentPokemon.imgSrc} alt={currentPokemon.name}/>
            </div>
          </div>
        </div>

        <div className="controls">
          <div className="show__text">
              <p>{showText}</p>
          </div>
          <div className="button__block">
            {currentPokemon.attacks.map((attack, index) => <Button onAttack={userAttack} key={index}>{attack.name}</Button>)}
            <Button>Pokemon</Button>
          </div>
        </div>

      </main>
    </>
  )
}

export default App
