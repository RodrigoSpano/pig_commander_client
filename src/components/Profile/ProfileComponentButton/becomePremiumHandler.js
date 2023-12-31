import axios from "axios";
export const becomePremiumHandler = async (token) => {
  try {
    //* Si envian el token, hago la peticion al back para pagar por MP
    if (token) {
      const { data } = await axios.get("/subscription/createOrder/10000", {
        headers: { Authorization: token },
      });

      // * Me dirije al link que me da el back
      window.location.href = data.link;
    }
  } catch (error) {
    console.log(error);
  }
};
