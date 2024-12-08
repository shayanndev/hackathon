import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
import NewArrivals from '../components/Arrival';
import TopSelling from '../components/TopSelling';
import Category from '../components/Category';
import Testimonials from '../components/Testimonials';
export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <NewArrivals></NewArrivals>
      <TopSelling></TopSelling>
      <Category></Category>
      <Testimonials></Testimonials>
    </>
  );
}