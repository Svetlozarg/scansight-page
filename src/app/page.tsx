import HomeAbout from "@/components/PageComponents/Home/HomeAbout";
import HomeHero from "@/components/PageComponents/Home/HomeHero";
import HomeMap from "@/components/PageComponents/Home/HomeMap";
import HomeSightseeings from "@/components/PageComponents/Home/HomeSightseeings";
import { Stack } from "@mui/material";

const HomePage = () => {
  return (
    <Stack>
      <HomeHero />
      <HomeAbout />
      <HomeMap />
      <HomeSightseeings />
    </Stack>
  );
};

export default HomePage;
