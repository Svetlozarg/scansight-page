"use client";
import { useState } from "react";
import { Box, Typography, Tabs, Tab, Stack } from "@mui/material";
import HeracleaSintica from "@/components/SmallComponent/HomeSightseeings/HeracleaSintica";
import HouseVanga from "@/components/SmallComponent/HomeSightseeings/HouseVanga";
import PetrichMuseum from "@/components/SmallComponent/HomeSightseeings/PetrichMuseum";
import SamuilFortress from "@/components/SmallComponent/HomeSightseeings/SamuilFortress";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const TABS_DATA = [
  {
    title: "1. Хераклея Синтика",
  },
  {
    title: "2. Къща Ванга",
  },
  {
    title: "3. Исторически  музей",
  },
  {
    title: "4. Самуилова Крепост",
  },
  {
    title: "Прочети Повече",
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const HomeSightseeings = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack width="100%" px={2} py={10}>
      <Typography component="h2" variant="h2" textAlign="center" mb={4}>
        {t("readMore.title")}
      </Typography>

      <Stack justifyContent="center" alignItems="center">
        <Tabs
          value={value}
          sx={{
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
          onChange={handleChange}
          TabIndicatorProps={{
            style: { display: "none" },
          }}
        >
          {TABS_DATA.map((tab, index) => (
            <Tab
              key={index}
              label={
                tab.title !== "Прочети Повече" ? (
                  <Typography
                    component="p"
                    variant="body1"
                    color="common.black"
                    borderBottom="2px solid"
                    borderColor={
                      value === index ? "primary.main" : "transparent"
                    }
                    sx={{ transition: "250ms ease-in-out" }}
                  >
                    {tab.title}
                  </Typography>
                ) : (
                  <Link href="https://visitpetrich.com/tourism">
                    <Typography component="p" variant="h5" color="primary.main">
                      {t("readMoreText")}
                    </Typography>
                  </Link>
                )
              }
              {...a11yProps(0)}
            />
          ))}
        </Tabs>
      </Stack>

      {TABS_DATA.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {tab.title === "1. Хераклея Синтика" ? <HeracleaSintica /> : null}
          {tab.title === "2. Къща Ванга" ? <HouseVanga /> : null}
          {tab.title === "3. Исторически  музей" ? <PetrichMuseum /> : null}
          {tab.title === "4. Самуилова Крепост" ? <SamuilFortress /> : null}
        </CustomTabPanel>
      ))}
    </Stack>
  );
};

export default HomeSightseeings;
