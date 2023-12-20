import { useNavigate } from "react-router-dom";

const FormLogo = () => {
  const navigate = useNavigate();
  return (
    <img
      src="img/logo.svg"
      alt="Golobe logo"
      width={210}
      height={210}
      className="form-logo"
      onClick={() => navigate("/")}
    />
  );
};

export default FormLogo;
