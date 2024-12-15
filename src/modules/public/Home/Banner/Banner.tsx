import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Typography, IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import useListBanner from "../../../../hooks/useBanner";

const BannerList: React.FC = () => {
  const { data: banners, isLoading, isError } = useListBanner();
  const [activeStep, setActiveStep] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevStep) =>
        prevStep === (banners?.length || 0) - 1 ? 0 : prevStep + 1
      );
    }, 5000); 

    return () => clearInterval(timer);
  }, [banners?.length]);

  const handleNext = () => {
    setActiveStep((prevStep) =>
      prevStep === (banners?.length || 0) - 1 ? 0 : prevStep + 1
    );
  };

  const handleBack = () => {
    setActiveStep((prevStep) =>
      prevStep === 0 ? (banners?.length || 0) - 1 : prevStep - 1
    );
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" color="error">
          Lỗi khi tải banner
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ position: "relative", width: "100%", height: "600px", overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: `translateX(-${activeStep * 100}%)`,
        }}
      >
        {banners?.map((banner) => (
          <Box
            key={banner.maBanner}
            sx={{
              minWidth: "100%",
              height: "600px",
              backgroundImage: `url(${banner.hinhAnh})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </Box>

      {/* Nút điều hướng */}
      <IconButton
        sx={{
          position: "absolute",
          left: 8,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "rgba(255,255,255,0.5)",
          "&:hover": { bgcolor: "rgba(255,255,255,0.8)" },
        }}
        onClick={handleBack}
      >
        <KeyboardArrowLeft />
      </IconButton>

      <IconButton
        sx={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "rgba(255,255,255,0.5)",
          "&:hover": { bgcolor: "rgba(255,255,255,0.8)" },
        }}
        onClick={handleNext}
      >
        <KeyboardArrowRight />
      </IconButton>

      {/* Chỉ số slide */}
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {banners?.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: index === activeStep ? "primary.main" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
            }}
            onClick={() => handleStepChange(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BannerList;