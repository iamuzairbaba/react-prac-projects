
import './App.css';
import Accordion from './components/accordion/Accordion';
import Carousel from './components/carousel/Carousel';
import Colorgenerator from './components/colorgenerator/Colorgenerator';
import DynamicTabs from './components/dynamictabs/DynamicTabs';
import Github from './components/github/github';
import Loadmore from './components/loadmore/Loadmore';
import Modaltest from './components/modal/Modaltest';
import menus from './components/navmenu/data';
import Navmenu from './components/navmenu/Navmenu';
import Qrcode from './components/qrcode/Qrcode';
import ScrollIndicator from './components/scrollindicator/ScrollIndicator';
import Star from './components/star/star';
import Themeswitch from './components/themeswitch/Themeswitch';

function App() {
  return (
    <div className="App">
      <Accordion />
      <Colorgenerator />
      <Star />
      <Carousel url={'https://picsum.photos/v2/list'} page={1} limit={10}/>
      <Loadmore />
      <Navmenu menus={menus}/>
      <Qrcode />
      <Themeswitch />
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
      <DynamicTabs />
      <Modaltest />
      <Github />
    </div>
  );
}

export default App;
