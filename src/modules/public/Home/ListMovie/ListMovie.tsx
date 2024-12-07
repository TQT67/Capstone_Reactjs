import React from 'react';

import { Button, Grid, Typography } from '@mui/material';
import useListMovie from '../../../../hooks/useListMovie';
import { useNavigate } from 'react-router-dom';

const ListMovie: React.FC = () => {
  const navigate = useNavigate();
  const { data, isError, isLoading } = useListMovie();
  const goToDetail = (id:number) => { 
    navigate(`/details/${id}`)
   }
  return (
    <Grid container spacing={3}>
      {!isLoading &&
        data?.map((movie) => (
          <Grid item xs={12} md={3} key={movie.maPhim}>
            <img
              src={movie.hinhAnh}
              alt={movie.tenPhim}
              style={{ width: '100%', height: 210, borderRadius: 8, objectFit: 'cover' }}
            />
            <Typography component='h3' fontWeight={700}>
              {movie.tenPhim}
            </Typography>
            <Typography noWrap paragraph variant='body2'>
              {movie.moTa}
            </Typography>
            <Button onClick={()=>goToDetail(movie.maPhim)} size='large' fullWidth variant='contained'>
              Xem chi tiết
            </Button>
          </Grid>
        ))}
    </Grid>
  );
};

export default ListMovie;
