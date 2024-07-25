
import './App.css';
import Accordion from './components/accordion/Accordion';
import Carousel from './components/carousel/Carousel';
import Colorgenerator from './components/colorgenerator/Colorgenerator';
import Loadmore from './components/loadmore/Loadmore';
import menus from './components/navmenu/data';
import Navmenu from './components/navmenu/Navmenu';
import Star from './components/star/star';

function App() {
  return (
    <div className="App">
      <Accordion />
      <Colorgenerator />
      <Star />
      <Carousel url={'https://picsum.photos/v2/list'} page={1} limit={10}/>
      <Loadmore />
      <Navmenu menus={menus}/>
    </div>
  );
}

export default App;
