import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pipe } from 'ramda'
import Helmet from 'react-helmet'

import CWHeader from 'components/CWHeader'
import CWFooter from 'components/CWFooter'

/**
 * Class Main Container
 *
 * @author Alin Porumb <alin.porumb@around25.com>
 * @version 0.1.0
 */
class MainContainer extends Component {

  static mapActionToProps(dispatch) {
    return {
    }
  }

  render() {
    return (
      <div>
        <Helmet title="Programare la spălătoria auto ca să nu mai stai la coadă!"
                titleTemplate="CleverWash - %s"
                meta={[
                  {property: "description", content: "Fă-ți programare la cele mai importante spălătorii din orașul tău. Compară prețuri și adaugă review-uri."},
                  {property: 'og:title', content: "CleverWash - Programare la spălătoria auto ca să nu mai stai la coadă!"},
                  {property: 'og:type', content: "article"},
                  {property: 'og:type', content: "article"},
                  {property: 'og:locale', content: "ro_RO"},
                  {property: 'og:image', content: "https://cleverwash.ro/assets/img/cw-og-img.jpg"},
                  {property: 'og:url', content: "https://cleverwash.ro"},
                  {property: 'og:description', content: "Fă-ți programare la spălătoria auto! Compară prețuri și adaugă review-uri. Aplicație mobilă disponibilă în AppStore și GooglePlay."},
                  {property: 'twitter:card', content: "summary"},
                  {property: 'twitter:title', content: "CleverWash - Programare la spălătoria auto ca să nu mai stai la coadă!"},
                  {property: 'twitter:description', content: "Fă-ți programare la spălătoria auto! Compară prețuri și adaugă review-uri. Aplicație mobilă disponibilă în AppStore și GooglePlay."},
                  {property: 'twitter:site', content: "@CleverWashApp"},
                  {property: 'twitter:creator', content: "@CleverWashApp"}
                ]}/>
        <CWHeader/>
        <div>
          {this.props.children}
        </div>
        <CWFooter/>
      </div>
    )
  }
}

export default pipe(
  connect(MainContainer.mapStateToProps, MainContainer.mapActionToProps)
)(MainContainer);
