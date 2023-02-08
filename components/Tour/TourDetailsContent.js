import React, { useState } from 'react'
import Activity from '../common/Activity'
import Comment from '../common/Comment'
import Rating from '../common/Rating'
import RatingInput from '../common/RatingInput'
const dummyActivitiesData = [
  {
    title: 'LE CENTRE HISTORIQUE',
    imgURL: '/images/tour/single-tour-1.jpg',
    description: `Au centre de cette place se trouve le marché des Grands
   Hommes, un marché couvert dans un écrin de verre de structure
   métallique. Il abrite une galerie commerciale. Six rues
   rayonnent au centre de la place des Grands-Hommes qui sont
   dédiées aux grands philosophes (Buffon, Diderot, Montaigne,
   Montesquieu, Rousseau et Voltaire).`,
  },
  {
    title: 'PALAIS-GALLIEN',
    imgURL: '/images/tour/single-tour-12.jpg',
    description: `L'amphithéâtre romain, connu sous le nom de palais Gallien,
    est le seul monument de l’antique Burdigala encore visible. Il
    fut élevé au début du IIIe siècle peut-être sous le règne de
    l'empereur romain Gallien, d’où son nom. Il était à l’origine
    de forme elliptique, mesurait plus de 130 mètres dans son plus
    grand axe et pouvait accueillir sur ses gradins en bois plus
    de 20 000 spectateurs. Encore bien conservé au XVIIe siècle,
    il commença à être démoli lors de la Révolution après avoir
    été vendu en lots comme bien national. Aujourd’hui, il ne
    reste qu'un sixième de ce monument.`,
  },
  {
    title: 'Le miroir de l’eau',
    imgURL: '/images/tour/single-tour-13.jpg',
    description: `Cette œuvre originale, du paysagiste Michel Corajoud, alterne
    des effets extraordinaires de miroir et de brouillard. Situé
    face à la Place de la Bourse, il est le lieu le plus
    photographié de Bordeaux.`,
  },
  {
    title: 'LE JARDIN BOTANIQUE DE LA BASTILLE',
    imgURL: '/images/tour/single-tour-14.jpg',
    description: `Découvrir le Jardin botanique conçu par Françoise Jourda,
    architecte, et Catherine Mosbach, paysagiste en 2003. Les
    grilles d'entrée sont de Pascal Convert. Les plantes sont
    organisées en systèmes cohérents, poussent dans des conditions
    proches de celles de leur milieu nature.`,
  },
]

const dummyCommentsData = [
  {
    userName: 'Anthony J. Ruiz',
    userImgURL: '/images/blog/avatar-1.jpg',
    commentContent: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam voluptua. At vero eos et accusam et
    justo duo dolores et ea rebum.`,
    rating: '4',
  },
  {
    userName: 'Andrea F. Kelley',
    userImgURL: '/images/blog/avatar-2.jpg',
    commentContent: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam voluptua. At vero eos et accusam et
    justo duo dolores et ea rebum.`,
    rating: '4',
  },
]

const TourDetailsContent = ({ data }) => {
  const [clicked, setClicked] = useState(false)
  const [toggleState, setToggleState] = useState(1)

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <>
      <div className="container pt-100">
        <div className="row gx-5">
          <div className="col-xl-9 col-lg-8 col-md-12 col-12">
            <div className="tour-details-info">
              <p>
                En 2007 à Christchurch en Nouvelle-Zélande, l'Organisation des
                Nations unies pour l'éducation, la science et la culture
                (Unesco) a inscrit Bordeaux, Port de la lune, sur la liste du
                patrimoine mondial au titre d'ensemble urbain exceptionnel.
                L’inscription de cette ville est une distinction internationale
                honorable qui la démarque. A ce titre, Bordeaux se doit de
                poursuivre ses efforts d’accueil et enrichir une offre
                touristique de qualité pour tous les publics. Déjà en 2006,
                Bordeaux a été la première ville de France à obtenir en 2006 le
                label « Famille plus - destination pour petits et grands » qui
                consacre une offre d’accueil adaptée au public familial. A
                présent, elle devient ville pilote sur le plan national pour la
                mise en place de circuits de découverte adaptés aux clientèles à
                besoins spécifiques en milieu urbain avec trois itinéraires qui
                ont obtenu en septembre 2007 le label{' '}
                <b style={{ color: '#cc3f32' }}>« Tourisme et Handicaps »</b>
                pour les handicaps moteur et auditif
              </p>
              {dummyActivitiesData.map((item, index) => (
                <Activity
                  key={index}
                  title={item.title}
                  imgURL={item.imgURL}
                  description={item.description}
                />
              ))}
            </div>
            <div className="post-comment-wrap">
              <h4 className="comment-title">2 Commentaires</h4>
              {dummyCommentsData.map((item, index) => (
                <Comment
                  key={index}
                  userName={item.userName}
                  commentContent={item.commentContent}
                  userImgURL={item.userImgURL}
                  rating={item.rating}
                />
              ))}
            </div>
            <div className="comment-form-wrap">
              <div className="comment-form-title">
                <h4>Écrivez votre commentaire</h4>
              </div>
              <form action="#" className="comment-form">
                <div className="row gx-3">
                  <div className="col-lg-6">
                    <div className="form-group s1">
                      <input type="text" placeholder="Nom et prénom" />
                    </div>
                    <div className="form-group s2">
                      <input type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group v1">
                      <textarea
                        name="review-msg"
                        id="review-msg"
                        cols="30"
                        rows="10"
                        placeholder="Votre commentaires..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <ul
                      className="rating-star"
                      style={{ marginBottom: '10px' }}
                    >
                      <RatingInput />
                    </ul>
                    <div className="checkbox">
                      <input type="checkbox" id="ts" />
                      <label htmlFor="ts">
                        J'accepte vos termes et conditions.
                      </label>
                    </div>

                    <button type="submit" className="btn v7">
                      Envoyer <i className="ri-logout-circle-r-line"></i>{' '}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-12 col-12">
            <div className="sidebar">
              <div className="sidebar-widget tour-book">
                {/*<h4>Reserver maintenant </h4>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="date"
                    placeholder="Arrival"
                  />
                </div>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="date"
                    placeholder="Departure"
                  />
                </div>
                <div className="select-person">
                  <select className="tour-filter-one">
                    <option value="1">Person</option>
                    <option value="2">1 Person</option>
                    <option value="3">2 Person</option>
                  </select>
                  <span className="hero-filter-down-arrow">
                    <i className="ri-arrow-down-s-line"></i>
                  </span>
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Destination" />
                </div>*/}
                <button type="button" className="book-btn">
                  Reserver maintenant{' '}
                  <i className="ri-logout-circle-r-line"></i>{' '}
                </button>
              </div>
              {/*<div className="sidebar-widget tour-map">
                <h4>View Place In Map</h4>
                <div className="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd"></iframe>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

TourDetailsContent.defaultProps = {
  data: [
    {
      question: 'What languages do you offer tours in?',
      answer:
        'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question: 'Are there any extra fees I have to pay?',
      answer:
        'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question: 'How much does it cost to do a private tour?',
      answer:
        'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ],
}

export default TourDetailsContent
