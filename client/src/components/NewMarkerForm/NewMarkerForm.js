import React from 'react';
import { Marker } from 'react-map-gl';
import { MarkerImage } from '../Markers/Markers.styles';
import HarambeEZ from '../../assets/icons/harambeez.webp';
import { ButtonBar, FormWrapper, NewGorillaForm } from './NewMarkerForm.styles';
import { NewGorillaContent } from '../../views/Map/Map.styles';
import Button from '../Button/Button';
import CurrentUserInfo from '../CurrentUserInfo/CurrentUserInfo';

const NewMarkerForm = ({ longitude, latitude, setNewMarker, addNewUser, currentUser, userInputs, setUserInputs }) => {
  const handleNewOrigin = ({ target }) => {
    if (target.value.length <= 30) {
      setUserInputs((prevInputs) => ({
        ...prevInputs,
        origin: target.value,
      }));
    }
    return;
  };

  const handleNewAbout = ({ target }) => {
    if (target.value.length <= 100) {
      setUserInputs((prevInputs) => ({
        ...prevInputs,
        about: target.value,
      }));
    }
    return;
  };

  return (
    <>
      <Marker longitude={longitude} latitude={latitude} offsetLeft={-20} offsetTop={-20}>
        <MarkerImage src={HarambeEZ} alt='HarambeEZ' />
      </Marker>
      <NewGorillaForm
        latitude={latitude}
        longitude={longitude}
        closeButton={false}
        closeOnClick={false}
        anchor='bottom'
        offsetTop={-20}
        offsetLeft={3}
        dynamicPosition
      >
        <NewGorillaContent>
          <h2>DOŁĄCZ DO GORYLI</h2>
          <p>Zapisujesz się jako...</p>
          <CurrentUserInfo currentUser={currentUser} />
          <FormWrapper>
            <label htmlFor='origin'>
              <p>Skąd jesteś?</p>
              <input name='origin' id='origin' value={userInputs.origin} onChange={handleNewOrigin} />
            </label>
            <label htmlFor='about'>
              <p>Napisz coś o sobie!</p>
              <textarea name='about' id='about' value={userInputs.about} onChange={handleNewAbout} />
            </label>
          </FormWrapper>
        </NewGorillaContent>
        <ButtonBar>
          <Button onClick={() => setNewMarker(null)}>Anuluj</Button>
          <Button onClick={addNewUser} isPrimary>
            Potwierdź
          </Button>
        </ButtonBar>
      </NewGorillaForm>
    </>
  );
};

export default NewMarkerForm;
