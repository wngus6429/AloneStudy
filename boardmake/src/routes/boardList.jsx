import CreateBoard from "../components/CreateBoard";

export default function boardList() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input id="q" aria-label="Search contacts" placeholder="Search" type="search" name="q"/>
              <div id="search-spinner" aria-hidden hidden={true} />
              <div className="sr-only" aria-live="polite"></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/board/1`}>Your Name</a>
              </li>
              <li>
                <a href={`/board/2`}>Your Friend</a>
              </li>
            </ul>
          </nav>
        </div>
        <CreateBoard/>
        <div id="detail"></div>
      </>
    );
  }