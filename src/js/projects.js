
.project-container {
  margin-bottom: 64px;
  margin-left: auto;
  margin-right: auto;
  min-width: 0;
}

.progect-container-program-img.swiper-slide {
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
}
.project-container-ul-program {
  padding: 32px;
  border-radius: 24px 24px 0 0;
  background-color: #fafafa;
  width: 344px;
  height: 473px;
}
.projects-title {
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: rgba(250, 250, 250, 0.4);
  margin-bottom: 32px;
}
.projects-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 96px;
}
.projects-link {
  display: block;
  align-items: center;
}
.projects-btn-react {
  border: 1px solid rgba(28, 29, 32, 0.2);

  border-radius: 60px;

  width: 80px;

  height: 45px;

  font-weight: 500;

  font-size: 16px;

  letter-spacing: -0.02em;

  color: #1c1d20;
}

.projects-btn-js {
  border: 1px solid rgba(28, 29, 32, 0.2);

  border-radius: 60px;

  width: 57px;

  height: 45px;

  font-weight: 500;

  font-size: 16px;

  letter-spacing: -0.02em;

  color: #1c1d20;
}

.projects-btn-node {
  border: 1px solid rgba(28, 29, 32, 0.2);

  border-radius: 60px;

  width: 94px;

  height: 45px;

  font-weight: 500;

  font-size: 16px;

  letter-spacing: -0.02em;

  color: #1c1d20;
}

.projects-btn-git {
  border: 1px solid rgba(28, 29, 32, 0.2);

  border-radius: 60px;

  width: 63px;

  height: 45px;

  font-weight: 500;

  font-size: 16px;

  letter-spacing: -0.02em;

  color: #1c1d20;
}

.project-p {
  font-weight: 500;

  font-size: 24px;

  line-height: 1.2;

  letter-spacing: -0.03em;

  color: #1c1d20;

  margin-bottom: 32px;
}

.projects-btn-see {
  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 60px;

  width: 141px;

  height: 45px;

  background: #ed3b44;

  font-weight: 500;

  font-size: 16px;

  letter-spacing: -0.02em;

  color: #fafafa;

  border: none;
}

.project-img-cont {
  display: flex;

  align-items: center;

  justify-content: center;

  padding: 100px 16px;

  border-radius: 0 0 24px 24px;

  width: 344px;

  height: 395px;

  background: #242527;
}

.project-icon {
  display: flex;

  flex-direction: row;

  justify-content: center;

  gap: 12px;
}

.project-icon-left-right {
  display: block;
  text-align: center;
  border: 1px solid rgba(250, 250, 250, 0.2);
  border-radius: 60px;
  width: 52px;
  height: 52px;
  stroke-width: 2px;
  stroke: #3b3b3b;
  transform: rotate(-180deg);
}
.right {
  stroke-width: 2px;
  stroke: #fafafa;
}
.swiper-container {
  width: 100%;
}

/* Дизайн для деактивованих кнопок */
.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  color: #ccc;
  pointer-events: none;
}
/*___________tablet__________*/

@media screen and (min-width: 768px) {
  .project-container-ul-program {
    width: 704px;
    height: 566px;
    padding: 64px;
  }
  .project-img-cont {
    width: 704px;

    height: 625px;

    padding: 120px 45px;
  }

  .projects-btn-see {
    margin-bottom: 64px;
  }

  .projects-list {
    margin-bottom: 164px;
  }

  .project-p {
    font-size: 44px;
  }

  .projects-btn-see {
    width: 177px;

    height: 55px;
  }

  .project-icon-left-right {
    width: 68px;

    height: 68px;
  }

  .project-icon {
    gap: 20px;
  }
}
@media screen and (min-width: 1440px) {
  .progect-container-program-img {
    display: flex;
    flex-direction: row;
    margin-bottom: 64px;
  }
  .project-container-ul-program {
    padding: 64px;
    border-radius: 24px 0 0 24px;
    width: 625px;
    height: 688px;
  }
  .project-img-cont {
    border-radius: 0 24px 24px 0;
    width: 625px;
    height: 688px;
    padding: 120px 37px;
  }
  .projects-list {
    margin-bottom: 223px;
  }
}
