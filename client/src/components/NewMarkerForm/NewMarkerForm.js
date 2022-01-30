import React, { useRef, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Marker } from 'react-map-gl';
import { MarkerImage } from '../Markers/Markers.styles';
import HarambeEZ from '../../assets/icons/harambeez.webp';
import {
  AboutLengthSpan,
  ButtonBar,
  ErrorWrapper,
  FormWrapper,
  NewGorillaContent,
  NewGorillaForm,
} from './NewMarkerForm.styles';
import Button from '../Button/Button';
import CurrentUserInfo from '../CurrentUserInfo/CurrentUserInfo';

const NewMarkerForm = ({ longitude, latitude, setNewMarker, addNewUser, currentUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const submitButtonRef = useRef(null);
  const watchAbout = watch('about', false);
  const [aboutLength, setAboutLength] = useState(0);

  const onSubmit = ({ origin, about }) => {
    addNewUser(origin, about);
  };

  useEffect(() => {
    setAboutLength(watchAbout?.length);
  }, [watchAbout]);

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
              <input
                autoComplete='off'
                id='origin'
                maxLength='30'
                {...register('origin', { required: true, maxLength: 30 })}
              />
              {errors.origin ? <ErrorWrapper>Musisz napisać skąd jesteś!</ErrorWrapper> : null}
            </label>
            <label htmlFor='about'>
              <p>
                Napisz coś o sobie! <AboutLengthSpan>{aboutLength}/256</AboutLengthSpan>
              </p>
              <textarea id='about' maxLength='256' {...register('about', { required: true, maxLength: 256 })} />
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
