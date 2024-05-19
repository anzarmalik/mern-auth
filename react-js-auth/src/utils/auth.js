import axios from '../axiosConfig';

export const handleAuthentication = (response, navigate) => {
    const { token } = response.data;
    if (token) {
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        navigate('/application');
    } else {
        navigate('/signup');
    }
};
