
import carSuvImg from '../assets/imgs/car-suv.png';
import Button from '../components/button/button';
import ProductCard from '../components/product-card/product-card';
import ProductCardBig from '../components/product-card-big/product-card-big';
import SectionTitle from '../components/section-title/section-title';
import Navbar from '../components/navbar/navbar';
import Filter from '../components/filter/filter';
import Footer from '../components/footer/footer';

function HomePage() {
  return (
    <>
    <Navbar />
    {/* hero section */}
    <header className='pt-8'>
      <div className='container'>
        <div className='flex gap-8'>
          <div className='bg-ads-1 w-full aspect-[3.27/2.32] bg-cover bg-no-repeat rounded-lg p-4 lg:aspect-[6.4/3.6] lg:bg-ads-1-large lg:bg-center'>
            <h1 className='text-white text-base font-medium mb-3 lg:text-3xl lg:mb-4 lg:pr-[30%] xl:pr-[40%]'>The best platform for car rental</h1>
            <p className='w-4/5 mb-3.5 text-white capitalize text-xs lg:text-base lg:font-medium lg:mb-4'>
              ease of doing a car rental safely and reliably. of course not at low price.
            </p>
            <Button classes='lg:mb-12' padding='px-7 py-3.5' fontSize='text-sm' onClick={() => {}}>
              rental car
            </Button>
          </div>
          <div className='hidden w-full aspect-[3.27/2.32] bg-cover bg-no-repeat rounded-lg p-4 lg:block lg:aspect-[6.4/3.6] lg:bg-ads-2-large lg:bg-center'>
            <h1 className='text-white text-base font-medium mb-3 lg:text-3xl lg:mb-4 lg:pr-[30%] xl:pr-[40%]'>Easy way to rent a car at a low price</h1>
            <p className='w-4/5 mb-3.5 text-white text-xs lg:text-base lg:font-medium lg:mb-4'>
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <Button classes='lg:mb-12' bgColor='bg-sky-300' padding='px-7 py-3.5' fontSize='text-sm' onClick={() => {}}>
              rental car
            </Button>
          </div>
        </div>
      </div>
    </header>
    <main className='pt-8 lg:pt-16'>
      {/* date filter */}
      <div className=''>
        <Filter />
      </div>
      {/* title */}
      <SectionTitle title='Popular car' />

      {/* popular car slider */}
      <div className='container'>
        <div className='flex gap-5 overflow-hidden p-[1px]'>
          {/* car card */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      {/* title */}
      <SectionTitle title='Recommended car' />

      {/* Recommended car list */}
      <div className="container">
        <div className="flex flex-col gap-5 lg:flex-row">
          <ProductCardBig />
          <ProductCardBig />
        </div>
      </div>

      <div className='container py-12'>
        <div className='flex justify-end'>
          <div className='w-3/5 flex justify-between items-center'>
            <Button onClick={() => {}}>
              show more car
            </Button>
            <span className='inline-block text-slate-500 font-medium text-sm capitalize'>120 car</span>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}

const loveIcon = <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.44 3.1c-1.81 0-3.43.88-4.44 2.23C10.99 3.98 9.37 3.1 7.56 3.1 4.49 3.1 2 5.6 2 8.69c0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59Z" fill="currentcolor"/></svg>;

const gasIcon = <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m13.0317 5.4425-1.1666-.5833c-.2159-.105-.4842-.0234-.5892.1925-.1108.2216-.0233.4841.1925.5891l.9275.4609v2.7941l-2.1875.0059v-5.985c0-1.1667-.7816-1.75-1.75-1.75H3.7918c-.9684 0-1.75.5833-1.75 1.75v9.4791h-.875c-.2392 0-.4376.1984-.4376.4375 0 .2392.1984.4375.4375.4375h9.9167c.2392 0 .4375-.1983.4375-.4375 0-.2391-.1983-.4375-.4375-.4375h-.875V9.7767l2.625-.0059a.437.437 0 0 0 .4375-.4375v-3.5a.4433.4433 0 0 0-.2392-.3908ZM3.5001 4.0192c0-.8109.4958-1.1025 1.1025-1.1025h3.0508c.6009 0 1.0967.2916 1.0967 1.1025v.7175c0 .805-.4958 1.0966-1.1025 1.0966h-3.045c-.6067 0-1.1025-.2916-1.1025-1.1025v-.7116Zm.2916 3.1266h1.75c.2392 0 .4376.1984.4376.4375 0 .2392-.1984.4375-.4375.4375h-1.75c-.2392 0-.4375-.1983-.4375-.4375 0-.2391.1983-.4375.4375-.4375Z" fill="currentcolor"/></svg>;

const userIcon = <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 1.1667c-1.5282 0-2.7708 1.2425-2.7708 2.7708 0 1.4992 1.1725 2.7125 2.7009 2.765.0466-.0058.0933-.0058.1283 0h.0408C6.8426 6.65 8.0152 5.4367 8.021 3.9375c0-1.5283-1.2425-2.7708-2.7708-2.7708ZM8.2133 8.2542c-1.6275-1.085-4.2817-1.085-5.9208 0-.7409.4958-1.1492 1.1666-1.1492 1.8841s.4083 1.3825 1.1433 1.8725c.8167.5484 1.89.8225 2.9634.8225 1.0733 0 2.1466-.2741 2.9633-.8225.735-.4958 1.1433-1.1608 1.1433-1.8841-.0058-.7175-.4083-1.3825-1.1433-1.8725ZM11.6607 4.2816c.0933 1.1317-.7117 2.1234-1.8258 2.2576H9.8057c-.035 0-.07 0-.0991.0116-.5659.0292-1.085-.1517-1.4759-.4841.6008-.5367.945-1.3417.875-2.2167-.0408-.4725-.2042-.9042-.4492-1.2717.2217-.1108.4784-.1808.7409-.2041 1.1433-.0992 2.1641.7525 2.2633 1.9074Z" fill="currentcolor"/><path d="M12.8276 9.6775c-.0467.5658-.4084 1.0558-1.015 1.3883-.5834.3209-1.3184.4725-2.0475.455.42-.3791.665-.8516.7116-1.3533.0584-.7233-.2858-1.4175-.9741-1.9717-.3909-.3091-.8459-.5541-1.3417-.735 1.2892-.3733 2.9108-.1225 3.9083.6825.5367.4317.8109.9742.7584 1.5342Z" fill="currentcolor"/></svg>;

const searchIcon = <svg className="inline-block" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 21c5.2467 0 9.5-4.2533 9.5-9.5S16.7467 2 11.5 2 2 6.2533 2 11.5 6.2533 21 11.5 21ZM22 22l-2-2" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;

const filterIcon = <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 6.5h-6M6 6.5H2M10 10c1.933 0 3.5-1.567 3.5-3.5S11.933 3 10 3 6.5 4.567 6.5 6.5 8.067 10 10 10ZM22 17.5h-4M8 17.5H2M14 21c1.933 0 3.5-1.567 3.5-3.5S15.933 14 14 14s-3.5 1.567-3.5 3.5S12.067 21 14 21Z" stroke="currentcolor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>;

const bellIcon = <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m19.3399 14.49-1-1.66c-.21-.37-.4-1.07-.4-1.48V8.82c0-2.35-1.38-4.38-3.37-5.33-.52-.92-1.48-1.49-2.58-1.49-1.09 0-2.07.59-2.59 1.52-1.95.97-3.3 2.98-3.3 5.3v2.53c0 .41-.19 1.11-.4 1.47l-1.01 1.67c-.4.67-.49 1.41-.24 2.09.24.67.81 1.19 1.55 1.44 1.94.66 3.98.98 6.02.98 2.04 0 4.08-.32 6.02-.97.7-.23 1.24-.76 1.5-1.45s.19-1.45-.2-2.09ZM14.8299 20.01c-.42 1.16-1.53 1.99-2.83 1.99-.79 0-1.57-.32-2.12-.89-.32-.3-.56-.7-.7-1.11.13.02.26.03.4.05.23.03.47.06.71.08.57.05 1.15.08 1.73.08.57 0 1.14-.03 1.7-.08.21-.02.42-.03.62-.06.16-.02.32-.04.49-.06Z" fill="currentcolor"/></svg>;

const gearIcon = <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1 9.22c-1.81 0-2.55-1.28-1.65-2.85.52-.91.21-2.07-.7-2.59l-1.73-.99c-.79-.47-1.81-.19-2.28.6l-.11.19c-.9 1.57-2.38 1.57-3.29 0l-.11-.19c-.45-.79-1.47-1.07-2.26-.6l-1.73.99c-.91.52-1.22 1.69-.7 2.6.91 1.56.17 2.84-1.64 2.84-1.04 0-1.9.8501-1.9 1.9001v1.76c0 1.04.85 1.9 1.9 1.9 1.81 0 2.55 1.28 1.64 2.85-.52.91-.21 2.07.7 2.59l1.73.99c.79.47 1.81.19 2.28-.6l.11-.19c.9-1.57 2.38-1.57 3.29 0l.11.19c.47.79 1.49 1.07 2.28.6l1.73-.99c.91-.52 1.22-1.69.7-2.59-.91-1.57-.17-2.85 1.64-2.85 1.04 0 1.9-.85 1.9-1.9v-1.76c-.01-1.04-.86-1.9-1.91-1.9ZM12 15.2502c-1.79 0-3.25-1.46-3.25-3.25s1.46-3.25 3.25-3.25 3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25Z" fill="currentcolor"/></svg>;

export default HomePage