import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Marker } from 'react-map-gl';
import { MarkerImage } from '../Markers/Markers.styles';
import HarambeEZ from '../../assets/icons/harambeez.webp';
import { ButtonBar, ErrorWrapper, FormWrapper, NewGorillaContent, NewGorillaForm } from './NewMarkerForm.styles';
import Button from '../Button/Button';
import CurrentUserInfo from '../CurrentUserInfo/CurrentUserInfo';

const NewMarkerForm = ({ longitude, latitude, setNewMarker, addNewUser, currentUser, userInputs, setUserInputs }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitButtonRef = useRef(null);

  const onSubmit = ({ origin, about }) => {
    addNewUser(origin, about);
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
          <FormWrapper onSubmit={handleSubmit(onSubmit)} errors={errors}>
            <label htmlFor='origin'>
              <p>Skąd jesteś?</p>
              <input {...register('origin', { required: true })} name='origin' id='origin' />
              {errors.origin ? <ErrorWrapper>Musisz napisać skąd jesteś!</ErrorWrapper> : null}
            </label>
            <label htmlFor='about'>
              <p>Napisz coś o sobie!</p>
              <textarea {...register('about', { required: true })} name='about' id='about' />
              {errors.about ? <ErrorWrapper>Musisz napisać coś o sobie!</ErrorWrapper> : null}
            </label>
            <button type='submit' ref={submitButtonRef} />
          </FormWrapper>
        </NewGorillaContent>
        <ButtonBar>
          <Button onClick={() => setNewMarker(null)}>Anuluj</Button>
          <Button onClick={() => submitButtonRef.current.click()} isPrimary>
            Potwierdź
          </Button>
        </ButtonBar>
      </NewGorillaForm>
    </>
  );
};

export default NewMarkerForm;
