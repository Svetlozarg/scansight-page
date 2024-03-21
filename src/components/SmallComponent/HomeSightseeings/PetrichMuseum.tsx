import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LinkIcon from "@mui/icons-material/Link";
import { useTranslation } from "react-i18next";

const PetrichMuseum = () => {
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
        {t("readMore.historicalMuseum.title")}
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: "600px",
          backgroundImage:
            "url('https://ik.imagekit.io/obelussoft/VisitPetrich/p6Px8RBD.jpg?updatedAt=1708364289427')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "10px",
        }}
      ></Box>

      <Stack mb={2} direction="row" gap={4}>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={1}
        >
          <CalendarMonthIcon />
          <Typography>{t("readMore.historicalMuseum.workTime")}</Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={1}
        >
          <LinkIcon />
          <Link href="https://petrichhistorymuseum.bg" target="_blank">
            <Typography sx={{ textDecoration: "underline" }}>
              {t("readMore.historicalMuseum.website")}
            </Typography>
          </Link>
        </Stack>
      </Stack>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.historicalMuseum.text1")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.historicalMuseum.text2")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.historicalMuseum.text3")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.historicalMuseum.text4")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.historicalMuseum.text5")}
      </Typography>

      <Typography component="p" variant="body1" textAlign="justify">
        {t("readMore.historicalMuseum.text6")}
      </Typography>

      <object
        title="Petrich Museum Location"
        data="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%BC%D1%83%D0%B7%D0%B5%D0%B9%20%D0%9F%D0%B5%D1%82%D1%80%D0%B8%D1%87,%20%D0%A6%D0%B5%D0%BD%D1%82%D1%8A%D1%80,%20%D1%83%D0%BB.%20%E2%80%9E%D0%A0%D0%BE%D0%BA%D1%84%D0%B5%D0%BB%D0%B5%D1%80%E2%80%9C%2080,%202850%20%D0%9F%D0%B5%D1%82%D1%80%D0%B8%D1%87+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        style={{ width: "100%", height: "400px" }}
      >
        <embed
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%BC%D1%83%D0%B7%D0%B5%D0%B9%20%D0%9F%D0%B5%D1%82%D1%80%D0%B8%D1%87,%20%D0%A6%D0%B5%D0%BD%D1%82%D1%8A%D1%80,%20%D1%83%D0%BB.%20%E2%80%9E%D0%A0%D0%BE%D0%BA%D1%84%D0%B5%D0%BB%D0%B5%D1%80%E2%80%9C%2080,%202850%20%D0%9F%D0%B5%D1%82%D1%80%D0%B8%D1%87+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ width: "100%", height: "400px" }}
        ></embed>
        Error: Embedded data could not be displayed.
      </object>
    </Stack>
  );
};

export default PetrichMuseum;
