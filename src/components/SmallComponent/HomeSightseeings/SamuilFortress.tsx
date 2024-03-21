import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const SamuilFortress = () => {
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
        {t("readMore.samuilFortress.title")}
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: "600px",
          backgroundImage:
            "url('https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A1%D0%B0%D0%BC%D1%83%D0%B8%D0%BB%D0%BE%D0%B2%D0%B0%20%D0%9A%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82/DJI_0378-min_Sn0Ycsga4.jpg?updatedAt=1708343695985')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "10px",
        }}
      ></Box>

      <Typography component="p" variant="body1">
        {t("readMore.samuilFortress.text1")}
        <ul>
          <li>{t("readMore.samuilFortress.list1")}</li>
          <li>{t("readMore.samuilFortress.list2")} </li>
          <li>{t("readMore.samuilFortress.list3")}</li>
          <li>{t("readMore.samuilFortress.list4")}</li>
          <li>{t("readMore.samuilFortress.list5")}</li>
        </ul>
      </Typography>
      <Typography component="p" variant="body1">
        {t("readMore.samuilFortress.text2")}
      </Typography>
      <Typography component="p" variant="body1">
        {t("readMore.samuilFortress.text3")}
      </Typography>
      <Typography component="p" variant="body1">
        {t("readMore.samuilFortress.text4")}
      </Typography>
      <Typography component="p" variant="body1">
        {t("readMore.samuilFortress.text5")}
      </Typography>
      <Typography component="p" variant="body1">
        {t("readMore.samuilFortress.text6")}
      </Typography>

      <object
        title="Samuil Fortress Location"
        data="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%A1%D0%B0%D0%BC%D1%83%D0%B8%D0%BB%D0%BE%D0%B2%D0%B0%20%D0%BA%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82,%20%D1%85%D1%8A%D0%BB%D0%BC%20%D0%9A%D1%83%D1%84%D0%B0%D0%BB%D0%BD%D0%B8%D1%86%D0%B0+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        style={{ width: "100%", height: "400px" }}
      >
        <embed
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%A1%D0%B0%D0%BC%D1%83%D0%B8%D0%BB%D0%BE%D0%B2%D0%B0%20%D0%BA%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82,%20%D1%85%D1%8A%D0%BB%D0%BC%20%D0%9A%D1%83%D1%84%D0%B0%D0%BB%D0%BD%D0%B8%D1%86%D0%B0+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ width: "100%", height: "400px" }}
        ></embed>
        Error: Embedded data could not be displayed.
      </object>
    </Stack>
  );
};

export default SamuilFortress;
