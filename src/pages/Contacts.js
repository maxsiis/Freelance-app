const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Tula, Russia</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / Max</h2>
            <p>
              <a href="tel:+79051234567">+7 (953) 966-88-83</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:webdev@protonmail.com">
                maksim.aleksandrov.2016@bk.ru
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
