import React from 'react';
import loadable from '../utils/loadable';
import Loading from './Loading';

// Loading - No need to lazy load this component
export { default as Loading } from './Loading';

export const Welcome = loadable(() => import('./Welcome'), {
  fallback: <Loading />,
});

export const FotterForm = loadable(() => import('./FotterForm'), {
  fallback: <Loading />,
});

export const PopularCampaigns = loadable(() => import('./PopularCampaigns'), {
  fallback: <Loading />,
});

export const OfferCaption = loadable(() => import('./OfferCaption'), {
  fallback: <Loading />,
});

export const DisplayScreen = loadable(() => import('./DisplayScreen'), {
  fallback: <Loading />,
});

export const ExploreCollections = loadable(
  () => import('./ExploreCollections'),
  {
    fallback: <Loading />,
  },
);
