import React from 'react';
import {render} from 'react-native-testing-library';
import {GlobalProvider} from '../context/GlobalProvider'
import ScreenPaso3 from '../screens/screenPaso3/ScreenPaso3';

describe('ScreenPaso3', () => {

  it('renders the correct screen title', () => {
    const {queryByText} = render(<GlobalProvider> <ScreenPaso3/> </GlobalProvider>)
    expect(queryByText('Ingrese los Kgs de Materia Verde Disponible')).not.toBeNull()
  });

  it('renders the textInput for Materia Verde', () => {
    const { queryByPlaceholder } = render(<GlobalProvider> <ScreenPaso3/> </GlobalProvider>)
    expect(queryByPlaceholder('medicion nº: 1')).not.toBeNull()
  });

  it('renders the Button for another input of Materia Verde', () => {
    const { queryByText } = render(<GlobalProvider> <ScreenPaso3/> </GlobalProvider>)
    expect(queryByText('Agregar Medicion')).not.toBeNull()
  });

});
