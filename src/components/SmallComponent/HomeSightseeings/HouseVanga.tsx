import { Box, Stack, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useTranslation } from "react-i18next";

const HouseVanga = () => {
  const { t } = useTranslation();

  return (
    <Stack
      width="100%"
      gap={3}
      px={{ xs: 2, sm: 2, md: 10 }}
      py={{ xs: 4, sm: 4, md: 4 }}
      textAlign="justify"
    >
      <Typography component="h5" variant="h3" textAlign="center">
        {t("readMore.houseVanga.title")}
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: "600px",
          backgroundImage:
            "url('https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%9A%D1%8A%D1%89%D0%B0%20%D0%92%D0%B0%D0%BD%D0%B3%D0%B0/HOR09006_XreCdkqJ6.jpg?updatedAt=1708343476763')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "10px",
        }}
      ></Box>

      <Stack mb={2}>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={1}
        >
          <CalendarMonthIcon />
          <Typography>{t("readMore.houseVanga.workTime")}</Typography>
        </Stack>
      </Stack>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.houseVanga.text1")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.houseVanga.text2")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.houseVanga.text3")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.houseVanga.text4")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.houseVanga.text5")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.houseVanga.text6")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.houseVanga.text7")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.houseVanga.text8")}
      </Typography>

      <object
        title="House of Vanga Location"
        data="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%9A%D1%8A%D1%89%D0%B0-%D0%BC%D1%83%D0%B7%D0%B5%D0%B9%20%E2%80%9E%D0%92%D0%B0%D0%BD%D0%B3%D0%B0%E2%80%9C,%20%D0%A6%D0%B5%D0%BD%D1%82%D1%8A%D1%80,%20%D1%83%D0%BB.%20%D0%92%D0%B0%D0%BD%D0%B3%D0%B0%2010,%202850%20%D0%9F%D0%B5%D1%82%D1%80%D0%B8%D1%87+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        style={{ width: "100%", height: "400px" }}
      >
        <embed
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%9A%D1%8A%D1%89%D0%B0-%D0%BC%D1%83%D0%B7%D0%B5%D0%B9%20%E2%80%9E%D0%92%D0%B0%D0%BD%D0%B3%D0%B0%E2%80%9C,%20%D0%A6%D0%B5%D0%BD%D1%82%D1%8A%D1%80,%20%D1%83%D0%BB.%20%D0%92%D0%B0%D0%BD%D0%B3%D0%B0%2010,%202850%20%D0%9F%D0%B5%D1%82%D1%80%D0%B8%D1%87+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ width: "100%", height: "400px" }}
        ></embed>
        Error: Embedded data could not be displayed.
      </object>
    </Stack>
  );
};

export default HouseVanga;
