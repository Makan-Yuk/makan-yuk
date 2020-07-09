const LOGIN = "LOGIN";
const GET_USER_LOGIN = "GET_USER_LOGIN";

const getUserLogin = (data) => {
    return {
        type: GET_USER_LOGIN,
        data,
    };
};

const login = (formData, history) => async (dispatch) => {
    const url = "https://5f0579b18b06d60016ddf86e.mockapi.io/users";

    const response = await fetch(url);
    const result = await response.json();

    const checkUser = result.filter((user) => {
        return formData.email === user.email;
    });

    if (checkUser.length > 0) {
        if (checkUser[0].password !== formData.password) {
            alert("Email atau Password anda salah");
        } else {
            dispatch(getUserLogin(checkUser[0]));
            alert(`Selamat Datang ${checkUser[0].fullname}`);
            history.push("/home");
        }
    } else {
        alert("Email anda tidak terdaftar");
    }
};

export { login, GET_USER_LOGIN, LOGIN}