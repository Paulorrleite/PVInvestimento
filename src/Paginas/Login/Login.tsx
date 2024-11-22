import { useForm } from 'react-hook-form';
import { login } from '../../Servicos/Login';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const UserFrom = () => {
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate();
    
    const onSubmit = async (data: any) => {
        console.log(data);
        try{
            const response = await login(data);
            if (response.data && response.status === 200) {
                alert('Login realizado com sucesso');
                sessionStorage.setItem('token', response.data.token);               
                const testeRecuperaDado = sessionStorage.getItem('token');
                alert('Dado Recuperado do session storage: ' + testeRecuperaDado);
                navigate("/teste");
        }}
        catch (error){
            console.error(error);
        }
    }
    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="LoginForm login-container">
                    <div className='LogoForm image-container'>
                    <img 
                        src='/src/assets/Leonardo_Phoenix_Create_a_modern_professional_logo_for_PVInves_1-removebg-preview.png' 
                        alt='Logo' 
                    />
                    </div>
                    <div className='input-login'>
                        <label>Email: </label>
                        <input type="email" {...register("email")} required/>
                    </div>
                    <div className='input-login'>
                        <label>Senha: </label>
                        <input type="password" {...register("password")} required/>
                    </div>
                    <button type="submit" className='space-button'>Enviar</button>
                </div>
            </form>
        </>
    );
};

export default UserFrom;
