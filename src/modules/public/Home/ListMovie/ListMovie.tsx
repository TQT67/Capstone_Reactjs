import React from 'react';

import { Box, Button, Grid, Typography } from '@mui/material';
import useListMovie from '../../../../hooks/useListMovie';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Item } from '../../../../interfaces/movie.interface';

const ListMovie: React.FC = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const { data, jsx } = useListMovie(page);
  console.log("data", data)

  const items: Item[] = data?.items || [];
  const count = data?.totalPages || 0;

  const goToDetail = (id: number) => {
    navigate(`/details/${id}`);
  }

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (jsx) return jsx;
  return (
    <Box>
      <Grid container spacing={3}>
        {items.length > 0 ? (
          items.map((movie: Item) => (
            <Grid item xs={12} md={3} key={movie.maPhim}>
              <img
                src={movie.hinhAnh}
                alt={movie.tenPhim}
                style={{ width: '100%', height: 210, borderRadius: 8, objectFit: 'cover' }}
              />
              <Typography
                component="h3"
                fontWeight={700}
                className="py-3 text-slate-300"
                noWrap
              >
                {movie.tenPhim}
              </Typography>
              <Typography noWrap paragraph variant="body2" className="py-3 text-slate-300">
                {movie.moTa}
              </Typography>
              <Button
                onClick={() => goToDetail(movie.maPhim)}
                size="large"
                fullWidth
                variant="contained"
              >
                Xem chi tiết
              </Button>
            </Grid>
          ))
        ) : (
          <Typography
            variant="h6"
            color="textSecondary"
            align="center"
            sx={{ width: '100%', mt: 4 }}
          >
            Không có phim nào để hiển thị.
          </Typography>
        )}
      </Grid>

      {/* Pagination */}
      <Stack
        spacing={2}
        className="p-6"
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& .MuiPaginationItem-root': {
            color: '#fff',
          },
        }}
      >
        <Pagination
          count={count}
          size="large"
          color="primary"
          page={page}
          onChange={handlePageChange}
        />
      </Stack>
    </Box>
  );

};

export default ListMovie;
