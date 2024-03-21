import { Box, Stack, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useTranslation } from "next-i18next";

const HeracleaSintica = () => {
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
        {t("readMore.herecleqSintica.title")}
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: "600px",
          backgroundImage:
            "url('https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F%20%D0%A1%D0%B8%D0%BD%D1%82%D0%B8%D0%BA%D0%B0%20(1)-min_eDDWNTLPh.jpg?updatedAt=1708357634883')",
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
          <Typography>{t("readMore.herecleqSintica.workTime")}</Typography>
        </Stack>
      </Stack>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.herecleqSintica.text1")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.herecleqSintica.text2")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.herecleqSintica.text3")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.herecleqSintica.text4")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.herecleqSintica.text5")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.herecleqSintica.text6")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.herecleqSintica.text7")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.herecleqSintica.text8")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.herecleqSintica.text9")}
      </Typography>

      <object
        title="Heracleq Sintica Location"
        data="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%90%D0%BD%D1%82%D0%B8%D1%87%D0%B5%D0%BD%20%D0%B3%D1%80%D0%B0%D0%B4%20%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F%20%D0%A1%D0%B8%D0%BD%D1%82%D0%B8%D0%BA%D0%B0,%202863%20%D0%9F%D0%B5%D1%82%D1%80%D0%B8%D1%87+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        style={{ width: "100%", height: "400px" }}
      >
        <embed
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%90%D0%BD%D1%82%D0%B8%D1%87%D0%B5%D0%BD%20%D0%B3%D1%80%D0%B0%D0%B4%20%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F%20%D0%A1%D0%B8%D0%BD%D1%82%D0%B8%D0%BA%D0%B0,%202863%20%D0%9F%D0%B5%D1%82%D1%80%D0%B8%D1%87+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ width: "100%", height: "400px" }}
        ></embed>
        Error: Embedded data could not be displayed.
      </object>
    </Stack>
  );
};

export default HeracleaSintica;
