import HomeHero from "@/components/PageComponents/Home/HomeHero";
import HomeMap from "@/components/PageComponents/Home/HomeMap";
import HomeSightseeings from "@/components/PageComponents/Home/HomeSightseeings";
import { Stack } from "@mui/material";

const HomePage = () => {
  return (
    <Stack>
      <HomeMap />
      <HomeSightseeings />
      <HomeHero />
      {/* <HomeAbout /> */}
    </Stack>
  );
};

export default HomePage;
