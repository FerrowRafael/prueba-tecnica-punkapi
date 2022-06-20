export interface Beer {
  id:               number;
  name:             string;
  tagline:          string;
  image_url:        string;
  abv:              string;
  ibu:              string;
  volume: {
    value:          number;
  },
}
