import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './signIn.module.scss';

type Inputs = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input {...register('email', { required: true })} />
      {errors.email && <span>This field is required</span>}

      <input type="password" {...register('password', { required: true })} />
      {errors.password && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};
