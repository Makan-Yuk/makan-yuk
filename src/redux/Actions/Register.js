const REGISTER = "REGISTER"
const GET_USER_REGISTER = "GET_USER_REGISTER";

const registerUser = (formData, history) => async (dispatch) => {
  const url = "https://5f0579b18b06d60016ddf86e.mockapi.io/users";
  const options = {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-type": "application/json",
    },
  };
  const response = await fetch(url, options);
  await response.json();

  if (response.status === 201) {
    alert("Terima kasih sudah mendaftar");
    history.push("/");
  }
};





export { GET_USER_REGISTER, REGISTER, registerUser};