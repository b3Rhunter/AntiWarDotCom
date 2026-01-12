import Logo from './assets/antiwar_logo.png'

function App() {

  const toggleMenu = () => {
    const x = document.getElementById("links");
      if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex"
        x.style.justifyContent = "space evenly"
      }
  }

  return (
    <>
      <header>
      <img src={Logo} alt="AntiWar.com" className='logo'/>
        <div onClick={toggleMenu}>
          <i className="fa fa-bars menu"></i>
        </div>
      </header>

      <nav>
        <a>Blog</a>
        <a>U.S. Casualties</a>
        <a>Iraqi Casualties</a>
        <a>Contact</a>
        <a>Donate</a>
      </nav>

      <main>
        <section id="links" className="sidebar">
        <a>Twitter</a>
        <a>AntiWar Radio</a>
        <a>Who We Are</a>
        <a>Search</a>
        <a>Regional News</a>
        <a>Latest Newsr</a>
        <a>Viewpoints</a>
        <a>Photos of the Fallen</a>
        <a>Free Newsletter</a>
        <a>Shop</a>
        </section>


        <article className="blog">
          <h3>News</h3>
          <hr/>
          <div className="articles">
          <a>US Military: Need More Time To Prepare Iran War</a>
          <a>Iran: Will Strike Israel & US Bases in Response to Attack on Tehran</a>
          <a>US Seizes Fifth Oil Tanker Linked to Venezuela</a>
          <a>Trump Declares Nat'l Emergency To Protect Stolen Venezuela Funds</a>
          <a>Israel Plans To Resume Gaza Onslaught in March</a>
          <a>Fourth Palestinian Baby Freezes to Death in Gaza Since November</a>
          <a>Off-Duty Israeli Soldier Kills Palestinian Citizen Over Road Dispute</a>
          <a>US Military: Need More Time To Prepare Iran War</a>
          <a>Iran: Will Strike Israel & US Bases in Response to Attack on Tehran</a>
          <a>US Seizes Fifth Oil Tanker Linked to Venezuela</a>
          <a>Trump Declares Nat'l Emergency To Protect Stolen Venezuela Funds</a>
          <a>Israel Plans To Resume Gaza Onslaught in March</a>
          <a>Fourth Palestinian Baby Freezes to Death in Gaza Since November</a>
          <a>Off-Duty Israeli Soldier Kills Palestinian Citizen Over Road Dispute</a>
          </div>
        </article>


        <section className="ads">
          <iframe width="320" height="150" src="https://www.youtube.com/embed/hT6D-bwW8GM" title="IDF Kills 15 in Gaza in Major Escalation, Senate Advances Venezuela War Powers Bill, and More" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <img src="https://dyn3qbr4ue2vr.cloudfront.net/2025/12/SHA-link-button.jpg" alt="The Scott Horton Academy of Foreign Policy and Freedom"></img>
          <div className="columnists">
          <h4>Columnists</h4>
          <p>Andrew P. Napolitano</p>
          <p>David Stockman</p>
          <p>Ted Snider</p>
          <p>Ron Paul</p>
          <p>Ramzy Baroud</p>
          </div>

        </section>
      </main>

      <footer>
        <p>
          Reproduction of material from any original Antiwar.com pages
          without written permission is strictly prohibited.
          Copyright 2026 Antiwar.com
        </p>
      </footer>
    </>
  )
}

export default App
