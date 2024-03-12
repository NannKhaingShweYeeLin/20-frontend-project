import './App.css';
import Accordian from './components/accordion';
import ModalTest from './components/custom-modal-popup/modal-test';
import TabTest from './components/custom-tabs/tab-test';
import FeatureFlags from './components/feature-flag';
import FeatureFlagGlobalState from './components/feature-flag/context';
import Demo from './components/fetching data';
import GithubProfileFinder from './components/github-profile-finder';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indicator';
import ScrollToTopAndButtom from './components/scroll-to-top-and-bottom';
import ScrollToSection from './components/scroll-to-top-and-bottom/scroll-to-section';
import SearchAutoComplete from './components/search-autocomplete-with-api';
import StarRating from './components/star-rating';
import TicTacToe from './components/tic-tact-toe';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import UseFetchHookTest from './components/use-fetch/test';
import UseOnclickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';

function App(){
  return(
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image slider component */}
      {/* <ImageSlider />  */}

      {/* fetching data */}
      {/* <Demo /> */}

      {/* Load more products component */}
      {/* <LoadMoreData /> */}

      {/* Tree view component/menu UI component/ resursive navigate menu */}
      {/* <TreeView menus={menus} /> */}

      {/* Qr Code Generator */}
      {/* <QRCodeGenerator /> */}

      {/* light and dark theme switch */}
      {/* <LightDarkMode /> */}

      {/* Scroll indicator component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

      {/* custom tabs component */}
      {/* <TabTest /> */}

      {/* custom modal component */}
      {/* <ModalTest /> */}

      {/* Github profile finder */}
      {/* <GithubProfileFinder /> */}

      {/* Search Autocomplete */}
      {/* <SearchAutoComplete /> */}

      {/* Tic Tac Toe */}
      {/* <TicTacToe /> */}

      {/* Feature Flag Implementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* Use Fetch -custom Hook */}
      {/* <UseFetchHookTest /> */}

      {/* Use OnClick Outside Hook Test */}
      {/* <UseOnclickOutsideTest /> */}

      {/* Use Window Resize Hook Test */}
      {/* <UseWindowResizeTest /> */}

      {/* Scroll to Top and Bottom */}
      {/* <ScrollToTopAndButtom/> */}

      {/* Scroll To a  particular section */}
      <ScrollToSection/>

    </div>
  );
}

export default App;