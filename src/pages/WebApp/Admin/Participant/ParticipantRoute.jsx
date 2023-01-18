import React from "react";
import { Route } from "react-router-dom";
import ParticipantDetail from "./Detail/ParticipantDetail";
import Participant from "./Participant";

const ParticipantRoute = () => {
  return (
    <>
      <Route exact path="/app/admin/participants">
        <Participant />
      </Route>
      <Route path="/app/admin/participants/:participantId">
        <ParticipantDetail />
      </Route>
    </>
  );
};

// NEW COMMENT

export default ParticipantRoute;
