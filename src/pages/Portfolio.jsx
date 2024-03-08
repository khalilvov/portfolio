import React from 'react';
import PortfolioStyle from './Pages.module.scss';

const Portfolio = () => {
  return (
    <div>
      <article className={PortfolioStyle['article']}>
        <h2 className={PortfolioStyle['title-2']}>Мои работы</h2>

        <section className={PortfolioStyle['article-item']}>
          <h3 className={PortfolioStyle['title-3']}>Portfolio</h3>

          <div className={PortfolioStyle['article-item-image']}>
            <img src="/portfolio/portfolio.jpg" alt="portfolio image" />
          </div>

          <p className={PortfolioStyle['article-item-text']}>
            Ko'p saxifali Portfolio
          </p>

          <a
            href="https://khalilvov.github.io/portfolio/"
            target="_blank"
            className={PortfolioStyle['article-item-link']}
          >
            Смотреть работу
          </a>
        </section>

        <section className={PortfolioStyle['article-item']}>
          <h3 className={PortfolioStyle['title-3']}>Filmateka</h3>

          <div className={PortfolioStyle['article-item-image']}>
            <img src="/portfolio/film.jpg" alt="portfolio image" />
          </div>

          <p className={PortfolioStyle['article-item-text']}>
            JavaScript loyha. Form validatsiya.
          </p>

          <a
            href="https://khalilvov.github.io/Filmateka/"
            target="_blank"
            className={PortfolioStyle['article-item-link']}
          >
            Смотреть работу
          </a>
        </section>
        <section className={PortfolioStyle['article-item']}>
          <h3 className={PortfolioStyle['title-3']}>Chat</h3>

          <div className={PortfolioStyle['article-item-image']}>
            <img src="/portfolio/chat.jpg" alt="portfolio image" />
          </div>

          <p className={PortfolioStyle['article-item-text']}>
            Html va Css loyha. chat proyekt.
          </p>

          <a
            href="https://khalilvov.github.io/chat/"
            target="_blank"
            className={PortfolioStyle['article-item-link']}
          >
            Смотреть работу
          </a>
        </section>
        <section className={PortfolioStyle['article-item']}>
          <h3 className={PortfolioStyle['title-3']}>post</h3>

          <div className={PortfolioStyle['article-item-image']}>
            <img src="/portfolio/post.jpg" alt="portfolio image" />
          </div>

          <p className={PortfolioStyle['article-item-text']}>
            Html va Css (css media) loyha. post proyekt.
          </p>

          <a
            href="https://khalilvov.github.io/post/"
            target="_blank"
            className={PortfolioStyle['article-item-link']}
          >
            Смотреть работу
          </a>
        </section>
        <section className={PortfolioStyle['article-item']}>
          <h3 className={PortfolioStyle['title-3']}>products</h3>

          <div className={PortfolioStyle['article-item-image']}>
            <img src="/portfolio/products.jpg" alt="portfolio image" />
          </div>

          <p className={PortfolioStyle['article-item-text']}>
            Html va Css (css flex) loyha. Mahsulotlar kartochkasi.
          </p>

          <a
            href="https://khalilvov.github.io/Products/"
            target="_blank"
            className={PortfolioStyle['article-item-link']}
          >
            Смотреть работу
          </a>
        </section>
      </article>
    </div>
  );
};

export default Portfolio;
