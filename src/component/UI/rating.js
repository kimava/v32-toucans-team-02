import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff3d47',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

export default function CustomizedRatings({
  id,
  disabled,
  preValue,
  getValue,
}) {
  const onChange = (event) => {
    const value = event.target.value;
    getValue(value);
  };
  return (
    <div>
      <Box component='fieldset' mb={1} borderColor='transparent'>
        <StyledRating
          name={id}
          disabled={disabled}
          value={preValue ? preValue : 0}
          precision={1}
          onChange={onChange}
          icon={<FavoriteIcon fontSize='inherit' />}
        />
      </Box>
    </div>
  );
}
