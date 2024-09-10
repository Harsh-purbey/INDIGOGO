import React, { Fragment } from 'react';
import i18next from 'i18next';
import { Helmet } from 'react-helmet';
import {
  Welcome,
  PopularCampaigns,
  OfferCaption,
  DisplayScreen,
  ExploreCollections,
  FotterForm,
} from '@/components';

function Landing() {
  return (
    <Fragment>
      <Helmet>
        <html lang={i18next.language} dir={i18next.dir(i18next.language)} />
      </Helmet>
      <OfferCaption />
      <DisplayScreen />
      <PopularCampaigns />
      <ExploreCollections />
      <FotterForm />
      <Welcome />
    </Fragment>
  );
}

export default Landing;
