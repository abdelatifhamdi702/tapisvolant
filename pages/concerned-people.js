import React from 'react'
import PageBannerTwo from '../components/common/PageBannerTwo'

const TermsCondition = () => {
  return (
    <>
      <PageBannerTwo
        bannerTitle="LES PERSONNES CONCERNEES PAR LES SEJOURS ADAPTES"
        pageName="LES PERSONNES CONCERNEES PAR LES SEJOURS ADAPTES"
        bgImageCss="br-bg-4"
      />
      <section className="faq-wrap pt-100 pb-100">
        <div className="container">
          <div className="row gx-5">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 col-12">
              <div className="pp-content-wrap">
                <div className="pp-content">
                  <h4>1. LES PERSONNES CONCERNEES PAR LES SEJOURS ADAPTES :</h4>
                  <p>
                    C’est une personne qui a la capacité de participer à toutes
                    les activités sans aides physiques. Il s’agit d’une personne
                    sociable avec une bonne communication fonctionnelle sans
                    aucun trouble comportemental.
                  </p>
                </div>
                <div className="pp-content">
                  <h4>2. LES PERSONNES AVEC UNE BONNE AUTONOMIE :</h4>
                  <p>
                    C’est une personne qui a la capacité de participer à toutes
                    les activités avec une légère stimulation. Il s’agit d’une
                    personne sociable avec une communication moyenne et
                    fonctionnelle, sans aucun trouble comportemental.
                  </p>
                </div>
                <div className="pp-content">
                  <h4>3. LES PERSONNES AVEC UNE MOYENNE AUTONOMIE : </h4>
                  <p>
                    C’est une personne relativement autonome mais fatigable avec
                    des difficultés sur le plan social. Il s’agit d’une personne
                    avec un langue moyen mais compréhensible. Ils nécessitent
                    une aide de proximité ou une stimulation, sans trouble
                    comportemental.
                  </p>
                </div>
                <div className="pp-content">
                  <h4>4. LES PERSONNES UNE LEGERE DEPENDANCE</h4>
                  <p>
                    C’est une personne avec un handicap moteur se servant d’un
                    fauteuil PMR pour tous ses déplacements. Il s’agit d’une
                    personne sociable parfois avec un léger retard mental. Elle
                    nécessite un aide partiel pour le quotidien voir total pour
                    la douche, la toilette et le coucher. Elle a une bonne
                    communication, sans troubles comportemental.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsCondition
