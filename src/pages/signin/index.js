import '../../assets/scss/signin.scss'
import Logo from '../../assets/media/logo.png'
import { Input, Button } from 'antd';
import { useForm, Controller } from "react-hook-form";


const SignIn = () => {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            username: '',
            password: '',
        }
    });

    const onSubmit = data => console.log(data);

    return <div className="center-container gradient-bg full-height">
        <div className='center-container'>
            <img src={Logo} alt="logo" className='mb-30' />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} >
            <Controller
                name="username"
                control={control}
                render={({ field }) => <Input
                    placeholder="Username"
                    className='mb-10'
                    type="text" {...field} />}
            />
            <Controller
                name="password"
                control={control}
                render={({ field }) => <Input
                    placeholder="Password"
                    className='mb-10'
                    type="text" {...field} />}
            />
            <Button block type="primary" htmlType="submit">Login</Button>
        </form>
    </div>
}

export default SignIn