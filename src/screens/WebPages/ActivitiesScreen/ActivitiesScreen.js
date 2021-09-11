// import from react.
import React from "react";
import { useQuery } from 'react-query';

// import from local files.
import { Rectangular, Title } from "../../../assets/styles/globalStyles";
import CardHRight from "../../../components/WebPages/CardH/CardHRight";
import CardHLeft from '../../../components/WebPages/CardH/CardHLeft';
import { BgColor } from './ActivitiesStyles';
import PageLayout from "../PageLayout";

// import services.
import { getActivities } from "../../../services/axios/queries/activities";

//import constants.
import { ACTIVITIES_QUERY } from '../../../constants/queries';

function Activities() {
  const { isLoading, isError, data } = useQuery(ACTIVITIES_QUERY, getActivities);

  if (isLoading)
    return <h1>Loading...</h1>
  
  if (isError)
    return <h1>Error</h1>

  return (
    <PageLayout>
      <Title>Actividades</Title>
      <Rectangular />

      { data.data.map((activity, index) => {
          return index%2 === 1 ? (
            <BgColor key={activity.id}>
              <CardHLeft data={activity}/>  
            </BgColor>
          ) : (
            <CardHRight key={activity.id} data={activity}/>
          )
      })}
      
    </PageLayout>
  );
}

export default Activities;
