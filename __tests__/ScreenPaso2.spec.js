import React from 'react';
import {render} from 'react-native-testing-library';
import ScreenPaso2 from '../screens/screenPaso2/ScreenPaso2';

describe('Elements of screenPaso2', () => {
  it('renders the correct screen title', () => {
    const {queryByText} = render(<ScreenPaso2 />);
    expect(queryByText('Completá los datos: Paso 2')).not.toBeNull();
  });

  it('renders a text input for Area', () => {
    const {queryByPlaceholder} = render(<ScreenPaso2 />);
    expect(queryByPlaceholder('Superficie de parcela (Ha.)')).not.toBeNull();
  });

  it('renders a text input for Dry Material Percentaje', () => {
    const {queryByPlaceholder} = render(<ScreenPaso2 />);
    expect(queryByPlaceholder('Porcentaje de Materia Seca')).not.toBeNull();
  });

  it('renders a text input for Cows Quantity', () => {
    const {queryByPlaceholder} = render(<ScreenPaso2 />);
    expect(queryByPlaceholder('Cantidad de Vacas')).not.toBeNull();
  });

  it('renders a text input for Quadrant Area', () => {
    const {queryByPlaceholder} = render(<ScreenPaso2 />);
    expect(queryByPlaceholder('Area del Cuadrante')).not.toBeNull();
  });
  
});
