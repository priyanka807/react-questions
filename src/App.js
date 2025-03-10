import logo from './logo.svg';
import Searchdata from './searchdata/searchdata';
import Debouncing from './debouncing/debouncing';
import UseEffectHooks from './hooks/useEffectHooks';
import Cleanupfunction from './hooks/cleanupFunction';
import Products from './hooks/products';
import Parent from './hooks/useCallbackHooks';
import DeleteCheckboxCondition from './deleteCheckboxCondition/deleteCheckboxCondition';
import SwapList from './swapList/swapList';
import SelectfavourteGameAndMovie from './selectfavourteGameAndMovie/selectfavourteGameAndMovie';
import UseTransitionHooks from './hooks/useTransitionHooks';

import Todolist from './todolist/todolist';
import Card from './common/card';
import NavbarUsingReactBootstrap from './navbar/navbarUsingReactBootstrap';
import NavbarUsingTailwind from './navbar/navbarUsingTailwind';
import Calculator from './calculator/calculator';
import ParentComponent from './props/props';
import { DarkModeContext } from './darkModeUsingUseContext/context';
import DarkModeUsingUseContext from './darkModeUsingUseContext/darkModeUsingUseContext';
import Slider from './slider/slider';
import { products } from './utlis/products';
import CountriesAndCities from './countriesAndCities/countriesAndCities';
import CleanupFunction from './cleanupfunction/cleanupfunction';
import ShowMoreAndLess from './showMoreAndLess/showMoreAndLess';
import Form from './form/form';

function App() {
  const skinCareProducts = products.filter((data)=>data.category==="skin care")
  const homeopathyProducts = products.filter((data)=>data.category==="Homeopathy")
  const hairCareProducts = products.filter((data)=>data.category==="hair care")
console.log(hairCareProducts,'homeopathyProducts hair care')
  return (
    <>
   {/* <Startresetpause/>
  <Infintiveballer/> */}
 {/* <Searchdata/> */}
 {/* <Pagination/> */}
 {/* <Carousal/> */}

 {/* <Debouncing/> */}
 {/* <UseEffectHooks/> */}
{/* <Cleanupfunction/> */}
{/* <Products/> */}
{/* <Parent/> */}
{/* <DeleteCheckboxCondition/> */}
{/* <SwapList/> */}
{/* <SelectfavourteGameAndMovie/> */}
{/* <Infintiveballer/>
<Stoppauserest/> */}
{/* <Todolist/> */}
{/* <Carousal/> */}

{/* <Card/> */}
{/* <NavbarUsingReactBootstrap/> */}
{/* <NavbarUsingTailwind/> */}
{/* <Calculator1/> */}
{/* <ParentComponent/> */}
{/* <DarkModeUsingUseContext/> */}
{/* <SwapList/>

{/* {products.map((data)=>(
  <Slider  title={data.category} data={data.data}/>
))} */}

{/* <Slider   data={skinCareProducts}/>
<div>banner</div>
<div>other product</div>
<Slider   data={homeopathyProducts}/>
<div>banner</div>
<div>other product</div>
<Slider   data={hairCareProducts}/>
<Slider   data={hairCareProducts}/> */}

{/* <CountriesAndCities/> */}
{/* <CleanupFunction/> */}
{/* <ShowMoreAndLess/> */}

<Form/>
  </>
  );
}

export default App;
