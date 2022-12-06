import MainCarousel from "./MainCarousel/MainCarousel";
import ShoppingList from "./ShoppingList/ShoppingList";
import Subscribe from "./Subscribe/Subscribe";

export default function Home() {
    return (
        <div className='home'>
            <MainCarousel />
            <ShoppingList />
            <Subscribe />
        </div>
    );
}