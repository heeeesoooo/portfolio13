import TopBanner from './pages/TopBanner';
import Header from './pages/Header';
import MainVisual from './pages/MainVisual';
import MainBanner from './pages/MainBanner';
import SaleList from './pages/SaleList';
import Kategorie from './pages/Kategorie';
import SubSlide from './pages/SubSlide';
import ItmList01 from './pages/ItmList01';
import ItmList02 from './pages/ItmList02';
import ItmList03 from './pages/ItmList03';
import ItmList04 from './pages/ItmList04';
import Footer from './pages/Footer';




const App = () => {
    return (
        <>
            <TopBanner />
            <Header />
            <MainVisual />
            <MainBanner />
            <SaleList />
            <Kategorie />
            <SubSlide />
            <ItmList01 />
            <ItmList02 />
            <ItmList03 />
            <ItmList04 />
            <Footer />
        </>
    );
}

export default App;