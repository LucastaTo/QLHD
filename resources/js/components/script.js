import Papers from './papers'
import Control from './control'
import Header from './partials/header'
import Footer from './partials/footer'


export default {
    components: {
        Control,
        Papers,
        Header,
        Footer,
      },
      data() {
        return {
          screenRef : {}
        }
      },
      mounted() {
        this.screenRef = document.querySelector(".card-papers")
    }
}