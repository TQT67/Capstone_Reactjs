import { Button, Stack, TextField, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { userApi } from '../../../apis/user.api';
import { useAppDispatch } from '../../../store/hooks';
import { setCurrentUser } from '../../../store/slices/user.slice';

const schema = yup.object().shape({
  taiKhoan: yup.string().required('Tài khoản không được để trống'),
  matKhau: yup.string().required('Mật khẩu không được để trống'),
});

type FormValues = yup.InferType<typeof schema>;

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      taiKhoan: '',
      matKhau: '',
    },
  });
  const { mutate: handleLogin, isPending } = useMutation({
    mutationFn: (body: FormValues) => userApi.login(body),
    onSuccess: (currentUser) => {
      dispatch(setCurrentUser(currentUser));
    },
  });

  const onSubmit = (formValues: FormValues) => {
    handleLogin(formValues);
  };

  return (
    <Stack justifyItems='center' alignItems='center' width={500}>
      <Typography component='h1' fontWeight={700} align='center'>
        Đăng nhập
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4} width={500}>
          <TextField {...register('taiKhoan')} label='Tài Khoản' placeholder='Tài Khoản' fullWidth />
          <TextField {...register('matKhau')} label='Mật khẩu' type='password' placeholder='Mật khẩu' fullWidth />
          <Button variant='contained' color='primary' type='submit' fullWidth disabled={isPending}>
            Đăng nhập
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default LoginPage;
