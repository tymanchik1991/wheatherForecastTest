import { FORECAST_ICONS_URL } from '../constants';

export const getIconUrl = (icon) => {
  return `${FORECAST_ICONS_URL}${icon}@2x.png`;
};