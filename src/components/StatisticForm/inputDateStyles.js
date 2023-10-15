// types of devices
export const getDeviceConfig = (width) => {
  if (width < 768) {
    return "mobile";
  } else if (width >= 768 && width < 1280) {
    return "tablet";
  } else {
    return "desktop";
  }
};

export const customSelectStyles = {
  mobile: {
    control: (provided) => ({
      ...provided,
      width: "280px",
      padding: "12px",
      border: "1px solid black",
      borderRadius: "30px",
      background: "rgba(193, 193, 193, 0.127)",
      cursor: "pointer",
      transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
      color: "#000",
      fontFamily: "Circe",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      textTransform: "capitalize",
      backgroundImage: 'url("../../img/Vector 19.svg")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 20px center",
    
    }),
    option: (provided) => ({
      ...provided,
      borderRadius: "20px",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      fontFamily: "Circe",
      textTransform: "capitalize",
    }),
    valueContainer: (provided) => ({
      ...provided,
      fontFamily: "Circe",
      fontSize: "16px",
      fontWeight: 400,
      cursor: "pointer",
    }),
    IndicatorsContainer: (provided) => ({
      ...provided,
      hiden: true,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    menu: (provided) => ({
            ...provided,
            marginTop: "4px",
            marginLeft: "0",
            width: "280px",
            flexShrink: 0,
            borderRadius: "20px",
            background: "rgba(255, 255, 255, 0.70)",
            boxShadow: "0px 6px 15px 0px rgba(0, 0, 0, 0.10)",
            backdropFilter: "blur(25px)",
          }),
          menuList: (provided) => ({
            ...provided,
            maxWidth: "280px",
            maxHeight: "444px",
            padding: "10px 23px 10px 20px",
          }),
          option: (provided, state) => ({
            ...provided,
            fontFamily: "Circe",
            fontSize: "18px",
            fontWeight: 400,
            color: state.isFocused ? "#FF6596" : "#000",
            background: state.isFocused ? "#fff" : "none",
            borderRadius: "10px",
          }),
  },

  tablet: {
    control: (provided) => ({
      ...provided,
      width: "160px",
      padding: "12px",
      border: "1px solid black",
      borderRadius: "30px",
      background: "rgba(193, 193, 193, 0.127)",
      cursor: "pointer",
      transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
      color: "#000",
      fontFamily: "Circe",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      textTransform: "capitalize",
      backgroundImage: 'url("../../img/Vector 19.svg")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 20px center",
    }),
    option: (provided) => ({
      ...provided,
      borderRadius: "20px",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      fontFamily: "Circe",
      textTransform: "capitalize",
    }),
    valueContainer: (provided) => ({
      ...provided,
      fontFamily: "Circe",
      fontSize: "16px",
      fontWeight: 400,
      cursor: "pointer",
    }),
    IndicatorsContainer: (provided) => ({
      ...provided,
      hiden: true,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    menu: (provided) => ({
      ...provided,
      marginTop: "4px",
      marginLeft: "-120px",
      width: "280px",
      flexShrink: 0,
      borderRadius: "20px",
      background: "rgba(255, 255, 255, 0.70)",
      boxShadow: "0px 6px 15px 0px rgba(0, 0, 0, 0.10)",
      backdropFilter: "blur(25px)",
    }),
    menuList: (provided) => ({
      ...provided,
      maxWidth: "280px",
      maxHeight: "444px",
      padding: "10px 23px 10px 20px",
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: "Circe",
      fontSize: "18px",
      fontWeight: 400,
      color: state.isFocused ? "#FF6596" : "#000",
      background: state.isFocused ? "#fff" : "none",
      borderRadius: "10px",
    }),
  },
  desktop: {
    control: (provided) => ({
      ...provided,
      width: "182px",
      padding: "12px",
      border: "1px solid black",
      borderRadius: "30px",
      background: "rgba(193, 193, 193, 0.127)",
      cursor: "pointer",
      transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
      color: "#000",
      fontFamily: "Circe",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      textTransform: "capitalize",
      backgroundImage: 'url("../../img/Vector 19.svg")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 20px center",
      
    }),
    option: (provided) => ({
      ...provided,
      borderRadius: "20px",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      fontFamily: "Circe",
      textTransform: "capitalize",
    }),
    valueContainer: (provided) => ({
      ...provided,
      fontFamily: "Circe",
      fontSize: "16px",
      fontWeight: 400,
      cursor: "pointer",
    }),
    IndicatorsContainer: (provided) => ({
      ...provided,
      hiden: true,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    menu: (provided) => ({
      ...provided,
      marginTop: "4px",
      marginLeft: "-100px",
      width: "280px",
      flexShrink: 0,
      borderRadius: "20px",
      background: "rgba(255, 255, 255, 0.70)",
      boxShadow: "0px 6px 15px 0px rgba(0, 0, 0, 0.10)",
      backdropFilter: "blur(25px)",
    }),
    menuList: (provided) => ({
      ...provided,
      maxWidth: "280px",
      maxHeight: "444px",
      padding: "10px 23px 10px 20px",
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: "Circe",
      fontSize: "18px",
      fontWeight: 400,
      color: state.isFocused ? "#FF6596" : "#000",
      background: state.isFocused ? "#fff" : "none",
      borderRadius: "10px",
    }),
  },
  
};

